import { HashUtil } from "./hash.util";
import passport from "passport";
import passportLocal from "passport-local";
import { UsersModel } from "../models/users.model";

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

    passport.use(
      new LocalStrategy(
        {
          usernameField: "user_id",
          passwordField: "pwd",
          //session: true,             // session 저장 여부
        },

        async (user_id, pwd, done) => {
          //   const usersModel: UsersModel = new UsersModel();
          //   const user = await usersModel.read("user_id", user_id, false);
          //   if (!user)
          //     return done(null, false, {
          //       message: "아이디 혹은 비밀번호를 확인해주세요.",
          //     });
          //   let hashedPassword = HashUtil.getHashedValue(pwd, user.salt);
          //   const isMatch = user.pwd == hashedPassword;
          //   if (isMatch) {
          //     return done(null, user);
          //   }
          //   return done(null, false, {
          //     message: "아이디 혹은 비밀번호를 확인해주세요.",
          //   });
        }
      )
    );
  }
}
