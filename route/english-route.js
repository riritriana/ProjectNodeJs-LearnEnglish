import conn from "../database.js";

export async function getdata(_req,res,next){
    try {
        const result= await conn.query(
            `SELECT * FROM akun`
         )
         res.send(result);
     
    } catch (error) {
        next(error);
    }
 
 }
 
export async function postSoal(req,res,next){
    try {
        await conn.query(
            `INSERT INTO soal VALUES ("${req.body.nomor}","${req.body.soal}","${req.body.pilihA}","${req.body.pilihB}","${req.body.pilihC}","${req.body.pilihD}","${req.body.jawaban}")`
        );
        res.send("Question added successfully");
    
    } catch (error) {
        next(error);
    }
}
export async function getSoal(_req,res,next){
    try {
        const rows = await conn.query("SELECT * from soal");
        res.send(rows);
     
    } catch (error) {
        next(error);
    }
}
export async function putSoal(req, res,next) {
    try {
        const a = `UPDATE soal SET soal =" ${req.body.soal}",pilihan_A = "${req.body.pilihA}",pilihan_B = "${req.body.pilihB}",pilihan_C = "${req.body.pilihC}",pilihan_D = "${req.body.pilihD}",jawaban = "${req.body.jawaban}" WHERE nomor = "${req.body.kode}"`;
        await conn.query(a);
        res.send(`Question Updated successfully `);
     
    } catch (error) {
       next(error);
    }
  }
  
export async function deleteSoal(req,res,next){
    try {
        const data = parseInt(req.body.nomor);
        await conn.query(`DELETE FROM soal WHERE nomor = ${data}`);
        res.send("Question Deleted successfully");
     
    } catch (error) {
        next(error);
    }
   
}
export async function getVocab(_req,res,next){
    try {
        const vocab= await conn.query("SELECT * from irregular");
        res.send(vocab);
    
    } catch (error) {
        next(error);
    }
}
export async function getVocab1(_req,res){
    try {
        const vocab= await conn.query("SELECT * from regular");
        res.send(vocab);
     
    } catch (error) {
        next(error);
    }

}
export async function getVocab2(_req,res){
    try {
        const vocab= await conn.query("SELECT * from adjective");
        res.send(vocab);
    
    } catch (error) {
        next(error);
    }
}
export async function getVocab3(_req,res,next){
    try {
        const vocab= await conn.query("SELECT * from noun");
        res.send(vocab);
        
    } catch (error) {
        next(error);
    }
}
export async function getContent(_req,res,next){
    try {
        const data = await conn.query("SELECT * from beranda");
        res.send(data);
      
    } catch (error) {
        next(error);
    }
}
export async function cardFoto(_req,res,next){
    try {
        const user= await conn.query("SELECT nama,image from akun");
        res.send(user);
     
    } catch (error) {
        next(error);
    }
}
export async function uploadForum(req,res){
    const forum =await conn.query(
        `INSERT INTO upload VALUES (NULL,'${req.file.filename}','${req.body.keterangan}')`
        
    );
    res.send("berhasil ditambah");
}
export async function forum(req,res){
    const data = await conn.query("SELECT image, keterangan from upload");
    res.send(data);
}