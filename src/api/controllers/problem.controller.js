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
  //사용자가 문제 실행시 테스트케이스 결과 보여주고 롤백
  async getProcessProblem(req, res) {
    const database = new Database();
    const pId = req.body.p_id;
    const userQuery=req.body.user_query;
    const sql = "select tc_id from problem where p_id = ?";
    const params=[pId];
    let [tcId]= await database.queryExecute(sql,params);
    tcId=tcId.tc_id
    const sql2= "select tc_content from testcase_problem where p_id = ? and tc_id = ?";
    const params2=[pId,tcId];
    let [sql3]= await database.queryExecute(sql2,params2);
    sql3=sql3.tc_content
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        connection.beginTransaction();
        await connection.query(sql3);
        const [a] = await connection.query(userQuery);

        connection.rollback();
        connection.release();
        let data = {};
        data.result = a;
        data.message = "success";
        res.status(200).send(data);

      } catch (err) {
        console.log(err);
        connection.rollback();
        connection.release();
        res.status(400).send("UserQuery Error");
        return ;
      }
    } catch (err) {
      console.log(err);
      res.status(400).send("DB Connect Error");
      return ;
    }
  }
}
