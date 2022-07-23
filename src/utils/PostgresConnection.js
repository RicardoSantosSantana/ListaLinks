
import { Pool } from "pg";


const config = {
  user: process.env.PGSQL_USER,
  password: process.env.PGSQL_PASSWORD,
  host: process.env.PGSQL_HOST,
  port: process.env.PGSQL_PORT,
  database: process.env.PGSQL_DATABASE,
  ssl: {
      rejectUnauthorized: false
    }
}     
let dbPool 
  
if (!dbPool) {
  dbPool = new Pool(config); 
}

export default dbPool;