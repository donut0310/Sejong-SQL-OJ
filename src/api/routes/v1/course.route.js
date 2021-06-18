import { CourseController } from "../../controllers/course.controller.js";
import { AuthMiddleware } from "../../middlewares/auth.middleware.js";

export class CourseRoute {
  app;
  constructor(app) {
    this.app = app;
    this.configure();
  }

  configure() {
    const courseController = new CourseController();
    const authMiddleware = new AuthMiddleware();

    // 관리자: 강좌 생성, 교수 등록
    this.app.post("/api/v1/course/enrollProf", [
      authMiddleware.verifyToken,
      courseController.adminEnrollProfToClass,
    ]);

    // 분반 관리자: 특정 문제에 대한 분반 내 학생들의 최고점 status 목록 요청
    this.app.get("/api/v1/course/status/:classId/:pId", [
      authMiddleware.verifyToken,
      courseController.getTopStatusInClass,
    ]);

    // 교수: 조교 목록 추가
    this.app.post("/api/v1/course/assists/:classId", [
      authMiddleware.verifyToken,
      courseController.addAssistsList,
    ]);

    // 교수: 조교 목록 제거
    this.app.delete("/api/v1/course/assists/delete/:classId", [
      authMiddleware.verifyToken,
      courseController.deleteAssistsList,
    ]);

    // 교수: 학생 목록 추가
    this.app.post("/api/v1/course/stds/:classId", [
      authMiddleware.verifyToken,
      courseController.addStdsList,
    ]);

    // 교수: 학생 목록 제거
    this.app.delete("/api/v1/course/stds/delete/:classId", [
      authMiddleware.verifyToken,
      courseController.deleteStdsList,
    ]);

    // 교수: 주차 삭제
    this.app.delete("/api/v1/course/week/:weekId", [
      authMiddleware.verifyToken,
      courseController.deleteWeekData,
    ]);

    // 교수: 문제 삭제
    this.app.delete("/api/v1/course/problem/:pId", [
      authMiddleware.verifyToken,
      courseController.deleteProblem,
    ]);

    // 수업 이름 요청
    this.app.get("/api/v1/course/:classId", [
      authMiddleware.verifyToken,
      courseController.getClassName,
    ]);

    //해당 수업 문제 목록 요청
    this.app.get("/api/v1/course/problem/:classId", [
      authMiddleware.verifyToken,
      courseController.getCourseList,
    ]);

    //교수: 학생, 조교 목록 요청
    this.app.get("/api/v1/course/user/:classId", [
      authMiddleware.verifyToken,
      courseController.getStudentAndAssists,
    ]);
    //교수: 주차 추가
    this.app.post("/api/v1/course/week/:classId", [courseController.addWeek]);
  }
}
