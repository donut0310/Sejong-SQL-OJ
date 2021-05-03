// import { Application } from "express";

import { IndexController } from "./../../controllers/index.controller.js";

export class IndexRoute {
  app;
  constructor(app) {
    this.app = app;
    this.configure();
  }

  configure() {
    const indexController = new IndexController();
    this.app.get("/*", [indexController.sendIndex]);
  }
}
