import { HashUtil } from "./hash.util.js";
import passport from "passport";
import passportLocal from "passport-local";
import { Database } from "../models/db.js";

const LocalStrategy = passportLocal.Strategy;

export class PassportConfig {
  constructor() {}

  run() {
    // passport.serializeUser((user: IUser, done) => {    // Strategy 성공 시 호출됨
    //     console.log('serializeUser',user.email)
    //     done(null, user.email);                        // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
    // });

    // passport.deserializeUser((email: string | undefined, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    //     console.log('deserializeUser',email)
    //     done(null, email); // 여기의 user가 req.user가 됨
    // });
    const database = new Database();
    passport.use(
      new LocalStrategy(
        {
          usernameField: "user_id",
          passwordField: "user_pw",
          //session: true,             // session 저장 여부
        },

        async (user_id, user_pw, done) => {
          let sql = "select * from user where user_id =?";
          let params = user_id;
          try {
            const connection = await database.pool.getConnection(
              async (conn) => conn
            );
            try {
              const user = await connection.query(sql, params);
              connection.release();
              if (user[0].length == 0)
                return done(null, false, {
                  message: "아이디 혹은 비밀번호를 확인해주세요.",
                });
              let hashedPassword = HashUtil.getHashedValue(
                user_pw,
                user[0][0].salt
              );
              const isMatch = user[0][0].user_pw == hashedPassword;
              if (isMatch) {
                return done(null, user[0][0]);
              }

              return done(null, false, {
                message: "아이디 혹은 비밀번호를 확인해주세요.",
              });
            } catch (err) {
              console.log("No User");
              connection.release();
              return false;
            }
          } catch (err) {
            console.log("ERROR");
            return false;
          }
        }
      )
    );
  }
}
