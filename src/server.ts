import express, { Application } from "express";
import { router } from "./entrypoint/routes";

export class Server {
  private app: Application;

  constructor() {
    this.app = express();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.app.use(router);
  }

  public listen() {
    const port = process.env.PORT;

    this.app.listen(port, () => {
      return console.log(`Server is listening on ${port}`);
    });
  }
}
