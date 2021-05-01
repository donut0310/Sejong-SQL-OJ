// 케이스 생각
// 들어온 값이 아에 없는 경우 (0)
// 정답 값의 부모이거나 자손인 경우 (0)
// 같은 데이터가 여러번 있는 경우 때매 중복값 제거 (0)
// JSON 값은 같고 순서만 다를 경우 50점만 부여 (0)
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
    scoreing(pId,weekInfo,classId,userQuery){
      
    }
 }
