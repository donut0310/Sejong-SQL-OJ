import { AuthMiddleware } from "../../middlewares/auth.middleware.js";
// import { UsersMiddleware } from "../../middlewares/users.middleware";
import { UsersController } from "../../controllers/users.controller.js";
export class UsersRoute {
  app;

  constructor(app) {
    this.app = app;
    this.configure();
  }

  configure() {
    const usersController = new UsersController();
    const authMiddleware = new AuthMiddleware();
    // 회원가입
    this.app.post("/api/v1/user/signup", [usersController.createUser]);

    // 로그인시 유저정보 유지
    this.app.get("/api/v1/user/auth", [
      authMiddleware.verifyToken,
      usersController.getProfile,
    ]);

    // 제출한 코드 요청
    this.app.get("/api/v1/user/code/:submitId", [
      authMiddleware.verifyToken,
      usersController.getSubmittedCode,
    ]);

    // 문제 추가 요청
    this.app.post("/api/v1/user/:classId/:weekId", [
      usersController.postAddProblem,
    ]);
    //사용자 소속 강의, 주차 목록 요청
    this.app.get("/api/v1/user/:userId", [
      authMiddleware.verifyToken,
      usersController.getCourseAndWeek,
    ]);
  }
}
