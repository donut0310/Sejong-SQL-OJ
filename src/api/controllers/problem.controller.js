import { Database } from "../models/db.js";
import { ScoreController } from "./score.controller.js";


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
    const pId = req.params.p_id;
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
        res.status(400).send(err);
        return ;
      }
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
      return ;
    }
  }
  async getProblemCommit(req, res) {
    let dataBase= new Database()
    let scoreController = new ScoreController();
    let score= await scoreController.scoring(req,res);
    console.log("after",typeof(score))
    let queryCost=0
    let data = {};
    let weekId=req.body.week_id;
    let classId=req.body.class_id;
    let userId=req.body.user_id;
    let pId=req.body.p_id;
    let weekTitle=req.body.week_title;
    let userQuery=req.body.user_query;
    let result;
    let errorkinds;
    if(typeof(score)=="number"){
      if (score===100){
        queryCost = await scoreController.check_cost(userQuery);
        console.log(queryCost)
        result="Accept"
      }else{
        result="Wrong Answer"
      }
      data.message = "success"
    }else{
      errorkinds = score;
      score=0
      //에러 종류 추후에 나누기
      result= "query_error"
      data.errorkinds= errorkinds;
      data.message = result;
    }
    // console.log(queryCost)

    //submit_table insert
    let sql = "insert into submit_answer(week_id,class_id,user_id,p_id,\
    user_query,query_cost,score,submit_time,result,week_title) \
    values(? ,? ,? ,? ,?, ?, ?, ?, ? ,?);";
    let params = [weekId, classId,userId,pId,userQuery,
    queryCost,score,new Date(), result,weekTitle];
    await dataBase.queryExecute(sql,params);
    
    
    //top_submit_answer 탐색후 조정
    let sql2= "select score,submit_cnt from top_submit_answer where p_id=? and user_id = ?;"
    let params2= [pId,userId]
    let [a]= await dataBase.queryExecute(sql2,params2);
    if(Array.isArray(a) && a.length === 0)  {
      let sql3= "insert into from top_submit_answer values(?,?,?,?,?,?,?,?,?,?,?,?);"
      let params3= [weekId,classId,userId,pId,
        userQuery,queryCost,score,new Date(),result,weekTitle,a.submit_cnt+1]
        await dataBase.queryExecute(sql3,params3);
    } else {
      if (a.score<=score){
        let sql4= `UPDATE top_submit_answer SET user_query=?, query_cost=? , 
        score=? ,submit_time =? , result=?, submit_cnt =?  WHERE p_id=? and user_id= ?;`
        let params4= [userQuery,queryCost,score,
        new Date(),result,a.submit_cnt+1,pId,userId]
        await dataBase.queryExecute(sql4,params4);
      }else{
        let sql5= `UPDATE top_submit_answer SET submit_cnt =?  WHERE p_id=? and user_id= ?;`
        let params5= [a.submit_cnt+1,pId,userId]
        await dataBase.queryExecute(sql5,params5);
      }
    }
  
    //사용자가 지금까지 제출한 답안 보여주기
    let sql6= "select submit_id, user_id, result ,score,user_query,submit_time\
    from submit_answer where p_id=? and user_id= ?;"
    let params6= [pId,userId]
    let [b]= await dataBase.queryExecute(sql6,params6);
    data.submit_answer=b
    console.log(b)
    res.status(200).send(data);
  }
}
