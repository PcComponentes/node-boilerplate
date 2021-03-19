import { NextFunction, Request, Response, Router } from 'express';
import fs from 'fs';
import path from 'path';
import { Method, Route } from './routes.interfaces';

const ROUTING_FOLDER = path.join(__dirname, 'controllers');
const ROUTING_FILENAME = 'index.ts';

function autoload(dir: string, routingFiles: string[] = []) {
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) autoload(name, routingFiles);
    else name.endsWith(ROUTING_FILENAME) && routingFiles.push(name);
  }
  return routingFiles;
}

export const router = Router();
autoload(ROUTING_FOLDER).forEach(async (path) => {
  const { routes }: Route = await import(path);

  Object.entries(routes).forEach(([slug, controllers = {}]) => {
    Object.entries(controllers).forEach(([method, Controller]) => {
      const controller = new Controller();

      router[method as Method](slug, (req: Request, res: Response, next: NextFunction) =>
        controller.invoke(req, res, next)
      );
    });
  });
});
