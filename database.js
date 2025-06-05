import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "12345",  // Ensure this matches your database password
  database: "english1",
  connectionLimit: 10,
  connectTimeout: 10000,  // Increased timeout
});

try {
  const conn = await pool.getConnection();
  console.log("Database connected successfully!");
  // You can now run your queries
  conn.end();  // Don't forget to close the connection when done.
} catch (err) {
  console.error("Error while connecting to the database:", err);
}

export default pool;