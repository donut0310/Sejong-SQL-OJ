export class ExampleMiddleware{
    constructor(){}
    
    ExampleValidation = async(
        req,res,next
    ) =>{
        // body값 검증
        if(true){
            next();
        }
        else{
            res.send(400,500..)
        }
    }
}