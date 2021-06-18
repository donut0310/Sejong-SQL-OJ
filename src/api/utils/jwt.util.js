import { config } from "./config.util.js";
import * as jwt from "jsonwebtoken";
// import { ErrorUtil } from "./error.util";

// const PayloadAccessToken = {
//   user_id: "",
//   user_name: "",
//   issuer: "http://13.125.85.53/",
// };

// const PayloadRefreshToken = {
//   user_id: "",
//   user_name: "",
//   issuer: "http://13.125.85.53/",
// };

// let Payload = PayloadAccessToken | PayloadRefreshToken;

let Payload = {
  user_id: "",
  user_name: "",
  issuer: "http://13.125.85.53/",
};

const VerifyFail = {
  success: false,
  err: "error!!",
};

const VerifySuccess = {
  success: true,
  decoded: Payload,
};

let VerifyResult = VerifySuccess | VerifyFail;
let TokenType = "refresh" | "access";

export default class JWTUtil {
  _ACCESS_TOKEN_SECRET;
  _ACCESS_TOKEN_LIFE;
  _REFRESH_TOKEN_SECRET;
  _REFRESH_TOKEN_LIFE;

  constructor() {
    this._ACCESS_TOKEN_SECRET = config.ACCESS_TOKEN_SECRET;
    this._ACCESS_TOKEN_LIFE = config.ACCESS_TOKEN_LIFE;
    this._REFRESH_TOKEN_SECRET = config.REFRESH_TOKEN_SECRET;
    this._REFRESH_TOKEN_LIFE = config.REFRESH_TOKEN_LIFE;
  }

  get accessTokenSecret() {
    return this._ACCESS_TOKEN_SECRET;
  }

  get accessTokenLife() {
    return this._ACCESS_TOKEN_LIFE;
  }

  get refreshTokenSecret() {
    return this._REFRESH_TOKEN_SECRET;
  }

  get refreshTokenLife() {
    return this._REFRESH_TOKEN_LIFE;
  }

  get tokenExpiredError() {
    return "Token is expired.", "로그인이 필요합니다.";
  }

  get invalidTokenError() {
    return "It is invalid token.", "로그인이 필요합니다.";
  }

  verifyToken = (token, type) => {
    const secret =
      type == "access" ? this._ACCESS_TOKEN_SECRET : this._REFRESH_TOKEN_SECRET;

    let result = {
      success: false,
      err: this.invalidTokenError,
    };

    jwt.default.verify(token, secret, (err, decoded) => {
      if (err) {
        result = {
          success: false,
          err: this.getErrorUtil(err),
        };
      } else if (!decoded) {
        result = {
          success: false,
          err: this.getErrorUtil(new jwt.JsonWebTokenError("")),
        };
      } else {
        result = {
          success: true,
          decoded,
        };
      }
    });

    return result;
  };

  sign = (payload, type, options = {}) => {
    const secret =
      type == "access" ? this._ACCESS_TOKEN_SECRET : this._REFRESH_TOKEN_SECRET;

    const expiresIn =
      type == "access" ? this._ACCESS_TOKEN_LIFE : this._REFRESH_TOKEN_LIFE;

    return jwt.default.sign(payload, secret, {
      ...options,
      expiresIn,
    });
  };
  getErrorUtil = (error) => {
    switch (error.name) {
      case "TokenExpiredError":
        return this.tokenExpiredError;

      default:
        return this.invalidTokenError;
    }
  };
}
