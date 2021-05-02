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
}
//   // constructor(){}

//   // async dbConnection(){
//   //   let pool = mysql.createPool(config);
//   //   return pool;
//   // }
// }


