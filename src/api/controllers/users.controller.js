import * as crypto from "crypto";
import { query } from "express";
import fs from "fs";

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
    const database = new Database();
    const userId = req.body.decoded.id;

    let data = {
      result: {},
      message: "",
    };

    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        // let sql =
        //   "select user.user_id, user.user_name, u_c_bridge.class_id, u_c_bridge.author from u_c_bridge join user on user.user_id = ? and u_c_bridge.user_id = ?";
        // let params = [userId, userId];
        let sql = "select user_id,user_name from user where user_id = ?";
        let params = [userId];
        // user_id, user_name
        const [userData] = await connection.query(sql, params);
        connection.release();

        let sql2 = "select class_id,author from u_c_bridge where user_id = ?";
        // class_id, author
        const [classData] = await connection.query(sql2, params);
        connection.release();

        // 소속된 강의가 없는경우 => class_id = [], role = 0
        // 로그인 유저가 관리자로 소속된 강의가 존재하면 class_id_arr에 넣는다
        // 학생인 경우에는 해당하지 않음
        let class_id_arr = [];
        if (classData.length != 0) {
          for (let i in classData) {
            if (classData[i].author != 0)
              class_id_arr.push(classData[i].class_id);
          }
        }

        // user_id 가 이메일이 아닐경우 학생, 조교
        // user_id 가 학번일 경우 교수
        // user_id 가 이메일, 학번이 모두 아닐경우 관리자
        const regex_email =
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        const regex_stdnum = /^[0-9]/g;

        let isStd = regex_stdnum.test(userId);
        let isProf = regex_email.test(userId);

        if (isStd) data.result.role = 0;
        else if (isProf) data.result.role = 1;
        else data.result.role = 2;

        data.result.user_id = userData[0].user_id;
        data.result.user_name = userData[0].user_name;
        data.result.class_id = class_id_arr;
        data.message = "success";
        data.result.isAuth = true;
        res.status(200).send(data);
      } catch (err) {
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
    }
  }

  // 제출한 코드 요청
  async getSubmittedCode(req, res) {
    const database = new Database();
    const submitId = req.params.submitId;
    let data = {};
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql =
          "select user_query,p_id from submit_answer where submit_id = ?";
        let params = [submitId];
        const [a] = await connection.query(sql, params);
        connection.release();

        data.result = a;
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
    let insertID;
    let data = {};

    req.body.body = JSON.parse(req.body.body);
    const values = {
      classId: req.params.classId,
      weekId: req.params.weekId,
      file: req.files,
      title: req.body.body.title,
      content: req.body.body.content,
      table_info: req.body.body.table_info,
      start_time: req.body.body.start_time,
      end_time: req.body.body.end_time,
      is_public: req.body.body.is_public,
      tc_cnt: req.body.body.tc_cnt,
      week_title: req.body.body.week_title,
    };

    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        // 1. input.sql의 바디 데이터 삽입
        // problem 테이블에 문제 생성 코드 데이터 삽입
        let sql =
          "insert into problem\
    (class_id,week_id,title,content,table_info,start_time,end_time,is_public,tc_cnt,week_title)\
    values (?,?,?,?,?,?,?,?,?,?)";
        let params = [
          values.classId,
          values.weekId,
          values.title,
          values.content,
          values.table_info,
          values.start_time,
          values.end_time,
          values.is_public,
          values.tc_cnt,
          values.week_title,
        ];

        // 문제 생성
        let [a] = await connection.query(sql, params);
        insertID = a.insertId;
        data.result = null;
        connection.release();

        let values2 = {
          p_id: a.insertId,
          week_title: values.week_title,
          tc_id: 0,
          tc_answer: "",
        };

        // 문제 테스트 케이스 테이블 생성
        for (let i = 0; i < values.tc_cnt; i++) {
          // file read
          let input_data = values.file[2 * i].buffer.toString(); //sql 파일 내 데이터
          let output_data = values.file[2 * i + 1].buffer.toString(); //json 파일 내 데이터

          // 1. 테스트 케이스 테이블 생성
          let input_connection = await database.testCaseConnect(i);
          try {
            await input_connection.query(input_data);
          } catch (err) {
            input_connection.release();
            data.result = "fail";
            data.message = "input sql file error";
            data.error = err;
            break;
          }

          // // 2. output.json 데이터 삽입

          let json_output_data = output_data.replace("[", "");
          console.log(json_output_data);
          json_output_data = json_output_data.replace("]", "");
          console.log(json_output_data);
          json_output_data = json_output_data.split("},");
          console.log(json_output_data);
          for (let i in json_output_data) {
            if (i != json_output_data.length - 1) json_output_data[i] += "}";
          }
          console.log(json_output_data);
          try {
            for (let i in json_output_data) {
              JSON.parse(json_output_data[i]);
            }
          } catch (err) {
            data.result = "fail";
            data.message = "output json file error";
            data.error = err;
            break;
          }

          values2.tc_answer = output_data;
          values2.tc_id = i;
          let sql2 =
            "insert into testcase_problem (p_id,tc_answer,week_title,tc_id) values(?,?,?,?)";
          let params2 = [
            values2.p_id,
            values2.tc_answer,
            values2.week_title,
            values2.tc_id,
          ];
          let [sql3_rows] = await connection.query(sql2, params2);
          connection.release();
        }

        if (data.result != "fail") {
          data.message = "success";
          res.status(200).send(data);
        } else {
          let backSql = "delete from problem where p_id = ?";
          let backParams = [insertID];
          let [re] = await connection.query(backSql, backParams);
          connection.release();
          res.status(400).send(data);
        }
      } catch (err) {
        connection.release();
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

  //사용자 소속 강의, 주차 목록 요청
  async getCourseAndWeek(req, res) {
    const database = new Database();
    const userId = req.body.decoded.id;
    let answer = {};
    let s = "select class_id from u_c_bridge where user_id=?";
    const c = await database.queryExecute(s, [userId]);
    if (Array.isArray(c) && c.length == 0) {
      answer.message = "fail";
      answer.result = null;
      answer.error = "Invalid approach.";
      res.status(400).send(answer);
    } else {
      let result = [];
      for (let i = 0; i < c.length; i++) {
        let resultChild = {};
        let class_id = c[i].class_id;
        resultChild.classId = class_id;
        let s1 =
          "select week_id,week_title,class_name from week where class_id=?";
        const d = await database.queryExecute(s1, [class_id]);
        if (Array.isArray(d) && d.length == 0) {
          s1 = "select class_name from course where class_id=?";
          const e = await database.queryExecute(s1, [class_id]);
          resultChild.className = e[0].class_name;
          resultChild.weekList = [];
          result.push(resultChild);
          continue;
        }
        resultChild.className = d[0].class_name;
        resultChild.weekList = [];
        for (let j = 0; j < d.length; j++) {
          let weekListChild = {};
          weekListChild.weekId = d[j].week_id;
          weekListChild.weekName = d[j].week_title;
          resultChild.weekList.push(weekListChild);
        }
        result.push(resultChild);
      }
      answer.message = "success";
      answer.result = result;
      res.status(200).send(answer);
    }
  }
  //학생: 코드 제출 status 목록 요청
  async getStatusList(req, res) {
    const database = new Database();
    let queryData = req.query;
    let userId = queryData.userId;
    let pId = queryData.pId;
    let result = queryData.result;
    let page = (queryData.page - 1) * 10;
    let s;
    let data = {};
    if (queryData.userId == undefined) {
      if (result == 0) {
        s = `select user_id,submit_id,submit_time,result,score, is_objection  
         from submit_answer where p_id=? order by submit_id DESC LIMIT ?, 10;`;
        try {
          const connection = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            let [a] = await connection.query(s, [pId, page]);
            connection.release();
            console.log(a);
            data.result = a;
            s = "select count(*) from submit_answer where p_id=? ;";
            let [b] = await connection.query(s, [pId]);
            connection.release();
            b = Math.ceil(b[0]["count(*)"] / 10) || 1;
            data.maxpage = b;
            data.message = "success";
            res.status(200).send(data);
          } catch (err) {
            connection.release();
            console.log(err);
            data.result = null;
            data.message = "fail";
            res.status(400).send(data);
          }
        } catch (err) {
          data.result = null;
          data.message = "fail";
          res.status(400).send(data);
        }
      }
      if (result == 1) {
        s = `select user_id,submit_id,submit_time,result,score , is_objection
        from submit_answer where p_id=? and
        result="Accept" order by submit_id DESC LIMIT ?, 10;`;
        try {
          const connection = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            const [a] = await connection.query(s, [pId, page]);
            connection.release();
            data.result = a;
            s = `select count(*) from submit_answer where p_id=? and result="Accept";`;
            let [b] = await connection.query(s, [pId]);
            connection.release();
            b = Math.ceil(b[0]["count(*)"] / 10) || 1;
            data.maxpage = b;
            data.message = "success";
            res.status(200).send(data);
          } catch (err) {
            connection.release();
            data.result = null;
            data.message = "fail";
            res.status(400).send(data);
          }
        } catch (err) {
          data.result = null;
          data.message = "fail";
          res.status(400).send(data);
        }
      }
      if (result == 2) {
        s = `select user_id,submit_id,submit_time,result,score , is_objection
        from submit_answer where p_id=? and
        result="WA" order by submit_id DESC LIMIT ?, 10;`;
        try {
          const connection = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            const [a] = await connection.query(s, [pId, page]);
            connection.release();
            data.result = a;
            data.message = "success";
            s = `select count(*) from submit_answer where p_id=? and result="WA";`;
            let [b] = await connection.query(s, [pId]);
            connection.release();
            b = Math.ceil(b[0]["count(*)"] / 10) || 1;
            data.maxpage = b;
            res.status(200).send(data);
          } catch (err) {
            connection.release();
            data.result = null;
            data.message = "fail";
            res.status(400).send(data);
          }
        } catch (err) {
          data.result = null;
          data.message = "fail";
          res.status(400).send(data);
        }
      }
      if (result == 3) {
        s = `select user_id,submit_id,submit_time,result,score , is_objection
        from submit_answer where p_id=? and
        result="Error" order by submit_id DESC LIMIT ?, 10;`;
        try {
          const connection = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            const [a] = await connection.query(s, [pId, page]);
            connection.release();
            data.result = a;
            s = `select count(*) from submit_answer where p_id=? and result="Error";`;
            let [b] = await connection.query(s, [pId]);
            connection.release();
            b = Math.ceil(b[0]["count(*)"] / 10) || 1;
            data.maxpage = b;
            data.message = "success";
            res.status(200).send(data);
          } catch (err) {
            connection.release();
            data.result = null;
            data.message = "fail";
            res.status(400).send(data);
          }
        } catch (err) {
          data.result = null;
          data.message = "fail";
          res.status(400).send(data);
        }
      }
    } else {
      if (result == 0) {
        s = `select user_id,submit_id,submit_time,result,score , is_objection
        from submit_answer where p_id=? and user_id=? order by submit_id DESC LIMIT ?, 10;`;
        try {
          const connection = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            let [a] = await connection.query(s, [pId, userId, page]);
            connection.release();
            data.result = a;
            s =
              "select count(*) from submit_answer where p_id=? and user_id=?;";
            let [b] = await connection.query(s, [pId, userId]);
            connection.release();
            b = Math.ceil(b[0]["count(*)"] / 10) || 1;
            data.maxpage = b;
            data.message = "success";
            res.status(200).send(data);
          } catch (err) {
            connection.release();
            data.result = null;
            data.message = "fail";
            res.status(400).send(data);
          }
        } catch (err) {
          data.result = null;
          data.message = "fail";
          res.status(400).send(data);
        }
      }
      if (result == 1) {
        s = `select user_id,submit_id,submit_time,result,score , is_objection
        from submit_answer where p_id=? and user_id=? and
        result="Accept" order by submit_id DESC LIMIT ?, 10;`;
        try {
          const connection = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            const [a] = await connection.query(s, [pId, userId, page]);
            connection.release();
            data.result = a;
            s = `select count(*) from submit_answer where p_id=? and user_id=? and result="Accept";`;
            let [b] = await connection.query(s, [pId, userId]);
            connection.release();
            b = Math.ceil(b[0]["count(*)"] / 10) || 1;
            data.maxpage = b;
            data.message = "success";
            res.status(200).send(data);
          } catch (err) {
            connection.release();
            data.result = null;
            data.message = "fail";
            res.status(400).send(data);
          }
        } catch (err) {
          data.result = null;
          data.message = "fail";
          res.status(400).send(data);
        }
      }
      if (result == 2) {
        s = `select user_id,submit_id,submit_time,result,score , is_objection
        from submit_answer where p_id=? and user_id=? and
        result="WA" order by submit_id DESC LIMIT ?, 10;`;
        try {
          const connection = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            const [a] = await connection.query(s, [pId, userId, page]);
            connection.release();
            data.result = a;
            data.message = "success";
            s = `select count(*) from submit_answer where p_id=? and result="WA" and user_id=?;`;
            let [b] = await connection.query(s, [pId, userId]);
            connection.release();
            b = Math.ceil(b[0]["count(*)"] / 10) || 1;
            data.maxpage = b;
            res.status(200).send(data);
          } catch (err) {
            connection.release();
            data.result = null;
            data.message = "fail";
            res.status(400).send(data);
          }
        } catch (err) {
          data.result = null;
          data.message = "fail";
          res.status(400).send(data);
        }
      }
      if (result == 3) {
        s = `select user_id,submit_id,submit_time,result,score , is_objection
        from submit_answer where p_id=? and user_id=? and
        result="Error" order by submit_id DESC LIMIT ?, 10;`;
        try {
          const connection = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            const [a] = await connection.query(s, [pId, userId, page]);
            connection.release();
            data.result = a;
            s = `select count(*) from submit_answer where p_id=? and result="Error" and user_id=? ;`;
            let [b] = await connection.query(s, [pId, userId]);
            connection.release();
            b = Math.ceil(b[0]["count(*)"] / 10) || 1;
            data.maxpage = b;
            data.message = "success";
            res.status(200).send(data);
          } catch (err) {
            connection.release();
            data.result = null;
            data.message = "fail";
            res.status(400).send(data);
          }
        } catch (err) {
          data.result = null;
          data.message = "fail";
          res.status(400).send(data);
        }
      }
    }
  }
  async getObjection(req, res) {
    let dataBase = new Database();
    let submitId = req.params.submitId;
    let data = {};
    try {
      const connection = await dataBase.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "select is_objection from submit_answer where submit_id=?;";
        let params = [submitId];
        let [a] = await connection.query(sql, params);
        connection.release();
        a = a[0].is_objection;
        let object = a ? 0 : 1;
        sql = "update submit_answer SET is_objection = ? WHERE submit_id = ?;";
        params = [object, submitId];
        [a] = await connection.query(sql, params);
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
  async modifyResult(req, res) {
    let dataBase = new Database();
    let submitId = req.params.submitId;
    let result = req.body.result;
    let score = req.body.score;
    let data = {};
    try {
      const connection = await dataBase.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = `update submit_answer SET is_objection = 0
        WHERE submit_id = ?;`;
        let params = [submitId];
        let [a] = await connection.query(sql, params);
        connection.release();
        sql = `update submit_answer SET result=?
        WHERE submit_id = ?;`;
        params = [result, submitId];
        [a] = await connection.query(sql, params);
        connection.release();
        sql = `update submit_answer SET score=?
        WHERE submit_id = ?;`;
        params = [score, submitId];
        [a] = await connection.query(sql, params);
        connection.release();
        data.result = null;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        connection.release();
        data.result = null;
        data.message = "fail";
        console.log(err);
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
}
