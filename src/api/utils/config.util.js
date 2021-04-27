import { TypeUtil } from "./type.util.js";
const cast = TypeUtil.cast;

export const config = {
  PORT: cast("PORT", "number", 5000),
  MYSQL_AUTH_USERNAME: cast("MYSQL_AUTH_USERNAME", "string", ""),
  MYSQL_AUTH_PASSWORD: cast("MYSQL_AUTH_PASSWORD", "string", ""),
  MYSQL_HOST: cast("MYSQL_HOST", "string", ""),
  MYSQL_PORT: cast("MYSQL_PORT", "string", ""),
  MYSQL_DBNAME: cast("MYSQL_DBNAME", "string", ""),
};
