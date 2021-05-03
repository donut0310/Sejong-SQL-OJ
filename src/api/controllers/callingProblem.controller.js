import { Database } from "../models/db.js";
export class CallingProblemController{
    constructor(){}

    async callProblem(req,res){
        let database = new Database()
        let sql =
        `select title,content from problem where p_id=? and class_id=?`
        let params = [
            req.body.p_id,
            req.body.class_id
        ];
        let result=database.queryExecute(sql,params);
        res.status(200).send("반환 값")
    }
    async callTctable(){
        let sql =
        "insert into user (\
        user_id, class_id, user_name, user_pw, author, jwt_token, salt\
        )\
        values(?,?,?)";
        let params = [
            req.body.p_id,
            req.body.class_id,
            req.body.week_info,
        ];
    }
}