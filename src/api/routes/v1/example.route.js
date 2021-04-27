import { ExampleController } from "../../controllers/example.controller";

export class ExampleRoute{

    construcutor(){
        this.app = express();
        this.configure();
    }

    configure(){
        // const "지역변수:미들웨어" = new "미들웨어 클래스 이름()";
        const exapleMiddleware = new ExampleMiddleware();
        
        // const "지역변수:컨트롤러" = new "컨트롤러 클래스 이름()";
        const exampleController = new ExampleController();

        // #API
        // 미들웨어 없이 돌아가는 api라면 미들웨어 굳이 안넣어도됨
        this.app.get("/api/v1/~~",[
            exampleMiddleware.exampleMiddlewareFunction1,
            exampleController.exampleControllerFunction1,
        );

        // this.app.post(,[]);
        // this.app.put(,[]);
        // this.app.delete(,[]);
    }
}
