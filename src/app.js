import express from "express";
import path from "path";
import passport from "passport";
import cookieParser from "cookie-parser";

import { IndexRoute } from "./api/routes/v1/index.route.js";
import { AuthRoute } from "./api/routes/v1/auth.route.js";
import { UsersRoute } from "./api/routes/v1/users.route.js";
import { CourseRoute } from "./api/routes/v1/course.route.js";
import { ScoreRoute } from "./api/routes/v1/score.route.js";
import { PassportConfig } from "./api/utils/passport.local.utils.js";
import { ProblemRoute } from "./api/routes/v1/problem.route.js";

const app = express();
const routes = [];
const passportConfig = new PassportConfig();
const __dirname = path.resolve();
const root = path.join(__dirname, "src/client/build");

app.use(express.static(root));
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

// passport
app.use(passport.initialize());
app.use(passport.session());
passportConfig.run();

// cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", ["http://localhost:5000"]);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "content-type, access-token, refresh-token"
  ); //1
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// route
//  IndexRoute가 맨 마지막 푸시가 되도록 위에다 적어주셈

//   1. routes.push(new ~~(app));
//   2. routes.push(new ~~(app));
//   last. routes.push(new IndexRoute(app));
routes.push(new UsersRoute(app));
routes.push(new AuthRoute(app));
routes.push(new CourseRoute(app));
routes.push(new ProblemRoute(app));
routes.push(new ScoreRoute(app));
routes.push(new IndexRoute(app));

export default app;
