import validasiUrl, { fetch2 } from "../../validasiUrl.js";
validasiUrl();
const soal = document.getElementById("tampilan-soal");
let nomor = 0;
export async function option() {
  let temp = 0;
  validasiUrl();
  const res = await fetch2("/api/soal");
  const kumpulanData = await res.json();
  for (let x = 1; x <= kumpulanData.length; x++) {
    let op = document.createElement("option");
    op.value = kumpulanData[temp].nomor;
    op.textContent = `${x}. kode soal ${kumpulanData[temp].nomor}`;
    nomor = kumpulanData[temp].nomor;
    if (x === 1) {
      op.setAttribute("selected", true);
      tampilanSoal(op.value);
    }
    soal.appendChild(op);
    temp++;
  }
}
option();
export async function tampilanSoal(data) {
  validasiUrl();
  const res = await fetch("/api/soal", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
  const x = await res.json();
  x.forEach((e, i) => {
    if (e.nomor == data) {
      document.input_soal.soal.value = e.soal;
      document.input_soal.pilihA.value = e.pilihan_A;
      document.input_soal.pilihB.value = e.pilihan_B;
      document.input_soal.pilihC.value = e.pilihan_C;
      document.input_soal.pilihD.value = e.pilihan_D;
      document.input_soal.jawaban.value = e.jawaban;
    }
  });
}
soal.addEventListener("change", (e) => tampilanSoal(e.target.value));
document.input_soal.onsubmit = async (e) => {
  e.preventDefault();
  const res = await fetch("/api/admin/update", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      kode: document.querySelector("#tampilan-soal").value,
      soal: document.input_soal.soal.value,
      pilihA: document.input_soal.pilihA.value,
      pilihB: document.input_soal.pilihB.value,
      pilihC: document.input_soal.pilihC.value,
      pilihD: document.input_soal.pilihD.value,
      jawaban: document.input_soal.jawaban.value,
    }),
  });
  location.href = "../";
  alert("Berhasil di ubah");
};
function hapus() {
  document.input_soal.soal.value = "";
  document.input_soal.pilihA.value = "";
  document.input_soal.pilihB.value = "";
  document.input_soal.pilihC.value = "";
  document.input_soal.pilihD.value = "";
  document.input_soal.jawaban.value = "";
}
   document.addEventListener("DOMContentLoaded", () => {
            const logout = document.querySelector("#logout");
            logout.addEventListener("click", () => {
                console.log("masukkk");
                
                const token = localStorage.getItem("token");
                if (token) {
                    fetch("/api/logout", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }).then((response) => {
                        if (response.ok) {
                            location.href = "/login";
                        } else {
                            console.error("Logout failed!");
                        }
                    }).catch(error => console.error("Logout request error: ", error));
                } else {
                    console.error("No token found in localStorage");
                }
            });
        });
