import { Database } from "../models/db.js";
import JWTUtil from "../utils/jwt.util.js"; // PayloadRefreshToken, // PayloadAccessToken,

export class AuthController {
  constructor() {}

  async createJWT(req, res) {
    // @TODO split to token.util.ts

    const jwtUtil = new JWTUtil();
    const database = new Database();
    let data = {};

    let sql = "select * from user where user_id = ?";
    let params = req.body.user_id;
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        const user = await connection.query(sql, params);
        connection.release();
        const accessPayload = {
          id: user[0][0].user_id,
          issuer: "http://13.125.85.53/",
        };

        const refreshPayload = {
          id: user[0][0].user_id,
          issuer: "http://13.125.85.53/",
        };
        try {
          const accessToken = jwtUtil.sign(accessPayload, "access");
          const refreshToken = jwtUtil.sign(refreshPayload, "refresh");

          console.log(parseInt(jwtUtil.accessTokenLife));
          res.cookie("access-token", accessToken, {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * parseInt(jwtUtil.accessTokenLife),
          });
          res.cookie("refresh-token", refreshToken, {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * parseInt(jwtUtil.refreshTokenLife),
          });
          data.result = null;
          data.message = "success";
          res.status(200).send(data);
        } catch (err) {
          data.result = null;
          data.message = "아이디 혹은 비밀번호를 확인해주세요";
          res.status(401).send(data);
        }
      } catch (err) {
        connection.release();
        data.result = null;
        data.messgae = "fail";
        data.error = err;
        res.status(401).send(data);
        return false;
      }
    } catch (err) {
      data.result = null;
      data.messgae = "fail";
      data.error = err;
      res.status(401).send(data);
      return false;
    }
  }

  async refreshAccessToken(req, res) {
    const jwtUtil = new JWTUtil();

    const database = new Database();

    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "select user_id,user_name from user where user_id = ?";
        let params = [req.body.decoded.id];
        const [a] = await connection.query(sql, params);
        connection.release();

        if (!a) {
          const error = jwtUtil.invalidTokenError;
          res.status(error.status).send(ResponseUtil.successFalse(error));
        }

        const accessPayload = {
          id: user[0][0].user_id,
          issuer: "http://13.125.85.53/",
        };

        try {
          const accessToken = jwtUtil.sign(accessPayload, "access");

          res.cookie("access-token", accessToken, {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * parseInt(jwtUtil.accessTokenLife),
          });

          res.status(200).send(ResponseUtil.successTrue({}));
        } catch (err) {
          res.status(500).send(err);
        }
      } catch (err) {}
    } catch (err) {}
  }

  async logout(req, res) {
    res.cookie("access-token", "", {
      secure: false,
      httpOnly: true,
      maxAge: 0,
    });

    res.cookie("refresh-token", "", {
      secure: false,
      httpOnly: true,
      maxAge: 0,
    });

    let data = {};
    data.result = {};
    data.message = "success";
    res.status(200).send(data);
  }
}
