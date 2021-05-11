import mysql from "mysql2/promise";
import { config,
  test_case0_config,test_case1_config,
  test_case2_config,test_case3_config,
  test_case4_config } from "./dbconfig.js";

export class Database {
  pool;
  tc0_pool;
  tc1_pool;
  tc2_pool;
  tc3_pool;
  tc4_pool;
  constructor() {
    this.pool = mysql.createPool(config);
    this.tc0_pool=mysql.createPool(test_case0_config);
    this.tc1_pool=mysql.createPool(test_case1_config);
    this.tc2_pool=mysql.createPool(test_case2_config);
    this.tc3_pool=mysql.createPool(test_case3_config);
    this.tc4_pool=mysql.createPool(test_case4_config);
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
      console.log(err);
      return false;
    }
  }
  
  async testCaseConnect(num){
    let connection;
    switch(num){
      case 0:
         connection = await this.tc0_pool.getConnection(async (conn) => conn);
        return connection;
      case 1:
         connection = await this.tc1_pool.getConnection(async (conn) => conn);
        return connection;
      case 2:
         connection = await this.tc2_pool.getConnection(async (conn) => conn);
        return connection;
      case 3:
         connection = await this.tc3_pool.getConnection(async (conn) => conn);
        return connection;
      case 4:
         connection = await this.tc4_pool.getConnection(async (conn) => conn);
        return connection;

    }
  }
}
