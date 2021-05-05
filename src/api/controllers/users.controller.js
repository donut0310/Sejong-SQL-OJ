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
        res.status(200).send("회원가입에 성공하셨습니다.");
      } catch (err) {
        console.log("errorerror");
        connection.release();
      }
    } catch (err) {
      console.log("ERROR");
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

  // 사용자가 입력한 정답 쿼리문 제출
  async submitAnswerQuery(req, res) {
    const database = new Database();
    const pId = req.params.pId;
    const userId = req.body.decoded.id;
  }
  // 사용자가 입력한 정답 쿼리문 실행
}
