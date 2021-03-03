import { NextFunction, Request, Response, Router } from 'express';
import fs from 'fs';
import { CommandController } from './controllers/command.controller';
import { QueryController } from './controllers/quey.controller';

const ROUTING_FOLDER_NAME = 'index.ts';

export type ControllerInterface = QueryController | CommandController;
export type MethodInterface = 'get' | 'post' | 'put' | 'delete';
export type RouteInterface = Record<string, Record<string, ControllerInterface>>;
// TODO: Set correct interface
// export type RouteInterface = Record<string, Record<MethodInterface, ControllerInterface>>;

function autoload(dir: string, routingFiles: string[] = []) {
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) autoload(name, routingFiles);
    else name.endsWith(ROUTING_FOLDER_NAME) && routingFiles.push(name);
  }
  return routingFiles;
}

const routes: RouteInterface = autoload(__dirname).reduce((routes, route) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const routesConfig: RouteInterface = require(route).routes;
  return { ...routes, ...routesConfig };
}, {});

export const router = Router();
Object.entries(routes).forEach(([slug, entrypoints]) =>
  Object.entries(entrypoints).forEach(([method, middleware]) => {
    router[method as MethodInterface](slug, (req: Request, res: Response, next: NextFunction) =>
      middleware.invoke(req, res, next)
    );
  })
);

export const registerRoute = (routeController: QueryController | CommandController) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return routeController.invoke(req, res, next);
};
