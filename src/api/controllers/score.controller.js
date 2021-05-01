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
          return  correct_answer_rate(userJson,answerJson)
        }
      
      }
      async scoreing() {
        //let userQuery=req.body.user_query;
        let tcCnt=0
        let sql = "select tc_cnt from problem where p_id=? and week_info=? and class_id=? ";
        let sql2= "select tc_content from testcase_problem where p_id=? and week_info=?"
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
        await dbConnection((conn) => {
          conn.query(sql, params, function (err, rows) {
            if (err) throw err;
            else {
              tcCnt=rows;
              conn.release();
              console.log("scoreing success!")
            }
          });
        });
        await dbConnection((conn) => {
          conn.query(sql2, params2, function (err, rows) {
            if (err) throw err;
            else {
              conn.release();
              console.log(rows[0].tc_content)
            }
          });
        });
      }

 }
