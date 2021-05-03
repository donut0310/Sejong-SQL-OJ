import * as crypto from "crypto";
import { Database } from "../models/db.js";
import { HashUtil } from "../utils/hash.util.js";

export class UsersController {
  constructor() {}

  async createUser(req, res, next) {
    const database = new Database();

    let salt = crypto.randomBytes(16).toString("base64");
    req.body.user_pw = HashUtil.getHashedValue(req.body.user_pw, salt);
    req.body.salt = salt;

    let sql =
    "insert into user (\
      user_id, class_id, user_name, user_pw, author, jwt_token, salt\
      )\
      values(?,?,?,?,?,?,?)";
  let params = [
    req.body.user_id,
    req.body.class_id,
    req.body.user_name,
    req.body.user_pw,
    req.body.author,
    req.body.jwt_token,
    req.body.salt,
  ];
    await database.dbConnection((conn) => {
      try{
        conn.query(sql, params, function (err, rows) {
        if (err) throw err;
        else {
          conn.release();
          res.status(200).send("회원가입에 성공하셨습니다.");
        }
      });
    }catch(err){
      console.log('errorerror')
    }
    });
  }
}
