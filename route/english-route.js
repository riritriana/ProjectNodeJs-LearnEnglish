import conn from "../database.js";

// Get all users from 'akun' table
export async function getdata(_req, res, next) {
    try {
        const result = await conn.query(
            `SELECT * FROM akun`
        );
        res.send(result.rows);  // result.rows untuk hasil query PostgreSQL

    } catch (error) {
        next(error);
    }
}

// Add a new question to 'soal' table
export async function postSoal(req, res, next) {
    try {
        await conn.query(
            `INSERT INTO soal (nomor, soal, pilihan_A, pilihan_B, pilihan_C, pilihan_D, jawaban) 
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [req.body.nomor, req.body.soal, req.body.pilihA, req.body.pilihB, req.body.pilihC, req.body.pilihD, req.body.jawaban]
        );
        res.send("Question added successfully");

    } catch (error) {
        next(error);
    }
}

// Get all questions from 'soal' table
export async function getSoal(_req, res, next) {
    try {
        const rows = await conn.query("SELECT * FROM soal");
        res.send(rows.rows);  // result.rows untuk hasil query PostgreSQL

    } catch (error) {
        next(error);
    }
}

// Update a question in 'soal' table
export async function putSoal(req, res, next) {
    try {
        const query = `
            UPDATE soal 
            SET soal = $1, pilihan_A = $2, pilihan_B = $3, pilihan_C = $4, pilihan_D = $5, jawaban = $6 
            WHERE nomor = $7
        `;
        await conn.query(query, [
            req.body.soal, req.body.pilihA, req.body.pilihB, req.body.pilihC, req.body.pilihD, req.body.jawaban, req.body.kode
        ]);
        res.send("Question Updated successfully");

    } catch (error) {
        next(error);
    }
}

// Delete a question from 'soal' table
export async function deleteSoal(req, res, next) {
    try {
        const data = parseInt(req.body.nomor);
        await conn.query("DELETE FROM soal WHERE nomor = $1", [data]);
        res.send("Question Deleted successfully");

    } catch (error) {
        next(error);
    }
}

// Get all vocabulary from 'irregular' table
export async function getVocab(_req, res, next) {
    try {
        const vocab = await conn.query("SELECT * FROM irregular");
        res.send(vocab.rows);

    } catch (error) {
        next(error);
    }
}

// Get all vocabulary from 'regular' table
export async function getVocab1(_req, res, next) {
    try {
        const vocab = await conn.query("SELECT * FROM regular");
        res.send(vocab.rows);

    } catch (error) {
        next(error);
    }
}

// Get all vocabulary from 'adjective' table
export async function getVocab2(_req, res, next) {
    try {
        const vocab = await conn.query("SELECT * FROM adjective");
        res.send(vocab.rows);

    } catch (error) {
        next(error);
    }
}

// Get all vocabulary from 'noun' table
export async function getVocab3(_req, res, next) {
    try {
        const vocab = await conn.query("SELECT * FROM noun");
        res.send(vocab.rows);

    } catch (error) {
        next(error);
    }
}

// Get all content from 'beranda' table
export async function getContent(_req, res, next) {
    try {
        const data = await conn.query("SELECT * FROM beranda");
        res.send(data.rows);

    } catch (error) {
        next(error);
    }
}

// Get user information from 'akun' table
export async function cardFoto(_req, res, next) {
    try {
        const user = await conn.query("SELECT nama, image FROM akun");
        res.send(user.rows);

    } catch (error) {
        next(error);
    }
}

// Upload forum image into the 'upload' table
export async function uploadForum(req, res) {
    try {
        await conn.query(
            `INSERT INTO upload (image, keterangan) VALUES ($1, $2)`,
            [req.file.filename, req.body.keterangan]
        );
        res.send("Forum image uploaded successfully");

    } catch (error) {
        res.status(500).send("Error uploading forum image");
    }
}

// Get forum images and descriptions from the 'upload' table
export async function forum(req, res) {
    try {
        const data = await conn.query("SELECT image, keterangan FROM upload");
        res.send(data.rows);

    } catch (error) {
        next(error);
    }
}
``
