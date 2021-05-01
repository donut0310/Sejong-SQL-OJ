import mysql from "mysql2";
import { config } from "./dbconfig.js";

let pool = mysql.createPool(config);

export async function dbConnection(callback) {
  pool.getConnection(function (err, conn) {
    if (!err) {
      callback(conn);
    }
  });
}
