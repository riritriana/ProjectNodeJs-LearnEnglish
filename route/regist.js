import conn from "../database.js";
import jwt from "jsonwebtoken";

export async function addUser(req, res) {
   const rows= await conn.query(
      `INSERT INTO akun VALUES (NULL,'${req.body.nama}','${req.body.email}','${req.body.username}','${req.body.password}','${req.file.filename}')`
    );
    res.send("pengguna telah ditambahkan.");
    }

export async function login(req,res){
   const result = await conn.query(
      `SELECT *FROM akun where username = '${req.body.username}'&& password = '${req.body.password}'`
   )
   if(result.length>0){
      const token = jwt.sign({result},"riri");//proccess.env.(nama bebas(secret key))
      res.cookie("token",token);
      res.send({token});
   }else{
      res.send("login gagal");
   }
}
export async function getdata(req,res){
   const result= await conn.query(
      `SELECT * FROM akun`
   )
   res.send(result);

}
