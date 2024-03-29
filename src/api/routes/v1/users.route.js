import multer from "multer";

import { AuthMiddleware } from "../../middlewares/auth.middleware.js";
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
    let storage = multer.memoryStorage();
    let upload = multer({ storage: storage });
    let uploadFile = upload.any();

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
    // 학생: 코드 제출 status 목록 요청
    this.app.get("/api/v1/user/status/option", [
      authMiddleware.verifyToken,
      usersController.getStatusList,
    ]);
     //사용자 소속 강의, 주차 목록 요청
     this.app.get("/api/v1/user/courses", [
      authMiddleware.verifyToken,
      usersController.getCourseAndWeek,
    ]);
    
    // 학생: 이의제기 토글 요청 
    this.app.post("/api/v1/user/qna/:submitId",  [
      authMiddleware.verifyToken,
      usersController.getObjection,
    ]);
    // 분반관리자: 제출 결과 수정 
    this.app.post("/api/v1/user/status/edit/:submitId",  [
      authMiddleware.verifyToken,
      usersController.modifyResult,
    ]);
    // 문제 추가 요청
    this.app.post("/api/v1/user/problem/:classId/:weekId", uploadFile, [
      authMiddleware.verifyToken,
      usersController.postAddProblem,
    ]);

  }
}
