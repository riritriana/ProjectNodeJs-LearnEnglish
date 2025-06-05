import express from "express";
import conn from "../database.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import { addUser, login } from "../route/regist.js";
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
} from "../route/english-route.js";
import cookieParser from "cookie-parser";

const upload = multer({ dest: "public/images" });
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/register", upload.single("image"), addUser);
app.post("/api/login", login);

// Authorization middleware
app.use(function auth(req, res, next) {
  if (req.headers.authorization) {
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

// Protected Routes
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
app.get("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.send("logout berhasil !!!");
});

// WAJIB untuk Vercel: export sebagai handler (tanpa app.listen)
export default function handler(req, res) {
  return app(req, res);
}
