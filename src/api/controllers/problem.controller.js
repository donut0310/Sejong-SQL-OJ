import { Database } from "../models/db.js";

export class ProblemController {
  // 문제 목록 요청 & 현재 사용자의 제출 결과에 대한 상태
  async getProblemListAndSubmitStatus(req, res) {
    const database = new Database();
    const classId = req.params.classId;
    const weekId = req.params.weekId;
    const userId = req.body.decoded.id;
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        // 문제 목록 요청
        let sql = "select * from problem where class_id = ? and week_id = ?";
        let params = [classId, weekId];
        const a = await connection.query(sql, params);
        connection.release();

        // 현재 사용자 제출 결과에 대한 상태 요청
        let sql2 =
          "select score,result,submit_cnt from top_submit_answer\
           where user_id = ? and week_id = ? order by p_id";
        let params2 = [userId, weekId];
        const b = await connection.query(sql2, params2);
        connection.release();

        let data = {};
        const arr = a[0].concat(b[0]);
        data.result = arr;
        data.message = "success";

        res.status(200).send(data);
      } catch (err) {
        console.log(err);
        connection.release();
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  //선택된 문제 정보 요청
  async getSelectedProblemInfo(req, res) {
    const database = new Database();
    const pId = req.params.pId;

    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        // 문제 목록 요청
        let sql = "select * from problem where p_id = ?";
        let params = [pId];
        const a = await connection.query(sql, params);
        connection.release();

        let data = {};
        data.result = a[0];
        data.message = "success";

        res.status(200).send(data);
      } catch (err) {
        console.log(err);
        connection.release();
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
