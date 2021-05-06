import { Database } from "../models/db.js";
import JWTUtil from "../utils/jwt.util.js"; // PayloadRefreshToken, // PayloadAccessToken,

export class AuthController {
  constructor() {}

  async createJWT(req, res) {
    // @TODO split to token.util.ts

    const jwtUtil = new JWTUtil();
    const database = new Database();
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
          res.status(200).send((user[0][0].user, "로그인에 성공했습니다."));
        } catch (err) {
          res.status(500).send(err);
        }
      } catch (err) {
        console.log(err);
        connection.release();
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async refreshAccessToken(req, res) {
    const jwtUtil = new JWTUtil();

    const usersModel = new UsersModel();
    const user = await usersModel.read("user_id", req.body.decoded.id);

    if (!user) {
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

    res.status(200).send(ResponseUtil.successTrue({}));
  }
}
