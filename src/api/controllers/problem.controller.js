import { Database } from "../models/db.js";
import { ScoreController } from "./score.controller.js";

export class ProblemController {
  // 문제 목록 요청 & 현재 사용자의 제출 결과에 대한 상태
  async getProblemListAndSubmitStatus(req, res) {
    const database = new Database();
    const classId = req.params.classId;
    const weekId = req.params.weekId;
    const userId = req.body.decoded.id;
    let data = {};

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
          "select p_id,score,result,submit_cnt from top_submit_answer\
           where user_id = ? and week_id = ? order by p_id";
        let params2 = [userId, weekId];
        const b = await connection.query(sql2, params2);
        connection.release();

        console.log("a",a[0].length);
        for (let i in a[0]) {
          if (b[0][i] != null) {
            a[0][i].score = b[0][i].score;
            a[0][i].result = b[0][i].result;
            a[0][i].submit_cnt = b[0][i].submit_cnt;
          } else {
            a[0][i].score = 0;
            a[0][i].result = "";
            a[0][i].submit_cnt = 0;
          }
        }
        data.result = a[0];
        data.message = "success";

        res.status(200).send(data);
      } catch (err) {
        connection.release();
        data.result = null;
        data.message = "fail";
        res.status(400).send(data);
      }
    } catch (err) {
      data.result = null;
      data.message = "fail";
      res.status(400).send(data);
      return false;
    }
  }

  //선택된 문제 정보 요청
  async getSelectedProblemInfo(req, res) {
    const database = new Database();
    const pId = req.params.pId;
    let data = {};
    let classId;
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
        classId=a[0][0].class_id;
        data.result = a[0];
        data.message = "success";
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
    }

    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        // 문제 목록 요청
        let sql = "select class_name from course where class_id = ?";
        let params = [classId];
        const [a] = await connection.query(sql, params);
        connection.release();
        console.log(a)
        data.result[0].class_name=a[0].class_name;
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
    }
  }
  //사용자가 문제 실행시 테스트케이스 결과 보여주고 롤백
  async getProcessProblem(req, res) {
    const database = new Database();

    const pId = req.params.pId;
    const userQuery = req.body.user_query;
    let flag=false;
    let data = {};
    data.result = {};
    var columnCount = userQuery.match(/;/g);
    
    if( columnCount!= null && columnCount.length>=2){
      flag=true;
    }
    const sql = "select tc_id from problem where p_id = ?";
    const params = [pId];
    let [tcId] = await database.queryExecute(sql, params);
    tcId = tcId.tc_id;
    try {
      const connection =await database.testCaseConnect(tcId)
      try {
        connection.beginTransaction();
        let [a] = await connection.query(userQuery);
        if(flag==true){
          a=a[a.length-1];
        }
        console.log(a);
        connection.rollback();
        connection.release();
        data.result = a;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        console.log(err);
        connection.rollback();
        connection.release();
        data.result= null;
        data.error = err.sqlMessage;
        data.message = "fail";
        res.status(200).send(data);
        return;
      }
    } catch (err) {
      console.log(err);
      data.result.is_error = true;
      data.result.err_msg = err;
      res.status(400).send(data);
      return;
      }
  }

  // 문제 제출 
  async getProblemCommit(req, res) {
    let dataBase = new Database();
    let queryCost = 0;
    let data = {};
    data.result = {};
    let userId = req.body.decoded.id;
    let pId = req.params.pId;
    let userQuery = req.body.user_query;

    //문제 정보 가져오기
    const s = "select week_title, week_id, class_id from problem where p_id=?";
    const [c] = await dataBase.queryExecute(s, [pId]);
    let weekTitle = c.week_title;
    let weekId = c.week_id;
    let classId = c.class_id;
    let result;
    let errorkinds;
    let scoreController = new ScoreController();
    let score = await scoreController.scoring(req, res);
    if (typeof score == "number") {
      if (score === 100) {
        queryCost = await scoreController.check_cost(userQuery);
        result = "Accept";
      } else {
        result = "WA";
      }
      data.message = "success";
    } else {
      errorkinds = score;
      score = 0;
      //에러 종류 추후에 나누기
      result = "Error";
      data.result.err_msg = errorkinds;
      data.message = "fail";
    }

    //submit_table insert
    let sql =
      "insert into submit_answer(week_id,class_id,user_id,p_id,\
    user_query,query_cost,score,submit_time,result,week_title) \
    values(? ,? ,? ,? ,?, ?, ?, ?, ? ,?);";
    let params = [
      weekId,
      classId,
      userId,
      pId,
      userQuery,
      queryCost,
      score,
      new Date(),
      result,
      weekTitle,
    ];
    await dataBase.queryExecute(sql, params);
    //top_submit_answer 탐색후 조정
    let sql2 =
      "select score,submit_cnt from top_submit_answer where p_id=? and user_id = ?;";
    let params2 = [pId, userId];
    let [a] = await dataBase.queryExecute(sql2, params2);
    if (a=== undefined) {
      let sql5 = `insert into top_submit_answer(
        week_id,class_id,user_id,p_id,user_query,
        query_cost,score,submit_time,result,week_title,submit_cnt)
        values(? ,? ,? ,? ,?, ?, ?, ?, ? ,?,?);`;
        let params5 = [
          weekId,
          classId,
          userId,
          pId,
          userQuery,
          queryCost,
          score,
          new Date(),
          result,
          weekTitle,
          1
        ];
        await dataBase.queryExecute(sql5, params5);
    } else {
      if (a.score <= score) {
        let sql4 = `UPDATE top_submit_answer SET user_query=?, 
        query_cost=?, score=? ,submit_time =? , result=?, submit_cnt =?  WHERE p_id=? and user_id= ?;`;
        let params4 = [
          userQuery,
          queryCost,
          score,
          new Date(),
          result,
          a.submit_cnt + 1,
          pId,
          userId,
        ];
        await dataBase.queryExecute(sql4, params4);
      } else {
        let sql5 = `UPDATE top_submit_answer SET submit_cnt =?  WHERE p_id=? and user_id= ?;`;
        let params5 = [a.submit_cnt + 1, pId, userId];
        await dataBase.queryExecute(sql5, params5);
      }
    }

    //사용자가 지금까지 제출한 답안 보여주기
    let sql6 =
      "select submit_id, user_id, result ,score,user_query,submit_time\
    from submit_answer where p_id=? and user_id= ? order by submit_id desc;";
    let params6 = [pId, userId];
    let b = await dataBase.queryExecute(sql6, params6);
    data.result = b;
    res.status(200).send(data);
  }
}
