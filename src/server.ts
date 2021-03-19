import bodyParser from 'body-parser';
import express, { Application } from 'express';
import { router } from './entrypoint/routes';
import { Env } from './infrastructure/env';

export class Server {
  private app: Application;

  constructor(private env: Env) {
    this.app = express();
    this.settings();
    this.registerRoutes();
  }

  private settings() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  private registerRoutes() {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }

  public listen() {
    const port = this.env.get('PORT');

    this.app.listen(port, () => {
      // TODO use winston
      // eslint-disable-next-line no-console
      console.log(`Server is listening on ${port}`);
    });
  }
}
