import express, { Application } from "express";
import { router } from "./entrypoint/routes";
import { Env } from "./infrastructure/env";

export class Server {
  private app: Application;

  constructor(private env: Env) {
    this.app = express();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }

  public listen() {
    const port = this.env.get("PORT");

    this.app.listen(port, () => {
      return console.log(`Server is listening on ${port}`);
    });
  }
}
