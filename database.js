import { Pool } from "pg";

// Using the connection URL directly
const pool = new Pool({
  connectionString: "postgresql://postgres.yeqmdlmpbqhgoylucabq:oMKWGDTXFvNauYf5@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
});

try {
  const client = await pool.connect();
  console.log("Database connected successfully!");
  client.release();
} catch (err) {
  console.error("Error while connecting to the database:", err);
}

export default pool;
// import mariadb from "mariadb";

// const pool = mariadb.createPool({
//   host: "localhost",
//   user: "root",
//   password: "12345",  // Ensure this matches your database password
//   database: "english1",
//   connectionLimit: 10,
//   connectTimeout: 10000,  // Increased timeout
// });

// try {
//   const conn = await pool.getConnection();
//   console.log("Database connected successfully!");
//   // You can now run your queries
//   conn.end();  // Don't forget to close the connection when done.
// } catch (err) {
//   console.error("Error while connecting to the database:", err);
// }

// export default pool;