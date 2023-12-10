function validasiUrl() {//digunakan untuk memeriksa keberadaan token di dalam localStorage. Jika tidak ada token, pengguna akan diarahkan ke halaman login. 
  console.log(localStorage.getItem("token"));
    !localStorage.getItem("token") && (location.href = "./login");
  } 
  // get
  // path adalah url yg diminta
  export async function fetch2(path) {//mempermudah penggunaan fetch dengan menambahkan header otentikasi Bearer menggunakan token yang disimpan di dalam localStorage.
    // path url atau path ke sumber daya yg akan diambil
    return await fetch(path, {
      // return mengembalikan sebuah promise
      headers: {
        // bearer digunakan untuk mengirim token akses sebagai bagian dari permintaan HTTP
        Authorization: `Bearer ${localStorage.getItem("token")}`,//Ini menambahkan token(dari localstronge) ke header menggunakan metode otentikasi "Bearer"
        "Content-Type": "application/json",
      },
    });
  }
  // untuk methode post dan put
  export async function fetch3(path, method, data) {
    return await fetch(path, {
      method: method,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  export default validasiUrl;
  