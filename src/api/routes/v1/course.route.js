import { CourseController } from "../../controllers/course.controller.js";

export class CourseRoute {
  app;
  constructor(app) {
    this.app = app;
    this.configure();
  }

  configure() {
    const courseController = new CourseController();

    // 관리자: 강좌 생성, 교수 등록
    this.app.post("/api/v1/course/enrollProf", [
      courseController.adminEnrollProfToClass,
    ]);

    // 교수: 조교 목록 추가
    this.app.post("/api/v1/course/assists/:classId", [
      courseController.addAssistsList,
    ]);

    // 교수: 조교 목록 제거
    this.app.delete("/api/v1/course/assists/delete/:classId", [
      courseController.deleteAssistsList,
    ]);

    // 교수: 학생 목록 추가
    this.app.post("/api/v1/course/stds/:classId", [
      courseController.addStdsList,
    ]);

    //해당 수업 문제 목록 요청
    this.app.get("/api/v1/course/problem/:classId", [
      courseController.getCourseList,
    ]);
    //교수: 학생, 조교 목록 요청
    this.app.get("/api/v1/course/user/:classId", [
      courseController.getStudentAndAssists,
    ]);
  }
}
