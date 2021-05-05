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

    //문제 제출
    this.app.post("/api/v1/problem/testing/",[
      problemController.getProblemCommit
    ]);
    //문제 실행 
    this.app.post("/api/v1/problem/test/",[
      problemController.getProcessProblem
    ]);
    // 문제 목록 요청 & 현재 사용자의 제출 결과 상태
    this.app.get("/api/v1/problem/:classId/:weekId", [
      authMiddleware.verifyToken,
      problemController.getProblemListAndSubmitStatus,
    ]);

    //선택된 문제 정보 요청
    this.app.get("/api/v1/problem/:pId", [
      authMiddleware.verifyToken,
      problemController.getSelectedProblemInfo,
    ]);
  }
}
