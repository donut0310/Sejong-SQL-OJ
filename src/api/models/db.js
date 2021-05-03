import mysql from "mysql2/promise";
import { config } from "./dbconfig.js";



// export const pool = mysql.createPool(config);
// export async function dbConnection(callback) {
//   await pool.getConnection(function (err, conn) {
//     if (!err) {
//       callback(conn);
//     }
//   });
// }

export class Database{
  pool
  constructor(){
    this.pool = mysql.createPool(config)
  }

  async dbConnection(callback){
    console.log("dbConnecting")
    this.pool.getConnection(function(err,conn){
      console.log("getConnecting")
      if(!err){
        console.log("callback")
        callback(conn);
      }
    })
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
//   // constructor(){}

//   // async dbConnection(){
//   //   let pool = mysql.createPool(config);
//   //   return pool;
//   // }
// }


