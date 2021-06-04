import { WeekController } from "../../controllers/week.controller.js";
import { AuthMiddleware } from "../../middlewares/auth.middleware.js";

export class WeekRoute {
  app;
  constructor(app) {
    this.app = app;
    this.configure();
  }
  configure() {
    const weekController = new WeekController();
    const authMiddleware = new AuthMiddleware();

    this.app.get("/api/v1/week/:weekId", [
      authMiddleware.verifyToken,
      weekController.getWeekInfo,
    ]);
  }
}
