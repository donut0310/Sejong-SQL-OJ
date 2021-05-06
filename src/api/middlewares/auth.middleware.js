import passport from "passport";

import JWTUtil from "../utils/jwt.util.js";

export class AuthMiddleware {
  constructor() {}

  verifyToken = async (req, res, next) => {
    const path = req.route.path;
    const type = path == "/api/v1/auth/access-token" ? "refresh" : "access";
    const token = req.cookies[`${type}-token`];

    if (!token) {
      const error = "로그인이 필요합니다.";
      res.status(401).send(error);
      return;
    }
    const jwtUtil = new JWTUtil();
    const verifyResult = jwtUtil.verifyToken(token, type);

    if (!verifyResult.success) {
      res
        .status(verifyResult.err.status)
        .send(ResponseUtil.successFalse(verifyResult.err));
    } else {
      req.body.decoded = verifyResult.decoded;
      next();
    }
  };

  verifyUserByLocalPassport = async (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      try {
        if (err) {
          throw "an error occurs : local passport";
        }
        if (!user) {
          throw (
            (`User's informations are wrong.`,
            "아이디 혹은 비밀번호를 확인해주세요.")
          );
        }
        return next();
      } catch (err) {
        let data = {};
        data.result = null;
        data.messgae = "fail";
        data.error = err;
        return res.status(400).send(data);
      }
    })(req, res, next);
  };

  // static blockCSRF = async (req, res, next) => {
  //   const cookieValue = req.cookies["csrf-token"];
  //   const headerValue = req.headers["x-csrf-token"];

  //   if (cookieValue && headerValue && cookieValue === headerValue) {
  //     next();
  //   } else {
  //     const error = ErrorUtil.forbidden(
  //       "403-1",
  //       "Forbidden: suspected CSRF attack "
  //     );
  //     res.status(error.status).send(ResponseUtil.successFalse(error));
  //   }
  // };
}
