// import { AuthMiddleware } from "../../middlewares/auth.middleware";
// import { UsersMiddleware } from "../../middlewares/users.middleware";
import { UsersController } from "../../controllers/users.controller.js";
//import {dbInit} from "../../models/db.js"
//import { ScoreController } from "../../controllers/score.controller.js";
export class UsersRoute {
  app;

  constructor(app) {
    this.app = app;
    this.configure();
  }

  configure() {
    const usersController = new UsersController();
    //const scorecontroller = new ScoreController();
    //scorecontroller.scoreing();
    // 회원가입
    this.app.post("/api/v1/user/signup", [usersController.createUser]);

    // // 로그인시 유저정보 유지
    // this.app.get("/api/v1/user/signin", [
    //   authMiddleware.verifyToken,
    //   usersController.getProfile,
    // ]);

    // // 아이디 중복검사
    // this.app.post("/api/v1/user/id", [
    //   usersMiddleware.validatePostIsAlreadyID,
    //   usersMiddleware.isNull,
    //   usersMiddleware.checkAlreadyID,
    //   usersController.assureUniqueValue,
    // ]);
  }
}
