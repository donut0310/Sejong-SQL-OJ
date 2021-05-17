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

    // 교수: 조교 목록 수정

    // 교수: 학생 목록 수정

    // 교수: 학생, 조교 등록
    this.app.post("/api/v1/course/enrollStd", [
      courseController.profEnrollStdToClass,
    ]);
  }
}
