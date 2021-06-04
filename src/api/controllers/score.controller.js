import { Database } from "../models/db.js";
export class ScoreController {  
    async scoring(req,res) {
      // 사용자가 입력한 정답에 ;가 있는지 판별 
      let userQuery=req.body.user_query;
      let flag=false;
      if(userQuery.indexOf(';') == -1) {
        userQuery=userQuery+';'  
      }
      var columnCount = userQuery.match(/;/g);
      if(columnCount.length>=2){
        flag=true;
      }
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
      const database=new Database()
      let tcCnt= await database.queryExecute(sql,params);
      tcCnt=tcCnt[0].tc_cnt;
      let tcAnswer=await database.queryExecute(sql3,params);
      let score=0
      
      for(var j=0;j<tcCnt;j++){
        try {
          const connection =await database.testCaseConnect(j)
          try {
            connection.beginTransaction();
            let [userJson] = await connection.query(userQuery);
            if(flag==true){
              userJson=userJson[userJson.length-1];
            }
            let answerString = tcAnswer[j].tc_answer.replace(/(\r\n\t|\n|\r\t)/gm,"");
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
              console.log(userJson.length,answerJson.length)
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
                
                // 순서만 다른 경우
                if (correct==length){
                  score+= 50
                }
                else{
                  score+= 100*(correct)/length;
                }
            }
            console.log(score);
            connection.rollback();
            connection.release();
          } catch (err) {
            console.log(err);
            connection.rollback();
            connection.release();
            return err;
          }
        } catch (err) {
          console.log(err);
          return err;
          }
      
      }
    score=score/tcCnt;
    console.log("score",score)
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
      userQuery="explain FORMAT=json "+userQueryLast+";"
    }
    let query_cost=0
    try {
      const connection = await database.tc0_pool.getConnection(async (conn) => conn);
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
