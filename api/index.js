import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import { addUser, login } from "./route/regist.js";
import {
  getdata,
  postSoal,
  getSoal,
  putSoal,
  deleteSoal,
  getVocab,
  getVocab1,
  getVocab2,
  getVocab3,
  getContent,
  cardFoto,
  uploadForum,
  forum,
} from "./route/english-route.js";
import cookieParser from "cookie-parser";
const upload = multer({ dest: "public/images" });
const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.static("public"));
app.post("/api/register", upload.single("image"), addUser);
app.post("/api/login", login);
// autorization yg ada di index.html/home berfungsi untuk menjalankan yg dibawah app.aut
app.use(function auth(req, res, next) {
  //ini akan diterapkan untuk setiap permintaan yg masuk
  if (req.headers.authorization) {
    //mengecek
    // console.log(req.headers.authorization);
    // untuk menghilangkan fecht 500
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "riri", async (err, decoded) => {
      if (!err) {
        req.account = decoded;
        next();
      } else {
        return res.status(401).send("Token salah.");
      }
    });
  } else {
    return res.redirect("/login");
  }
});
// setelah login baru bisa mengakses api selanjutnya
app.get("/api/home", getContent);
app.get("/api/vocab", getVocab);
app.get("/api/vocab1", getVocab1);
app.get("/api/vocab2", getVocab2);
app.get("/api/vocab3", getVocab3);
app.get("/api/data", getdata);
app.get("/api/me", cardFoto);
app.post("/api/admin/soal", postSoal);
app.post("/api/upload", upload.single("image"), uploadForum);
app.get("/api/forum", forum);
app.get("/api/soal", getSoal);
app.put("/api/admin/update", putSoal);
app.delete("/api/admin/delete", deleteSoal);
app.get("/api/me");
app.get("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.send("logout berhasil !!!");
});
app.listen(3000, () => {
  console.log("The server starts on port 3000.");
});
