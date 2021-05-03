import mysql from "mysql2/promise";
import { config } from "./dbconfig.js";

export class Database {
  pool;
  constructor() {
    this.pool = mysql.createPool(config);
  }
}
