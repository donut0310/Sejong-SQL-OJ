import { Database } from "../models/db.js";

export class CourseController {
  constructor() {}

  // 관리자: 강좌 생성 및 교수 할당
  async adminEnrollProfToClass(req, res) {
    const database = new Database();

    const profList = req.body.users;
    const className = req.body.class_name;

    let CLASSID;
    let data = {};

    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        // 강좌 생성
        let sql = "insert into course(class_name) values(?)";
        let params = [className];
        const [createCourse] = await connection.query(sql, params);
        connection.release();
        CLASSID = createCourse.insertId;

        // 교수 분반 배치
        let sql2 = "insert into u_c_bridge values ?";
        let params2 = [];
        let inputArr = [];

        for (let i in profList) {
          inputArr.push([profList[i], CLASSID, 1]);
        }
        params2 = [inputArr];
        const allocProf = await connection.query(sql2, params3);
        connection.release();

        data.success = true;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        let backSql = "delete from course where class_id = ?";
        let backParams = [CLASSID];
        const [backQuery] = await connection.query(backSql, backParams);
        connection.release();
        data.success = "false";
        data.err = err;
        res.status(400).send(data);
      }
    } catch (err) {
      data.success = "false";
      data.err = err;
      res.status(400).send(data);
      return false;
    }
  }

  // 교수: 조교 목록 추가
  async addAssistsList(req, res) {
    const database = new Database();
    const assistsList = req.body.assists;
    const classId = req.params.classId;
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "select user_id from u_c_bridge where class_id = ?";
        let params = [classId];

        const [a] = await connection.query(sql, params);
        connection.release();
        let reValue = [];

        let inputArr = [];

        for (let i in a) {
          reValue.push(a[i].user_id);
        }

        // 데이터에 class_id 와 author 를 지정해준다
        for (let i in assistsList) {
          if (!reValue.includes(assistsList[i])) {
            inputArr.push([assistsList[i], classId, 1]);
          }
        }

        let sql2 = "insert into u_c_bridge(user_id,class_id,author) values ?";
        let params2 = [inputArr];
        const [b] = await connection.query(sql2, params2);
        connection.release();
        res.status(200).send({ result: null, message: "success" });
      } catch (err) {
        connection.release();
        data.result = null;
        data.message = "fail";
        data.error = err;
        res.status(400).send(data);
      }
    } catch (err) {
      data.result = null;
      data.message = "fail";
      data.error = err;
      res.status(400).send(data);
      return false;
    }
  }

  // 교수: 조교 목록 제거
  async deleteAssistsList(req, res) {
    const database = new Database();
    const assistsList = req.body.assists;
    const classId = req.params.classId;
    let data = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        for (let i in assistsList) {
          assistsList[i] = JSON.stringify(assistsList[i]);
        }

        let sql =
          "delete from u_c_bridge where class_id = ? and user_id in (" +
          assistsList +
          ")";
        let params = [classId];

        const [a] = await connection.query(sql, params);
        connection.release();

        data.result = null;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        connection.release();
        data.result = null;
        data.message = "fail";
        data.error = err;
        res.status(400).send(data);
      }
    } catch (err) {
      data.result = null;
      data.message = "fail";
      data.error = err;
      res.status(400).send(data);
      return false;
    }
  }

  // 교수: 학생 목록 추가
  async addStdsList(req, res) {
    const database = new Database();
    const stdsList = req.body.stds;
    const classId = req.params.classId;
    let data = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "select user_id from u_c_bridge where class_id = ?";
        let params = [classId];

        const [a] = await connection.query(sql, params);
        connection.release();

        let reValue = [];
        let inputArr = [];

        for (let i in a) {
          reValue.push(a[i].user_id);
        }

        // 데이터에 class_id 와 author 를 지정해준다
        for (let i in stdsList) {
          if (!reValue.includes(stdsList[i])) {
            inputArr.push([stdsList[i], classId, 0]);
          }
        }

        let sql2 = "insert into u_c_bridge(user_id,class_id,author) values ?";
        let params2 = [inputArr];
        const [b] = await connection.query(sql2, params2);
        connection.release();
        data.result = null;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        connection.release();
        data.result = null;
        data.message = "fail";
        data.error = err;
        res.status(400).send(data);
      }
    } catch (err) {
      data.result = null;
      data.message = "fail";
      data.error = err;
      res.status(400).send(data);
      return false;
    }
  }

  // 교수: 학생 목록 제거
  async deleteStdsList(req, res) {
    const database = new Database();
    const stdsList = req.body.stds;
    const classId = req.params.classId;
    let data = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        for (let i in stdsList) {
          stdsList[i] = JSON.stringify(stdsList[i]);
        }

        let sql =
          "delete from u_c_bridge where class_id = ? and user_id in (" +
          stdsList +
          ")";
        let params = [classId];

        const [a] = await connection.query(sql, params);
        connection.release();
        data.result = null;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        connection.release();
        data.result = null;
        data.message = "fail";
        data.error = err;
        res.status(400).send(data);
      }
    } catch (err) {
      data.result = null;
      data.message = "fail";
      data.error = err;
      res.status(400).send(data);
      return false;
    }
  }

  // 교수: 주차 삭제
  async deleteWeekData(req, res) {
    const database = new Database();
    const weekId = req.params.weekId;
    let data = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "delete from week where week_id = ?;";
        let params = [weekId, weekId];

        const [a] = await connection.query(sql, params);
        connection.release();
        data.result = null;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        connection.release();
        data.result = null;
        data.message = "fail";
        data.error = err;
        res.status(400).send(data);
      }
    } catch (err) {
      data.result = null;
      data.message = "fail";
      data.error = err;
      res.status(400).send(data);
      return false;
    }
  }

  // 교수: 문제 삭제
  async deleteProblem(req, res) {
    const database = new Database();
    const pId = req.params.pId;
    let data = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "delete from problem where p_id = ?";
        let params = [pId];

        const [a] = await connection.query(sql, params);
        connection.release();
        data.result = null;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        connection.release();
        data.result = null;
        data.message = "fail";
        data.error = err;
        res.status(400).send(data);
      }
    } catch (err) {
      data.result = null;
      data.message = "fail";
      data.error = err;
      res.status(400).send(data);
      return false;
    }
  }
  // 수업 이름 요청
  async getClassName(req, res) {
    const database = new Database();
    const classId = req.params.classId;
    let data = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "select class_id,class_name from course where class_id = ?";
        let params = [classId];

        const [a] = await connection.query(sql, params);
        connection.release();
        data.result = a;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        connection.release();
        data.result = null;
        data.message = "fail";
        data.error = err;
        res.status(400).send(data);
      }
    } catch (err) {
      data.result = null;
      data.message = "fail";
      data.error = err;
      res.status(400).send(data);
      return false;
    }
  }

  async getCourseList(req, res) {
    const database = new Database();
    let classId = req.params.classId;
    let result = [];
    let answer = {};
    let s = "select week_id,week_title from week where class_id= ?;";
    const c = await database.queryExecute(s, [classId]);
    if (Array.isArray(c) && c.length == 0) {
      answer.message = "fail";
      answer.result = null;
      answer.error = "Cannot set headers after they are sent to the client";
      res.status(400).send(answer);
    }
    for (let i = 0; i < c.length; i++) {
      let resultChild = {};
      let weekId = c[i].week_id;
      resultChild.weekId = weekId;
      resultChild.weekName = c[i].week_title;
      let params = [weekId, classId];
      s = "select p_id, title from problem where week_id= ? and class_id= ? ;";
      let a = await database.queryExecute(s, params);
      let problemList = [];
      for (let j = 0; j < a.length; j++) {
        let problemChild = {};
        problemChild.pId = a[j].p_id;
        problemChild.title = a[j].title;
        problemList.push(problemChild);
      }
      resultChild.problemList = problemList;
      result.push(resultChild);
    }
    answer.message = "success";
    answer.result = result;
    res.status(200).send(answer);
  }
  //학생,조교 목록 요청
  async getStudentAndAssists(req, res) {
    const database = new Database();
    let classId = req.params.classId;
    let answer = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "select * from u_c_bridge where class_id=?";
        let params = [classId];
        const [a] = await connection.query(sql, params);
        connection.release();
        let stds = [];
        let assists = [];
        for (let i = 0; i < a.length; i++) {
          if (a[i].author == 0) {
            stds.push(a[i].user_id);
          } else if (a[i].author == 1) {
            assists.push(a[i].user_id);
          }
        }
        answer.stds = stds;
        answer.assists = assists;
        answer.message = "success";
        res.status(200).send(answer);
      } catch (err) {
        connection.release();
        console.log(err);
        answer.message = "fail";
        answer.result = null;
        answer.error = "Cannot set headers after they are sent to the client";
        res.status(400).send(answer);
      }
    } catch (err) {
      answer.message = "fail";
      answer.result = null;
      answer.error = "Cannot Connected";
      res.status(400).send(answer);
    }
  }
  async addWeek(req, res) {
    const database = new Database();
    let classId = req.params.classId;
    let weekTitle = req.body.week_title;
    let answer = {};
    let className;
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "select class_name from course where class_id=?";
        let params = [classId];
        let [a] = await connection.query(sql, params);
        className = a[0].class_name;
        connection.release();
        try {
          const connection2 = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            let sql =
              "insert into week(class_id,week_title,class_name) values(?,?,?)";
            let params = [classId, weekTitle, className];
            const [a] = await connection2.query(sql, params);
            connection2.release();
            answer.result = null;
            answer.message = "success";
            res.status(200).send(answer);
          } catch (err) {
            connection.release();
            console.log(err);
            answer.message = "fail";
            answer.result = null;
            answer.error =
              "Cannot set headers after they are sent to the client";
            res.status(400).send(answer);
          }
        } catch (err) {
          answer.message = "fail";
          answer.result = null;
          answer.error = "Cannot Connected";
          res.status(400).send(answer);
        }
      } catch (err) {
        connection.release();
        console.log(err);
        answer.message = "fail";
        answer.result = null;
        answer.error = "Cannot set headers after they are sent to the client";
        res.status(400).send(answer);
      }
    } catch (err) {
      answer.message = "fail";
      answer.result = null;
      answer.error = "Cannot Connected";
      res.status(400).send(answer);
    }
  }
}
