import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
var Pool = pg.Pool;
var databaseConfig = {
    connectionString: process.env.DATABASE_URL
};
var db = new Pool(databaseConfig);
export default db;
