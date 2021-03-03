import { Router } from 'express';
import fs from 'fs';
import { QueryController } from './controllers/quey.controller';

const ROUTING_FOLDER_NAME = 'index.ts';

export type ControllerInterface = QueryController;
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
    router[method as MethodInterface](slug, middleware.invoke);
  })
);
