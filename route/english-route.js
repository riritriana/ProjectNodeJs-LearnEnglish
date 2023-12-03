import conn from "../database.js";
export async function postSoal(req,res){
    await conn.query(
        `INSERT INTO soal VALUES ("${req.body.nomor}","${req.body.soal}","${req.body.pilihA}","${req.body.pilihB}","${req.body.pilihC}","${req.body.pilihD}","${req.body.jawaban}")`
    );
    res.send("Question added successfully");
}
export async function getSoal(req,res){
    const rows = await conn.query("SELECT * from soal");
    res.send(rows);
}
export async function putSoal(req, res) {
    const a = `UPDATE soal SET soal =" ${req.body.soal}",pilihan_A = "${req.body.pilihA}",pilihan_B = "${req.body.pilihB}",pilihan_C = "${req.body.pilihC}",pilihan_D = "${req.body.pilihD}",jawaban = "${req.body.jawaban}" WHERE nomor = "${req.body.kode}"`;
    await conn.query(a);
    res.send(`Question Updated successfully `);
  }
  
export async function deleteSoal(req,res){
    const data = parseInt(req.body.nomor);
    await conn.query(`DELETE FROM soal WHERE nomor = ${data}`);
    res.send("Question Deleted successfully");
   
}