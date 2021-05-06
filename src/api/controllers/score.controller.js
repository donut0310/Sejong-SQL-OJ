// 케이스 생각
// 들어온 값이 아에 없는 경우 (0)
// 정답 값의 부모이거나 자손인 경우 (0)
// 같은 데이터가 여러번 있는 경우 때매 중복값 제거 (0)
// JSON 값은 같고 순서만 다를 경우 50점만 부여 (0)
import { Database } from "../models/db.js";
export class ScoreController {  
    async scoring(req,res) {
      let userQuery=req.body.user_query;
      let sql = "select tc_cnt from problem where p_id=? ";
      let sql2= "select tc_content from testcase_problem where p_id=?  order by tc_id asc;"
      let sql3= "select tc_answer from testcase_problem where p_id=? order by tc_id asc;"
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
        req.params.pId,
      ];
      let params2 =[
        req.params.pId
      ]
      const database=new Database()
      let tcCnt= await database.queryExecute(sql,params);
      console.log("tc",tcCnt)
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
              let [userJson] = await connection.query(userQuery);
              let answerString = tcAnswer[i].tc_answer.replace(/(\r\n\t|\n|\r\t)/gm,"");
              answerString=answerString.replace(/(\s*)/g, "");
              if(JSON.stringify(userJson) === answerString){
                score+= 100;
              }
              else if(userJson.length==0){
                score+= 0;
              }
              else{
                let answerJson=JSON.parse(answerString)
                let correct=0;
                let length=0;
                  if (userJson.length<answerJson.length){
                    length=answerJson.length
                    answerJson=JSON.stringify(answerJson)
                    for(var i=0; i<userJson.length; i++){
                      if(answerJson.includes(JSON.stringify(userJson[i]))){
                        i-=1;
                        userJson.splice(i,1);
                        correct+=1;
                      }
                    }
                  }
                  else{
                    length=userJson.length
                    userJson=JSON.stringify(userJson)
                    for(var i=0; i<answerJson.length; i++){
                      if(userJson.includes(JSON.stringify(answerJson[i]))){
                        i-=1
                        answerJson.splice(i,1);
                        correct+=1
                      }
                    }
                  }
                  console.log(correct)
                  // 순서만 다른 경우
                  if (correct==length){
                    score+= 50
                  }
                  else{
                    score+= 100*(correct)/length;
                  }
              }
              connection.rollback();
              connection.release();
            } catch (err2){
              console.log(err2)
              connection.rollback();
              connection.release();
              return err2
            }
          } catch (err) {
            console.log(err)
            console.log(err);
            connection.release();
            return err;
          }

      } catch(err) {
        console.log(err);
        return err;
      }
    }
    score=score/tcCnt;
    return score;
  }
  async check_cost(userQuery){
    const database=new Database()
    var count = 0;
    // ; 갯수 구하기 
    var searchChar = ';'; 
    var pos = userQuery.indexOf(searchChar); 
    while (pos !== -1) {
      count++;
      pos = userQuery.indexOf(searchChar, pos + 1); 
    }
    if(count==1){
      userQuery="explain FORMAT=json " +userQuery
    }
    else if(count==0){
      userQuery="explain FORMAT=json " +userQuery+";"
    }
    else{
      let temp= userQuery.split(';');
      let userQueryLast=temp[temp.length-1]
      userQuery="explain FORMAT=json "+userQueryLast
    }
    let query_cost=0
    try {
      const connection = database.pool.getConnection(async (conn) => conn);
      try{
        connection.beginTransaction();
        let [userJson] = await connection.query(userQuery);
        userJson=userJson[0].EXPLAIN
        userJson=JSON.parse(userJson)
        query_cost=userJson.query_block.cost_info.query_cost
        connection.rollback();
        connection.release();
      } catch(err) {
        console.log(err);
        connection.release();
        return ;
      }
    } catch(err) {
      console.log(err);
      return ;
    }
    return query_cost;
  }
}
