import { Env } from './infrastructure/env';
import { Server } from './server';

const env = new Env();
const server = new Server(env);
server.listen();
