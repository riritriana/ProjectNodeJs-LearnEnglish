CREATE DATABASE english1;
USE english1;

CREATE OR REPLACE TABLE akun(
id INT PRIMARY KEY AUTO_INCREMENT,
nama VARCHAR (36),
email VARCHAR(36),
username VARCHAR (36),
`password` VARCHAR (36),
image 	VARCHAR(36)
);
DROP TABLE akun;
CREATE OR REPLACE TABLE admin(
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR (36),
`password` VARCHAR (36)
);
INSERT INTO admin VALUES ("","riritri","2004");
CREATE OR REPLACE TABLE soal(
	nomor INT PRIMARY KEY ,
	soal TEXT,
	pilihan_A TEXT,
	pilihan_B TEXT,
	pilihan_C TEXT,
	pilihan_D TEXT,
	jawaban TEXT
); 
DROP TABLE soal;
CREATE OR REPLACE TABLE upload(
id INT AUTO_INCREMENT PRIMARY KEY,
image VARCHAR (50),
keterangan TEXT
);	
CREATE OR REPLACE TABLE beranda(
id INT AUTO_INCREMENT PRIMARY KEY,
image VARCHAR (50),
judul VARCHAR (50)
);
DROP TABLE beranda;
INSERT INTO beranda VALUES 
("","/images/me.jpg","Riri Triana"),
("","/images/bgali.jpg","Ali Hanafiah"),
("","/images/mba.jpg","Kharisma Amalia"),
("","/images/afadli.jpg","Fadly Faturrahman");

CREATE OR REPLACE TABLE irregular(
nomor INT PRIMARY KEY AUTO_INCREMENT,
verb1 TEXT,
verb2 TEXT,
verb3 TEXT,
arti TEXT

);
INSERT INTO irregular VALUES
("","Arise",	"Arose",	"Arisen",	"Timbul"),
("","Begin",	"Began",	"Begun",	"Memulai"),
("","Inlay",	"Inlaid",	"Inlaid",	"Menaruh"),
("","Choose",	"Chose",	"chosen",	"Memilih"),
("","Prove",	"Proved",	"Proven",	"Membuktikan"),
("","Cling",	"Clung",	"Clung",	"Melekat"),
("","Fight",	"Fought",	"Fought",	"Berkelahi"),
("","Dwell",	"Dwelled",	"Dwelt",	"Menghuni"),
("","Lean",	"Leaned",	"Leant",	"Menyandarkan"),
("","leave",	"left",		"left",		"meninggalkan"),
("","lend","lent","lent","meminjamkan"),
("","meet","met","met","bertemu"),
("","misset","misset","misset","salah atur"),
("","offset","offset","offset","mengimbangi");
DROP TABLE irregular;

CREATE OR REPLACE TABLE regular(
nomor INT PRIMARY KEY AUTO_INCREMENT,
verb1 VARCHAR(50),
verb2 VARCHAR(50),
verb3 VARCHAR(50),
arti VARCHAR(50)

);
DROP TABLE regular;
INSERT INTO regular VALUES
("","Accept",	"Accepted",	"Accepted",	"Menerima"),
("","Need",	"Needed",	"Needed",	"Membutuhkan"),
("","Compare",	"Compared",	"Compared",	"Membandingkan"),
("","Borrow",	"Borrowed",	"Borrowed",	"Meminjamkan"),
("","Contain",	"Contained",	"Contained",	"Mengandung"),
("","Divide",	"Divided",	"Divided",	"Membagi"),
("","Extend",	"Extended",	"Extended",	"Memperpanjang"),
("","Flow",	"Flowed",	"Flowed",	"Mengalir"),
("","Gather",	"Gathered",	"Gathered",	"Mengumpulkan"),
("","head",	"headed",	"headed",	"memimpin"),
("","hover",	"hovered",	"hovered",	"melayang"),
("","hug",	"hugged",	"hugged",	"memeluk"),
("","ignore",	"ignored",	"ignored",	"mengabaikan"),
("","include",	"included",	"included",	"memasukkan"),
("","join",	"joined",	"joined",	"Bergabung"),
("","jump",	"jumped",	"jumped",	"melompat");


CREATE OR REPLACE TABLE adjective(
nomor INT PRIMARY KEY AUTO_INCREMENT,
vocabulary VARCHAR(50),
arti VARCHAR (50)

);
INSERT INTO adjective VALUES
("",	"Accurate",	"Tepat"		),
("",	"Adorable",	"Menggemaskan"	),
("",	"Brief",	"Singkat"	),
("",	"Clever",	"Cerdas"	),
("",	"Dazzling",	"Mempesona"	),
("",	"Difficult",	"Sulit"		),
("",	"Dangerous",	"Berbahaya"	),
("",	"Famous",	"Terkenal"	),
("",	"Gorgeous",	"Sangat indah"	);

CREATE OR REPLACE TABLE noun(
nomor INT PRIMARY KEY AUTO_INCREMENT,
vocabulary VARCHAR(50),
arti VARCHAR (50)

);
INSERT INTO noun VALUES
("",	"Apartment",	"Apartemen"	),
("",	"Board",	"Papan"		),
("",	"children",	"Anak-anak"	),
("",	"classroom",	"kelas"		),
("",	"Disaster",	"Bencana"	),
("",	"Dormitory",	"Asrama"	),
("",	"Exam",		"Ujian"		),
("",	"Flower",	"Bunga"		),
("",	"Globe",	"Bola dunia"	),
("",	"Government",	"Pemerintah"	);


DROP DATABASE english;