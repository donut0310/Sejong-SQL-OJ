import { Request, Response } from "express";
import * as crypto from "crypto";

import { HashUtil } from "../utils/hash.util";

export class UsersController {
  constructor() {}

  async createUser(req, res) {
    // const usersModel = new UsersModel();

    let salt = crypto.randomBytes(16).toString("base64");
    req.body.pwd = HashUtil.getHashedValue(req.body.pwd, salt);
    req.body.salt = salt;

    // await usersModel.create(req.body);
    res.status(200).send("회원가입에 성공하셨습니다.");
  }
}
