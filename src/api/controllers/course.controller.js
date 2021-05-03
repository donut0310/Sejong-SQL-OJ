import { Database } from "../models/db.js";

export class CourseController {
  constructor() {}

  // 관리자: 강좌 생성 및 교수 할당
  async adminEnrollProfToClass(req, res, next) {
    const database = new Database();

    const userList = req.body.users;
    const className = req.body.class_name;

    let professors = "";
    for (let i in userList) {
      if (i == userList.length - 1) {
        professors += userList[i];
      } else professors += userList[i] + ",";
    }
    let sql = "insert into course(class_name,admin_id) values(?,?)";
    let params = [className, professors];
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        const a = await connection.query(sql, params);
        connection.release();
        res.status(200).send("강좌 생성이 완료되었습니다.");
      } catch (err) {
        console.log("errorerror");
        connection.release();
      }
    } catch (err) {
      console.log("ERROR");
      return false;
    }
  }

  // 교수: 학생 조교 등록
  async profEnrollStdToClass(req, res, next) {
    const database = new Database();

    const userList = req.body.users;
    const classId = req.body.class_id;

    let stds = "";
    for (let i in userList) {
      if (i == userList.length - 1) {
        stds += userList[i];
      } else stds += userList[i] + ",";
    }
    let sql = "update course set user_id = ? where class_id = ?";
    let params = [stds, classId];
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        const a = await connection.query(sql, params);
        connection.release();
        res.status(200).send("학생, 조교 등록이 완료되었습니다.");
      } catch (err) {
        console.log("errorerror");
        connection.release();
      }
    } catch (err) {
      console.log("ERROR");
      return false;
    }
  }

  // 교수: 학생, 조교 등록 해제
  async profDeleteStdInClass(req, res, next) {
    //기능 정의 전
  }
}

// 삭제 후
// ALTER TABLE 테이블명 AUTO_INCREMENT=1;
// SET @CNT = 0;
// UPDATE 테이블명 SET 테이블명.컬럼명 = @CNT:=@CNT+1;
