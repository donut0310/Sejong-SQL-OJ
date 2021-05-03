import { TypeUtil } from "./type.util.js";
const cast = TypeUtil.cast;

export const config = {
  PORT: cast("PORT", "number", 5000),
  ACCESS_TOKEN_SECRET: cast("ACCESS_TOKEN_SECRET", "string", ""),
  ACCESS_TOKEN_LIFE: cast("ACCESS_TOKEN_LIFE", "number", 0),
  REFRESH_TOKEN_SECRET: cast("REFRESH_TOKEN_SECRET", "string", ""),
  REFRESH_TOKEN_LIFE: cast("REFRESH_TOKEN_LIFE", "number", 0),
  SESSION_SECRET: cast("SESSION_SECRET", "string", ""),
  MYSQL_AUTH_USERNAME: cast("MYSQL_AUTH_USERNAME", "string", ""),
  MYSQL_AUTH_PASSWORD: cast("MYSQL_AUTH_PASSWORD", "string", ""),
  MYSQL_HOST: cast("MYSQL_HOST", "string", ""),
  MYSQL_PORT: cast("MYSQL_PORT", "string", ""),
  MYSQL_DBNAME: cast("MYSQL_DBNAME", "string", ""),
};
