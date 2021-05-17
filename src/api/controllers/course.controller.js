import { Database } from "../models/db.js";

export class CourseController {
  constructor() {}

  // 관리자: 강좌 생성 및 교수 할당
  async adminEnrollProfToClass(req, res) {
    const database = new Database();

    const profList = req.body.users;
    const className = req.body.class_name;

    let professors = "";
    for (let i in profList) {
      if (i == profList.length - 1) {
        professors += profList[i];
      } else professors += profList[i] + ",";
    }
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        // 교수 등록
        let sql = "insert into course(class_name,admin_id) values(?,?)";
        let params = [className, professors];
        const a = await connection.query(sql, params);
        connection.release();
        console.log(a[0].info);

        // 분반 id 가져오기
        let sql2 = "select class_id from course where class_name = ?";
        let params2 = [className];

        const class_id = await connection.query(sql2, params2);
        connection.release();

        // 교수 분반 할당
        for (let i in profList) {
          // u_c_bridge 테이블 업데이트
          let sql3 =
            "insert into u_c_bridge (user_id,class_id,author) values(?,?,?)";
          let params3 = [profList[i], class_id[0][0].class_id, 2];

          const b = await connection.query(sql3, params3);
          connection.release();
          console.log(b[0].info);
        }
        res.status(200).send("강좌 생성이 완료되었습니다.");
      } catch (err) {
        connection.release();
        res.status(400).send(err);
      }
    } catch (err) {
      res.status(400).send(err);
      return false;
    }
  }

  // 교수: 학생 조교 등록
  async profEnrollStdToClass(req, res) {
    const database = new Database();

    const stdList = req.body.stds;
    const assistsList = req.body.assists;
    const classId = req.params.classId;

    let assists = "";

    for (let i in assistsList) {
      if (i == assistsList.length - 1) {
        assists += assistsList[i];
      } else assists += assistsList[i] + ",";
    }

    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        //학생에게 분반 할당
        for (let i in stdList) {
          let sql = "insert into u_c_bridge (user_id,class_id) values(?,?)";
          let params = [stdList[i], classId];
          const a = await connection.query(sql, params);
          connection.release();
          console.log("학생 등록:", a[0].info);
        }

        //조교 등록
        let sql2 = "select admin_id from course where class_id = ?";
        let params2 = [classId];
        const admin_id = await connection.query(sql2, params2);
        connection.release();

        let updated_admin_id = admin_id[0][0].admin_id + "," + assists;
        let sql3 = "update course set admin_id = ? where class_id = ?";
        let params3 = [updated_admin_id, classId];
        const b = await connection.query(sql3, params3);
        connection.release();
        console.log("조교 등록:", b[0].info);

        //조교에게 분반 할당
        for (let i in assistsList) {
          let sql4 =
            "insert into u_c_bridge(user_id,class_id,author) values(?,?,?)";
          let params4 = [assistsList[i], classId, 1];
          const c = await connection.query(sql4, params4);
          connection.release();
          console.log("학생, 조교 분반 할당:", c[0].info);
        }

        res.status(200).send("학생, 조교 등록이 완료되었습니다.");
      } catch (err) {
        connection.release();
        res.status(400).send(err);
      }
    } catch (err) {
      res.status(400).send(err);
      return false;
    }
  }

  // 교수: 학생, 조교 등록 해제
  async profDeleteStdInClass(req, res) {
    //기능 정의 전
    // 삭제 후
    // ALTER TABLE course AUTO_INCREMENT=1;
    // SET @CNT = 0;
    // UPDATE course SET course.class_id = @CNT:=@CNT+1;
  }
  async allocClassToStd() {}
  async getCourseList(req, res){
    const database = new Database();
    let classId = req.params.classId;
    let result=[]
    let answer={}
    let s="select week_id,week_title from week where class_id= ?;";
    const c = await database.queryExecute(s, [classId]);
    if(Array.isArray(c) && c.length==0){
      answer.message="fail"
      answer.result=null
      answer.error="Cannot set headers after they are sent to the client"
      res.status(400).send(answer);
    }
    for(let i=0;i<c.length;i++){
      let resultChild={}
      let weekId=c[i].week_id;
      resultChild.weekId=weekId;
      resultChild.weekName=c[i].week_title;
      let params=[weekId,classId]
      s="select p_id, title from problem where week_id= ? and class_id= ? ;";
      let a= await database.queryExecute(s,params);
      let problemList=[]
      for( let j=0;j<a.length;j++){
        let problemChild={};
        problemChild.pId=a[j].p_id;
        problemChild.title=a[j].title;
        problemList.push(problemChild);
      }
      resultChild.problemList=problemList
      result.push(resultChild)
    }
    answer.message="success"
    answer.result=result
    res.status(200).send(answer);
  }
  //학생,조교 목록 요청
  async getStudentAndAssists(req,res){
    const database = new Database();
    let classId = req.params.classId;
    let answer={}
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "select * from u_c_bridge where class_id=?";
        let params = [classId];
        const [a] = await connection.query(sql, params);
        connection.release();
        let stds=[]
        let assists=[]
        for(let i=0;i<a.length;i++){
          if(a[i].author==0){
            stds.push(a[i].user_id)
          }
          else if (a[i].author==1){
            assists.push(a[i].user_id)
          }
        }
        answer.stds=stds
        answer.assists=assists
        answer.message="success"
        res.status(200).send(answer);
      } catch (err) {
        connection.release();
        console.log(err)
        answer.message="fail"
        answer.result=null
        answer.error="Cannot set headers after they are sent to the client"
        res.status(400).send(answer);
      }
    } catch (err) {
      answer.message="fail"
      answer.result=null
      answer.error="Cannot Connected"
      res.status(400).send(answer);
    }
    
  }
  async addWeek(req,res){
    const database = new Database();
    let classId = req.params.classId;
    let weekTitle = req.body.week_title;
    let answer={}
    let className;
    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let sql = "select class_name from course where class_id=?";
        let params = [classId];
        let [a]= await connection.query(sql, params);
        className=a[0].class_name
        connection.release();
        try {
          const connection2 = await database.pool.getConnection(
            async (conn) => conn
          );
          try {
            let sql = "insert into week(class_id,week_title,class_name) values(?,?,?)";
            let params = [classId,weekTitle,className];
            const [a] = await connection2.query(sql, params);
            connection2.release();
            answer.result=null
            answer.message="success"
            res.status(200).send(answer);
          } catch (err) {
            connection.release();
            console.log(err)
            answer.message="fail"
            answer.result=null
            answer.error="Cannot set headers after they are sent to the client"
            res.status(400).send(answer);
          }
        } catch (err) {
          answer.message="fail"
          answer.result=null
          answer.error="Cannot Connected"
          res.status(400).send(answer);
        }
      } catch (err) {
        connection.release();
        console.log(err)
        answer.message="fail"
        answer.result=null
        answer.error="Cannot set headers after they are sent to the client"
        res.status(400).send(answer);
      }
    } catch (err) {
      answer.message="fail"
      answer.result=null
      answer.error="Cannot Connected"
      res.status(400).send(answer);
    }

  }
}
