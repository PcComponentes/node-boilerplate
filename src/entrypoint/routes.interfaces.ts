import { CommandController } from './controllers/command.controller';
import { QueryController } from './controllers/query.controller';

export type Controller = typeof QueryController | typeof CommandController;
export type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
export type Route = Record<string, PartialRecord<Method, Controller>>;
