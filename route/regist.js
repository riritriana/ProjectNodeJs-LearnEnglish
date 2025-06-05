import conn from "../database.js"; // Pastikan menggunakan koneksi PostgreSQL yang benar
import jwt from "jsonwebtoken";

// Fungsi untuk menambah user
export async function addUser(req, res, next) {
   try {
      // Mengecek apakah username sudah ada di tabel 'akun'
      const data = await conn.query(
         `SELECT username FROM akun WHERE username = $1`, [req.body.username]
      );

      if (data.rows.length > 0) {
         return res.status(409).send("User sudah ada");
      } else {
         // Menambahkan data user baru ke dalam tabel 'akun'
         await conn.query(
            `INSERT INTO akun (nama, email, username, password, foto) VALUES ($1, $2, $3, $4, $5)`,
            [req.body.nama, req.body.email, req.body.username, req.body.password, req.file.filename]
         );
         res.send("User added successfully");
      }

   } catch (error) {
      next(error);
   }
}

// Fungsi untuk login
export async function login(req, res, next) {
   try {
      // Mengecek apakah username dan password cocok dengan user di tabel 'akun'
      let result = await conn.query(
         `SELECT * FROM akun WHERE username = $1 AND password = $2`, 
         [req.body.username, req.body.password]
      );

      // Jika tidak ditemukan di tabel 'akun', cek di tabel 'admin'
      if (result.rows.length === 0) {
         result = await conn.query(
            `SELECT * FROM admin WHERE username = $1 AND password = $2`,
            [req.body.username, req.body.password]
         );
      }

      console.log(result.rows.length);

      // Jika user ditemukan, buat token dan kirimkan response dengan role
      if (result.rows.length > 0) {
         const token = jwt.sign({ result: result.rows[0] }, "riri"); // Secret key untuk JWT

         // Mengecek apakah result memiliki email untuk menentukan apakah itu user atau admin
         if (result.rows[0]?.email) {
            res.send({ token, role: "user" });
         } else {
            res.send({ token, role: "admin" });
         }
      } else {
         res.status(401).send("Login gagal");
      }

   } catch (error) {
      next(error);
   }
}
