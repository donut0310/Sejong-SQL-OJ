import mysql from "mysql2/promise";
import { config } from "./dbconfig.js";

export class Database {
  pool;
  constructor() {
    this.pool = mysql.createPool(config);
  }
  async queryExecute(sql,params) {
    try {
      const connection = await this.pool.getConnection(async conn => conn);
      try {
        const [rows] = await connection.query(sql, params);
        connection.release();
        return rows
      } catch(err) {
        console.log(err);
        connection.release();
        return false;
      }
    } catch(err) {
      console.log('DB Error');
      return false;
    }
}
}
