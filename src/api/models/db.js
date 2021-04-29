import { config } from "../utils/config.util.js";
import mysql from "mysql2";

export class Models {
  constructor() {
    this.username = config.MYSQL_AUTH_USERNAME;
    this.password = config.MYSQL_AUTH_PASSWORD;
    this.host = config.MYSQL_HOST;
    this.port = config.MYSQL_PORT;
    this.dbname = config.MYSQL_DBNAME;
  }
  init() {
    this.connecting();
  }
  connecting() {
    let connection = mysql.createConnection({
      host: this.host,
      user: this.username,
      password: this.password,
      database: this.dbname,
    });
    connection.connect();
    console.log("Mysql is connected");
  }
  createLogicTable(){
    
  }
}
