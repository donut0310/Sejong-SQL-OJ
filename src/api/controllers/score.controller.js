// 케이스 생각
// 들어온 값이 아에 없는 경우 (0)
// 정답 값의 부모이거나 자손인 경우 (0)
// 같은 데이터가 여러번 있는 경우 때매 중복값 제거 (0)
// JSON 값은 같고 순서만 다를 경우 50점만 부여 (0)
import { Database } from "../models/db.js";
export class ScoreController {
    constructor() {}
    correct_answer_rate(userJson,answerJson){
        let correct=0;
        let length=0;
          if (userJson.length<answerJson.length){
            length=answerJson.length
            for(var i=0; i<userJson.length; i++){
              if(JSON.stringify(answerJson).includes(JSON.stringify(userJson[i]))){
                i-=1;
                userJson.splice(i,1);
                correct+=1;
              }
            }
          }
          else{
            length=userJson.length
            for(var i=0; i<answerJson.length; i++){
              if(JSON.stringify(userJson).includes(JSON.stringify(answerJson[i]))){
                i-=1
                answerJson.splice(i,1);
                correct+=1
              }
            }
          }
          // 순서만 다른 경우
          if (correct==length){
            return 50
          }
          else{
            return 100*(correct)/length;
          }
        }
        
    score_check(userJson,answerJson){
      console.log(JSON.stringify(userJson),answerJson)
        if(JSON.stringify(userJson) === answerJson){
          return 100;
        }
        else if(userJson.length==0){
          return 0;
        }
        else{
          return this.correct_answer_rate(JSON.stringify(userJson),answerJson)
        }
      
      }
    
    async scoreing() {
      //req.body.user_query
      const dataBase=new Database()
      let userQuery=`select patient_sex,count(patient_sex)
      from patient_info
      group by patient_sex
      ORDER BY patient_sex ASC;`;
      let result=0
      let sql = "select tc_cnt from problem where p_id=? and week_info=? and class_id=? ";
      let sql2= "select tc_content from testcase_problem where p_id=? and week_info=? order by tc_id asc;"
      let sql3= "select tc_answer from testcase_problem where p_id=? and week_info=? order by tc_id asc;"
      //문제 생성시 실행하도록
      let testTable=`create table patient_info(
        patient_id varchar(255) not null,
          patient_sex varchar(255) DEFAULT NULL,
          datatime datetime DEFAULT NULL,
          patient_condition varchar(255) DEFAULT NULL,
          name varchar(255) DEFAULT NULL,
        PRIMARY KEY (patient_id)
      );`
      let params = [
        "1","1","1234"
        // req.body.p_id,
        // req.body.week_info,
        // req.body.class_id
      ];
      let params2 =[
        "1","1"
        // req.body.p_id,
        // req.body.week_info
      ]
      
      let tcCnt= await this.dbTest(sql,params,dataBase);
      tcCnt=tcCnt[0].tc_cnt;
      let rowsResult= await this.dbTest(sql2,params2,dataBase);
      let tcAnswer=await this.dbTest(sql3,params2,dataBase);
      let q=await this.repeated_correct(tcCnt,rowsResult,tcAnswer,userQuery)
      console.log(q)
      
  }
  async dbTest(sql,params,dataBase) {
    try {
      const connection = await dataBase.pool.getConnection(async conn => conn);
      try {
        const [rows] = await connection.query(sql, params);
        connection.release();
        return rows
      } catch(err) {
        console.log(err);
        connection.release();
        return false;
      }
    } catch(err) {
      console.log('DB Error');
      return false;
    }
  };
  async repeated_correct(tcCnt,rowsResult,tcAnswer,userQuery){
    const dataBase=new Database()
    let score=0
    console.log(tcCnt)
    for(var i=0;i<tcCnt;i++){
      console.log("i",i)
      let sql4=rowsResult[i].tc_content
      try {
        const connection = await dataBase.pool.getConnection(async conn => conn);
        try {
          connection.beginTransaction();
          await connection.query(sql4);
          const [userJson] = await connection.execute(userQuery);
          score+=this.score_check(userJson,tcAnswer[i].tc_answer)
          console.log("score",score)
          connection.rollback();
          connection.release();
        } catch(err) {
          console.log(err);
          connection.release();
          return false;
        }
      } catch(err) {
        console.log('DB Error!');
        return false;
      }
    };
    return score
  }
}