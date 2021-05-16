import * as crypto from "crypto";
import { Database } from "../models/db.js";
import { HashUtil } from "../utils/hash.util.js";

export class UsersController {
  constructor() {}

  // 회원 가입
  async createUser(req, res, next) {
    const database = new Database();

    let salt = crypto.randomBytes(16).toString("base64");
    req.body.user_pw = HashUtil.getHashedValue(req.body.user_pw, salt);
    req.body.salt = salt;

    let sql =
      "insert into user (\
      user_id, user_name, user_pw, salt\
      )\
      values(?,?,?,?)";
    let params = [
      req.body.user_id,
      req.body.user_name,
      req.body.user_pw,
      req.body.salt,
    ];
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        await connection.query(sql, params);
        connection.release();
        let data = {};
        data.result = null;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        connection.release();
        let data = {};
        data.result = null;
        data.message = "fail";
        res.status(400).send(data);
      }
    } catch (err) {
      let data = {};
      data.result = null;
      data.message = "fail";
      res.status(400).send(data);
      return false;
    }
  }

  // 로그인시 정보 유지
  async getProfile(req, res) {
    const userModel = new UsersModel();
    // const user = await userModel.readByEmail(req.body.decoded.email);
    // -password, -salt

    res.status(200).send(user);
  }

  
  // 사용자가 입력한 정답 쿼리문 실행

  // 제출한 코드 요청
  async getSubmittedCode(req, res) {
    const database = new Database();
    const submitId = req.params.submitId;
    const userId = req.body.decoded.id;
    let data = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql =
          "select user_query from submit_answer where user_id = ? and submit_id = ?";
        let params = [userId, submitId];
        const a = await connection.query(sql, params);
        connection.release();

        data.result = a[0];
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

  //문제 추가 요청
  async postAddProblem(req, res) {
    const database = new Database();
    const classId = req.params.classId;
    const weekId = req.params.weekId;
    let data = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql =
          "insert into problem\
          (class_id,week_id,title,content,table_info,start_time,end_time,is_public)\
          values (?,?,?,?,?,?,?,?)";
        let params = [
          classId,
          weekId,
          req.body.title,
          req.body.content,
          req.body.table_info,
          req.body.start_time,
          req.body.end_time,
          req.body.is_public,
        ];
        const a = await connection.query(sql, params);
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
  async getCourseAndWeek(req,res){
    const database = new Database();
    const userId = req.body.decoded.id;
    console.log(userId)
    let s="select class_id from u_c_bridge where user_id=?";
    const c = await database.queryExecute(s, [userId]);
    console.log(c)
    for( i=0;i<c.length;i++){

    }
    res.status(200).send("suc");
  }
}
