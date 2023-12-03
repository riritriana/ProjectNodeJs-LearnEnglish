import express from "express"
import conn from "./database.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import { addUser,getdata,login } from "./route/regist.js";
import { postSoal,getSoal,putSoal,deleteSoal } from "./route/english-route.js";
import cookieParser from "cookie-parser";
const upload = multer({dest:"public/images"})
const app = express();
app.use(cookieParser());

app.use(express.json());
app.post("/api/register",upload.single("image"),(req,res)=>{
  console.log(req.body.username);
});

app.use((req, res, next) => {
  if (req.path.startsWith("/api/login") || req.path.startsWith("/assets")) {
    next();
  } else {
    let authorized = false;
    if (req.cookies.token) {
      try {
        req.me = jwt.verify(req.cookies.token, "riri");
        authorized = true;
      } catch (error) {
        res.clearCookie("token");
      }
    }
    if (authorized) {
      if (req.path.startsWith("/login")) {
        res.redirect("/home");
      } else {
        next();
      }
    } else {
      if (req.path.startsWith("/login") || req.path.startsWith("/register")) {
        next();
      } else {
        if (req.path.startsWith("/api")) {
          res.status(401);
          res.send("anda harus login dulu.");
        } else {
          res.redirect("/login");
        }
      }
    }
  }
});
app.use(express.static("public"));
app.get("/api/data",getdata);
app.post("/api/register",upload.single("image"), addUser);
app.post("/api/login", login);
app.post("/api/admin/soal",postSoal);
app.get("/api/soal",getSoal);
app.post("/api/admin/update",putSoal);
app.delete("/api/admin/delete",deleteSoal);
// app.post("/api/admin/soal",(req,res)=>{
//   console.log(req.body);
// })
app.get("/api/logout",(req,res)=>{
  res.clearCookie("token");
  res.send("logout berhasil !!!");
})
app.listen(3000, () => {
  console.log("The server starts on port 3000.");
});
