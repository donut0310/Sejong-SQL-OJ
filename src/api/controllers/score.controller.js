// 케이스 생각
// 들어온 값이 아에 없는 경우 (0)
// 정답 값의 부모이거나 자손인 경우 (0)
// 같은 데이터가 여러번 있는 경우 때매 중복값 제거 (0)
// JSON 값은 같고 순서만 다를 경우 50점만 부여 (0)
import { dbConnection } from "../models/db.js";
export class ScoreController {
    constructor() {}

    correct_answer_rate(userJson,answerJson){
        let correct=0;
        let length=0;
          if (userJson.length<answerJson.length){
            length=answerJson.length
            for(i=0; i<userJson.length; i++){
              if(JSON.stringify(answerJson).includes(JSON.stringify(userJson[i]))){
                i-=1;
                userJson.splice(i,1);
                correct+=1;
              }
            }
          }
          else{
            length=userJson.length
            for(i=0; i<answerJson.length; i++){
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
        if(JSON.stringify(userJson) === JSON.stringify(answerJson)){
          return 100;
        }
        else if(userJson.length==0){
          return 0;
        }
        else{
          return this.correct_answer_rate(userJson,answerJson)
        }
      
      }
    
    async scoreing() {
      //req.body.user_query
      let userQuery=`select ANIMAL_TYPE,count(ANIMAL_TYPE)
      from ANIMAL_INS
      group by ANIMAL_TYPE
      ORDER BY ANIMAL_TYPE ASC`;
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

      let values =  await dbConnection(async (conn) => {
        let con1=await conn.query(sql, params, function (err, rows) {
          if (err) throw err;
          else {
            console.log("1")
            conn.release();
            return rows[0].tc_cnt;
              }
          });
          let con2= await conn.query(sql2, params2, function (err, rows) {
          if (err) throw err;
          else{
            console.log("2")
            conn.release();
            return rows
          }
        });
        let con3=await conn.query(sql3, params2, function (err, rows) {
          if (err) throw err;
          else{
            console.log("3")
            conn.release();
            return rows
          }
        });
        
        return [con1,con2,con3]
      })
      console.log(values)
      // await this.repeated_correct(values,userQuery)
      
  }
  async repeated_correct(rowsResult,tcAnswer,tcCnt,userQuery){
    let score=0
    for(var i=0;i<tcCnt;i++){
      console.log(i)
      let sql4=rowResult[i].tc_content
      await dbConnection((conn2)=>{
        conn2.beginTransaction();
        conn2.query(sql4, function (err, rows) {
          if (err) throw err;
          else {
            conn2.release();
            console.log("success!")
          }
      });
      }).then((conn2)=>{
          dbConnection((conn3)=>{
          conn3.beginTransaction()
          conn3.query(userQuery, function (err2, userJson) {
            if (err2) throw err2;
            else {
              score+=this.score_check(userJson,answerJson)
            }
          conn3.rollback();
          conn2.rollback();
          console.log(score)
        });
        })
      })
    }
    return score;
  }
}
