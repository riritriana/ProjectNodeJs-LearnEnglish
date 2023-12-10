import conn from "../database.js";
import jwt from "jsonwebtoken";

export async function addUser(req, res,next) {
   try {
      const data = await conn.query(
         `SELECT username from akun WHERE username ='${req.body.username}'`
   
      ); if (data.length>0) {
         res.status(409).send("User sudah ada")
      } else {
         const rows = await conn.query(
            `INSERT INTO akun VALUES (NULL,'${req.body.nama}','${req.body.email}','${req.body.username}','${req.body.password}','${req.file.filename}')`
         );
         res.send("user added sucesfully");
      }
   
   } catch (error) {
    next(error);
   }

}
export async function login(req, res,next) {
   try {
      let result = await conn.query(
         `SELECT *FROM akun where username = '${req.body.username}'&& password = '${req.body.password}'`
      );
      if (result.length === 0) {
         result = await conn.query(
            `SELECT *FROM admin where username = '${req.body.username}'&& password = '${req.body.password}'`
         )
   
      }
      console.log(result.length);
      if (result.length > 0) {
         const token = jwt.sign({ result }, "riri");//proccess.env.(nama bebas(secret key))
         // res.cookie("token",token);
         if (result[0]?.email) {
            res.send({ token, role: "user" });
   
         } else {
            res.send({ token, role: "admin" });
   
         }
      } else {
         res.send("login gagal");
      }
   
   } catch (error) {
      next(error);
   }
}
