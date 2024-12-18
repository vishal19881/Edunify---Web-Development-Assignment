import mysql from "mysql2/promise";
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const dbconnection = await mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME,
});

export default dbconnection;
