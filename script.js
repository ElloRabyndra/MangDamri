// Desktop

// Fitur Jadwal
const mainJadwal = document.querySelector(".main-jadwal");
const mainJadwalTeks = mainJadwal.querySelector("span");
const mainJadwalHari = mainJadwal.querySelector(".main-hari");
const sideJadwals = document.querySelectorAll(".side-jadwal-damri");

sideJadwals.forEach(function (sideJadwal, i) {
  sideJadwal.addEventListener("click", function () {
    mainJadwalTeks.innerHTML = "Damri " + (i + 1);

    if (i + 1 == 3) {
      mainJadwal.style.backgroundColor = "#f00607";
      mainJadwalHari.style.color = "#f00607";
    } else {
      mainJadwal.style.backgroundColor = "#ffcd02";
      mainJadwalHari.style.color = "#ffcd02";
    }
  });
});

// Fitur Lokasi
const prevButton = document.querySelector("#lokasi .prev");
const nextButton = document.querySelector("#lokasi .next");
const headerLokasiTop = document.querySelector(
  ".lokasi-damri-header p:nth-child(1)"
);
const headerLokasiBot = document.querySelector(
  ".lokasi-damri-header p:nth-child(2)"
);
const fieldDriver = document.querySelector(
  ".detail-lokasi-damri-header .nama-supir"
);
const fieldJalan = document.querySelector(
  ".detail-lokasi-damri-content-main p:nth-child(1)"
);
const fieldEstimasi = document.querySelector(
  ".detail-lokasi-damri-content-main p:nth-child(3)"
);
const driver = ["Ahmad Yunus", "Budiono Siregar", "Dominic Toreto"];
const jalan = [
  "Jalan Parameswara, Bukit Baru",
  "Jalan Srijaya Negara, Bukit Lama",
  "Jalan Musi II",
];
const estimasi = [12, 50, 30];

let indexLokasi = 0;
nextButton.addEventListener("click", function () {
  indexLokasi++;
  if (indexLokasi >= 3) {
    indexLokasi = 0;
  }
  headerLokasiTop.innerHTML = "Damri " + (indexLokasi + 1);
  headerLokasiBot.innerHTML =
    "Tekan Point Untuk Melihat Jadwal Damri " + (indexLokasi + 1);
  fieldDriver.innerHTML = driver[indexLokasi];
  fieldJalan.innerHTML = jalan[indexLokasi];
  fieldEstimasi.innerHTML = `Estimasi Tiba Dalam ${estimasi[indexLokasi]} Menit`;
});

prevButton.addEventListener("click", function () {
  indexLokasi--;
  if (indexLokasi < 0) {
    indexLokasi = 2;
  }
  headerLokasiTop.innerHTML = "Damri " + (indexLokasi + 1);
  headerLokasiBot.innerHTML =
    "Tekan Point Untuk Melihat Jadwal Damri " + (indexLokasi + 1);
  fieldDriver.innerHTML = driver[indexLokasi];
  fieldJalan.innerHTML = jalan[indexLokasi];
  fieldEstimasi.innerHTML = `Estimasi Tiba Dalam ${estimasi[indexLokasi]} Menit`;
});

// Fitur  Informasi
const downButton = document.querySelector(".informasi-damri .down");
const informasiDamriHeader = document.querySelector(
  ".informasi-damri .informasi-damri-title"
);
let indexDamri = 1;
downButton.addEventListener("click", function () {
  indexDamri++;
  if (indexDamri > 3) {
    indexDamri = 1;
  }
  informasiDamriHeader.innerHTML = "Damri " + indexDamri;
});

// Responsive
const prevMobile = document.querySelector(".prevMobile");
const nextMobile = document.querySelector(".nextMobile");

nextMobile.addEventListener("click", function () {
  indexLokasi++;
  if (indexLokasi >= 3) {
    indexLokasi = 0;
  }
  headerLokasiTop.innerHTML = "Damri " + (indexLokasi + 1);
  headerLokasiBot.innerHTML =
    "Tekan Point Untuk Melihat Jadwal Damri " + (indexLokasi + 1);
  fieldDriver.innerHTML = driver[indexLokasi];
  fieldJalan.innerHTML = jalan[indexLokasi];
  fieldEstimasi.innerHTML = `Estimasi Tiba Dalam ${estimasi[indexLokasi]} Menit`;
});

prevMobile.addEventListener("click", function () {
  indexLokasi--;
  if (indexLokasi < 0) {
    indexLokasi = 2;
  }
  headerLokasiTop.innerHTML = "Damri " + (indexLokasi + 1);
  headerLokasiBot.innerHTML =
    "Tekan Point Untuk Melihat Jadwal Damri " + (indexLokasi + 1);
  fieldDriver.innerHTML = driver[indexLokasi];
  fieldJalan.innerHTML = jalan[indexLokasi];
  fieldEstimasi.innerHTML = `Estimasi Tiba Dalam ${estimasi[indexLokasi]} Menit`;
});
