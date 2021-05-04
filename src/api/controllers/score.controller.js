// 케이스 생각
// 들어온 값이 아에 없는 경우 (0)
// 정답 값의 부모이거나 자손인 경우 (0)
// 같은 데이터가 여러번 있는 경우 때매 중복값 제거 (0)
// JSON 값은 같고 순서만 다를 경우 50점만 부여 (0)
import { Database } from "../models/db.js";
export class ScoreController {
  constructor() {}
   correct_answer_rate(userJson,answerJson){
    console.log(typeof(userJosn), typeof(answerJson))
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
    // 조교가 넣은 쿼리문 \n\t 제거
    let answerString = answerJson.replace(/(\r\n\t|\n|\r\t)/gm,"");
    answerString=answerString.replace(/(\s*)/g, ""); 
    if(JSON.stringify(userJson) === answerString){
      return 100;
    }
    else if(userJson.length==0){
      return 0;
    }
    else{
      return this.correct_answer_rate(userJson,JSON.parse(answerJson))
    }
  
  }
    
    async scoreing(req,res) {
      let userQuery=req.body.user_query;
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
        //"1","1","1234"
        req.body.p_id,
        req.body.week_info,
        req.body.class_id
      ];
      let params2 =[
        req.body.p_id,req.body.week_info
        //"1","1"
      ]
      const database=new Database()
      let tcCnt= await database.queryExecute(sql,params);
      tcCnt=tcCnt[0].tc_cnt;
      let rowsResult= await database.queryExecute(sql2,params2);
      let tcAnswer=await database.queryExecute(sql3,params2);
      let score=0
      for(var i=0;i<tcCnt;i++){
        let sql4=rowsResult[i].tc_content
        try {
          const connection = await database.pool.getConnection(async (conn) => conn);
          try {
            connection.beginTransaction();
            await connection.query(sql4);
            try{
              const [userJson] = await connection.query(userQuery);
              let answerString = tcAnswer[i].tc_answer.replace(/(\r\n\t|\n|\r\t)/gm,"");
              answerString=answerString.replace(/(\s*)/g, ""); 
              if(JSON.stringify(userJson) === answerString){
                score+= 100;
              }
              else if(userJson.length==0){
                score+= 0;
              }
              else{
                score+= this.correct_answer_rate(userJson,JSON.parse(answerJson))
              }
            } catch (err2){
              score=err2.sqlMessage
              connection.rollback();
              connection.release();
              res.status(400).send("UserQuery Error");
              return ;
            }
            connection.rollback();
            connection.release();
          } catch (err) {
            console.log(err);
            connection.release();
            res.status(400).send("Transaction Error");
            return ;
          }

      } catch(err) {
        console.log(err);
        res.status(400).send("DB Connect Error");
        return ;
      }
    }
      let a={"message":"success", "score": score/tcCnt};
      res.status(200).send(a);
  }

  async repeated_correct(tcCnt,rowsResult,tcAnswer,userQuery,database){
    console.log(tcCnt)
    
    return score;
  }
}
