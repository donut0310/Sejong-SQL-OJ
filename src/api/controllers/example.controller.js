export class ExampleController{
    constructor(){}

    async exampleFunction1(req,res){
        await DB 호출 및 쿼리문 실행
        res.status(200).send("반환 값")
    }
}

