// import { AuthMiddleware } from "../../middlewares/auth.middleware";
// import { UsersMiddleware } from "../../middlewares/users.middleware";
import { ScoreController } from "../../controllers/score.controller.js";
export class ScoreRoute {
  app;

  constructor(app) {
    this.app = app;
    this.configure();
  }

  configure() {
     const scorecontroller = new ScoreController();
    // scorecontroller.scoreing();
    // 채점
    this.app.post("/api/v1/score", [scorecontroller.scoreing]);


  }
}
