import "./env.js";
import { config } from "./api/utils/config.util.js";

import http from "http";
import app from "./app.js";

const server = http.createServer(app);
const port = config.PORT;

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

export default server;
