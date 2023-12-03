CREATE DATABASE english;
USE english;

CREATE OR REPLACE TABLE akun(
id INT PRIMARY KEY AUTO_INCREMENT,
nama VARCHAR (36),
email VARCHAR(36),
username VARCHAR (36),
`password` VARCHAR (36),
image 	VARCHAR(36)
);
CREATE OR REPLACE TABLE admin(
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR (36),
`password` VARCHAR (36)
);
INSERT INTO admin VALUES ("","riritri","2004");

CREATE OR REPLACE TABLE jenis_vocabulary(
no_vocab INT PRIMARY KEY AUTO_INCREMENT,
jenis_vocab VARCHAR (36)
);
INSERT INTO jenis_vocabulary VALUES 
("","Irregular Verb"),
("","Regular Verb"),
("","Adjective"),
("","Noun");
CREATE OR REPLACE TABLE soal(
	nomor INT PRIMARY KEY ,
	soal TEXT,
	pilihan_A TEXT,
	pilihan_B TEXT,
	pilihan_C TEXT,
	pilihan_D TEXT,
	jawaban TEXT
	);  
CREATE OR REPLACE TABLE vocab(
nomor INT,
verb1 VARCHAR(36),
verb2 VARCHAR(36),
verb3 VARCHAR(36),
arti VARCHAR(36),
no_vocab INT,
FOREIGN KEY (no_vocab) REFERENCES jenis_vocabulary (no_vocab)
);
INSERT INTO vocab VALUES
(1,"Arise",	"Arose",	"Arisen",	"Timbul",1),
(2,"Begin",	"Began",	"Begun",	"Mmulai",1),
(3,"Inlay",	"Inlaid",	"Inlaid",	"Menaruh",1),
(5,"Choose",	"Chose",	"chosen",	"Memilih",1),
(6,"Prove",	"Proved",	"Proven",	"Membuktikan",1),
(7,"Cling",	"Clung",	"Clung",	"Melekat",1),
(8,"Fight",	"Fought",	"Fought",	"Berkelahi",1),
(9,"Dwell",	"Dwelled",	"Dwelt",	"Menghuni",1),
(10,"Lean",	"Leaned",	"Leant",	"Menyandarkan",1),
(1,"Accept",	"Accepted",	"Accepted",	"Menerima",2),
(2,"Need",	"Needed",	"Needed",	"Membutuhkan",2),
(3,"Compare",	"Compared",	"Compared",	"Membandingkan",2),
(5,"Borrow",	"Borrowed",	"Borrowed",	"Meminjamkan",2),
(6,"Contain",	"Contained",	"Contained",	"Mengandung",2),
(7,"Divide",	"Divided",	"Divided",	"Membagi",2),
(8,"Extend",	"Extended",	"Extended",	"Memperpanjang",2),
(9,"Flow",	"Flowed",	"Flowed",	"Mengalir",2),
(10,"Gather",	"Gathered",	"Gathered",	"Mengumpulkan",2);

CREATE OR REPLACE TABLE vocab1(
nomor INT,
vocabulary VARCHAR(36),
arti VARCHAR (36),
no_vocab INT,
FOREIGN KEY (no_vocab) REFERENCES jenis_vocabulary (no_vocab)
);

INSERT INTO vocab1 VALUES
(1,	"Accurate",	"Tepat"		,3),
(2,	"Adorable",	"Menggemaskan"	,3),
(3,	"Better",	"Lebih baik"	,3),
(4,	"Brief",	"Singkat"	,3),
(5,	"Clever",	"Cerdas"	,3),
(6,	"Dazzling",	"Mempesona"	,3),
(7,	"Difficult",	"Sulit"		,3),
(8,	"Dangerous",	"Berbahaya"	,3),
(9,	"Famous",	"Terkenal"	,3),
(10,	"Gorgeous",	"Sangat indah"	,3),
(1,	"Apartment",	"Apartemen"	,4),
(2,	"Board",	"Papan"		,4),
(3,	"children",	"Anak-anak"	,4),
(4,	"classroom",	"kelas"		,4),
(5,	"Disaster",	"Bencana"	,4),
(6,	"Dormitory",	"Asrama"	,4),
(7,	"Exam",		"Ujian"		,4),
(8,	"Flower",	"Bunga"		,4),
(9,	"Globe",	"Bola dunia"	,4),
(10,	"Government",	"Pemerintah"	,4);


DROP DATABASE english;