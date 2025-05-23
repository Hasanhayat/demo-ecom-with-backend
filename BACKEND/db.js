import { Pool } from "pg";
import 'dotenv/config';

const db = new Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, // Disable cert verification (fine for Neon/dev)
    },
});
export default db;
