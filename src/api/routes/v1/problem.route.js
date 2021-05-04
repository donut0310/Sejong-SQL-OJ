import { ProblemController } from "../../controllers/problem.controller.js";
import { AuthMiddleware } from "../../middlewares/auth.middleware.js";

export class ProblemRoute {
  app;
  constructor(app) {
    this.app = app;
    this.configure();
  }

  configure() {
    const problemController = new ProblemController();
    const authMiddleware = new AuthMiddleware();

    this.app.get("/api/v1/problem/:classId/:weekId", [
      authMiddleware.verifyToken,
      problemController.getProblemListAndSubmitStatus,
    ]);
  }
}
