import express from "express";
import path from "path";

import { IndexRoute } from "./api/routes/v1/index.route.js";
import { Models } from "./api/models/db.js";

const app = express();
const routes = [];
const __dirname = path.resolve();
const root = path.join(__dirname, "src/client");

// DB connect
(async () => {
  await new Models().init();
})();

app.use(express.static(root));
app.use(express.json({ limit: "5mb" }));

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
//   routes.push(new ~~(app));
routes.push(new IndexRoute(app));

export default app;
