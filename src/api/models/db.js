import mysql from "mysql2";
import { config } from "./dbconfig.js";
import { query_example} from "./sqldbtable.js"
let pool = mysql.createPool(config);
let initsql=query_example
export async function dbConnection(callback) {
  pool.getConnection(function (err, conn) {
    if (!err) {
      callback(conn);
    }
  });
}
export async function dbInit(){
  await dbConnection((conn) => {
    conn.query(initsql, function (err, rows) {
      if (err) throw err;
      else {
        console.log("dbInit!_success!")
      }
    });
  });
}
