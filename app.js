// SESI PEMBAHASAN FUNCTION;
// function nyanyi() {
//   console.log("Cek...");

//   console.log("Do Re Mi...");
// }

// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();

// function selamatPagi(name) {
//   console.log(`Halo, ${name}. Selamat Pagi!`);
// }

// selamatPagi("Ardhi");
// SESI PEMBAHASAN FUNCTION END;

// // SESI PEMBAHASAN RETURN;
// function jumlahkan(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Bukan Angka";
//   }
//   return a + b;
// }
// // SESI PEMBAHASAN RETURN END;

// SESI PEMBAHASAN SCOPE;
// let programming = "JavaScript";

// function typeSafe() {
//   let programming = "TypeScript";
//   console.log(programming);
// }

// typeSafe();

// console.log(programming);
// SESI PEMBAHASAN SCOPE END;

// // SESI BLOCKED SCOPE VARIABEL;
// let tinggi = 8;
// if (tinggi > 5) {
//   let lebar = 10;
//   //   console.log(lebar);
// }
// console.log("tinggi", tinggi);

// for (let index = 0; index < 10; index++) {
//   const indexNumber = index;
//     console.log(indexNumber);
// }
// console.log("index", indexNumber);
// // SESI BLOCKED SCOPE VARIABEL END;

// // SESI LEXICAL SCOPE;
// function lamarKerja() {
//   const jabatan = "Programmer";

//   function lebihDalam() {
//     function orangDalam() {
//       let kenalan = `Orang Dalam Bisa memasukkan ${jabatan}`;
//       console.log(kenalan);
//     }

//     orangDalam();
//   }

//   lebihDalam();
// }
// // SESI LEXICAL SCOPE END;

// // SESI FUNCTION EXPRESSIOINS;
// function perpangkatan(nilai) {
//   return nilai * nilai;
// }

// let hasil = perpangkatan(5);

// const hasilPerpangkatan = function (nilai, pembanding) {
//   return nilai * pembanding;
// };
// // SESI FUNCTION EXPRESSIOINS END;

// // SESI FUNCTIOIN SEBAGAI ARGUMENT FUNCT LAIN;
// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }
// // SESI FUNCTIOIN SEBAGAI ARGUMENT FUNCT LAIN END;

// // SESI FUNCTION BERNILAI BALIK FUNCTION;
// function hasilnyaAdalahFunction() {
//   const rand = Math.random();
//   if (rand > 0.1) {
//     return function () {
//       console.log("Selamat, angkanya lebih besar");
//     };
//   } else {
//     return function () {
//       console.log("Maaf, mungkin bisa coba lagi.");
//     };
//   }
// }
// // SESI FUNCTION BERNILAI BALIK FUNCTION END;

// // SESI DEFINISI SEBUAH METHOD;
/* INI FUNCTION BIASA :
function myFunc() {
    console.log("Hello");
    return "Hi";
} 
*/
/* INI METHOD
const myMath = { // Object
  perkalian: function (x, y) { // Method
    return x * y;
  },
};
*/
// KESIMPULAN : METHOD Adalah Funct dalam Object, ex : Math
// // SESI DEFINISI SEBUAH METHOD END;

// // SESI KEYWORD "THIS"
/* "this" adalah keyword untuk memanggil suatu property pada object
yang sama. Tujuannya untuk mendapatkan nilainya. */

/*
const saya = {
  nama: "Ardhi",
  hobi: "Minum air",
  kenalan: function () {
    return `Hello, saya ${this.nama}, Hobi saya ${this.hobi}.`;
  },
};
*/
// // SESI KEYWORD "THIS" END

// // SESI "TRY" AND "CATCH"
/* "try" digunakan untuk mengecek suatu code error atau tidak
apabila error maka "catch" yang akan dijalankan.
~ Kenapa kudu "try" dan "catch" ??
~ Soalnya biasanya kalau error maka code selanjutnya tidak jalan,
kalau pake "try" and "catch" kode masih bisa dilanjutkan.
*/

/*
try {
  saya.kenalan();
} catch {
  console.log(`error!!`);
}

function teriak(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (error) {
    console.log(error);
    console.log(`Silahkan masukkan tipe data string pada argument teriak()`);
  }
}
*/
// // SESI "TRY" AND "CATCH" END

// // SESI "FOREACH" METHOD
/* const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

angka.forEach(function (el) {
  if (el % 2 == 0) {
    console.log(el);
  }
});
*/
/*
const animes = [
  {
    title: "Attack on Titan",
    rating: 90,
  },
  {
    title: "One Piece",
    rating: 89,
  },
  {
    title: "Bleach",
    rating: 82,
  },
  {
    title: "Hunter x Hunter",
    rating: 90,
  },
  {
    title: "Naruto",
    rating: 84,
  },
];

animes.forEach(function (anime) {
  console.log(`${anime.title} - ${anime.rating}/100`);
});
*/
// // SESI "FOREACH" METHOD END

// // SESI "MAP" METHOD
/*const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkaDouble = angka.map(function (num) {
  return num * 2;
});
*/
/*
const animes = [
  {
    title: "Attack on Titan",
    rating: 90,
  },
  {
    title: "One Piece",
    rating: 89,
  },
  {
    title: "Bleach",
    rating: 82,
  },
  {
    title: "Hunter x Hunter",
    rating: 90,
  },
  {
    title: "Naruto",
    rating: 84,
  },
];

const animeList = animes.map(function (anime) {
  return anime.title.toUpperCase();
});
*/
// // SESI "MAP" METHOD END

// // SESI "ARROW FUNCTION"
/* Function Biasa
function perpangkatan(num) {
  return num * num;
}
*/

/* Function Expression
const hasil = function (num) {
  return num * num;
};
*/

/*Function Arrow
const perpangkatan = (num) => {
  return num * num;
};

const random = () => {
  return Math.floor(Math.random() * 10);
};
*/
// // SESI "ARROW FUNCTION" END

// // SESI RETURN SECARA IMPLISIT DARI "ARROW FUNCTION"
/*
const random = () => Math.floor(Math.random() * 100);

const add = (a, b) => a + b;
*/
// // SESI RETURN SECARA IMPLISIT DARI "ARROW FUNCTION" END

// // SESI "setTimeout" & "setInterval"
/* "setTimeout"
console.log(`Halo...`);
setTimeout(() => {
  console.log(`masih di sana gak?`);
}, 5000);
console.log(`saya pergi ya..`)
*/

/* "setInterval"
const interval = setInterval(() => {
  console.log(Math.floor(Math.random() * 10));
}, 2000);
*/
// // SESI "setTimeout" & "setInterval" END

// // SESI "filter" METHOD
/*
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkaBaru = angka.filter((n) => {
  return n < 5;
});
*/

/*
const animes = [
  {
    title: "Attack on Titan",
    rating: 90,
    year: 2013,
  },
  {
    title: "One Piece",
    rating: 89,
    year: 1999,
  },
  {
    title: "Bleach",
    rating: 82,
    year: 2004,
  },
  {
    title: "Hunter x Hunter",
    rating: 90,
    year: 2011,
  },
  {
    title: "Naruto",
    rating: 84,
    year: 2002,
  },
];
*/

/*
const animeBagus = animes.filter((anime) => anime.rating >= 85);
const animeCukupBagus = animes.filter((anime) => anime.rating < 85);
const animeBaru = animes.filter((anime) => anime.year > 2010);
*/

/* DENGAN DIIKUTI "map"
const judulAnimeBagus = animeBagus.map((anime) => anime.title);
*/

/* DIIKUTI "map" VERSI PANJANG
const judulAnimeBagusPanjang = animes
  .filter((anime) => anime.rating >= 85)
  .map((anime) => anime.title);
*/
// // SESI "filter" METHOD END

// // SESI "every" DAN "some" METHOD
/* "EVERY"
const examScore = [80, 85, 70, 90, 93, 77];
const isGraduate = examScore.every((score) => score >= 75);
*/

/* "SOME"
const animes = [
  {
    title: "Attack on Titan",
    rating: 90,
    year: 2013,
  },
  {
    title: "One Piece",
    rating: 89,
    year: 1999,
  },
  {
    title: "Bleach",
    rating: 82,
    year: 2004,
  },
  {
    title: "Hunter x Hunter",
    rating: 90,
    year: 2011,
  },
  {
    title: "Naruto",
    rating: 84,
    year: 2002,
  },
];

const isAnimeListNew = animes.some((anime) => anime.year > 2020);
*/
// // SESI "every" DAN "some" METHOD END

// // SESI "reduce"
/*
const examScore = [80, 85, 70, 90, 93, 77];
// let total = 0;
// for (let score of examScore) { # INI MENGGUNAKAN FOR
//   total += score
// }

const total = examScore.reduce((total, score) => {
  return total + score;
});
*/

/*
const animes = [
  {
    title: "One Piece",
    rating: 89,
    year: 1999,
  },
  {
    title: "Bleach",
    rating: 82,
    year: 2004,
  },
  {
    title: "Attack on Titan",
    rating: 90,
    year: 2013,
  },
  {
    title: "Hunter x Hunter",
    rating: 90,
    year: 2011,
  },
  {
    title: "Naruto",
    rating: 84,
    year: 2002,
  },
];

const bestAnime = animes.reduce((bestAnime, currentAnime) => {
  if (currentAnime.rating > bestAnime.rating) {
    return currentAnime;
  }
  return bestAnime;
});

const lowAnime = animes.reduce((lowAnime, currentAnime) => {
  if (lowAnime.rating < currentAnime.rating) {
    return lowAnime;
  }
  return currentAnime;
});
*/
// // SESI "reduce" END

// // SESI SCOPE "this" DALAM OBJECT
/*
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};
*/
// // SESI SCOPE "this" DALAM OBJECT END

// // SESI MENGATUR DEFAULT VALUE PADA FUNCTION
/*
function lemparDadu(sisi = 6) {
  return Math.floor(Math.random() * sisi) + 1;
}

function sapa(name = "User", msg = "Selamat Bekerja") {
  console.log(`${name} ${msg}`);
}
function sapa2(name, msg = "Selamat Bekerja") {
  console.log(`${name} ${msg}`);
}
function sapa3(msg = "Selamat Bekerja", name) {
  console.log(`${name} ${msg}`);
}
function sapaUn(msg, name) {
  console.log(`${name} ${msg}`);
}
*/
// // SESI MENGATUR DEFAULT VALUE PADA FUNCTION END

// // SESI MENGUBAH ARRAY/OBJECT MENJADI DERET VALUE ARGUMENT FUNCTION (Spread Operator)
/*
const angka = [1, 2, 3, 4, 5];
console.log(Math.max(...angka)); // PAKE TITIK 3
*/
// // SESI MENGUBAH ARRAY/OBJECT MENJADI DERET VALUE ARGUMENT FUNCTION (Spread Operator) END

// // SESI MENGGABUNGKAN NILAI ARRAY DENGAN ARRAY LAGI
/*
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nama = ["Alex", "Bimo", "Cici", "Blu", "Chiko"];

const campuran = [...angka, 0, "a", "b"];
const campuranBaru = [...angka, ...nama]; // PAKE TITIK TIGA
*/
// // SESI MENGGABUNGKAN NILAI ARRAY DENGAN ARRAY LAGI END

// // SESI MENGGABUNGKAN PROPERTY OBJECT DENGAN OBJECT LAINNYA
/*
const user = {
  nama: "John",
  email: "john@doe.com",
};

const credential = {
  password: "password",
  token: "sjfu123u1h48u",
};

const userBaru = { ...user, id: 123, password: "password" }; // PAKE TITIK TIGA

const userBaru2 = { ...user, ...credential };
*/
// // SESI MENGGABUNGKAN PROPERTY OBJECT DENGAN OBJECT LAINNYA END

// // SESI REST PARAM (MASIH MENGENAI SPREAD OPERATOR [...])
/*
const sumAll = (...nums) => {
  return nums.reduce((total, el) => total + el);
};
*/
/*
const nama = ["Alex", "Bimo", "Cici", "Blu", "Chiko"];

const pemenang = (gold, silver, bronze, ...sisa) => {
  console.log(`Medali emas diraih: ${gold}`);
  console.log(`Medali emas diraih: ${silver}`);
  console.log(`Medali emas diraih: ${bronze}`);
  console.log(`Peserta Lainnya: ${sisa}`);
};
*/
// // SESI REST PARAM (MASIH MENGENAI SPREAD OPERATOR [...]) END

// // SESI BONGKAR (DESTRUCTING) ELEMENT ARRAY KE MASING2 VARIABEL
/*
const nama = ["Alex", "Bimo", "Cici", "Blu", "Chiko"];

const [gold, silver, bronze, ...Peserta] = nama;
*/
// // SESI BONGKAR (DESTRUCTING) ELEMENT ARRAY KE MASING2 VARIABEL END

// // SESI BONGKAR (DESTRUCTING) PROPERTI OBJECT KE MASING2 VARIABEL
/*
const user = {
  name: "John",
  email: "john@doe.com",
};

const { name: nama, email, phone = "098345874778333" } = user;
*/
// // SESI BONGKAR (DESTRUCTING) PROPERTI OBJECT KE MASING2 VARIABEL END

// SESI BONGKAR (DESTRUCTING) PROPERTI OBJECT DI DALAM FUNCTION
/*
const user = {
  name: "John",
  email: "john@doe.com",
  role: "Admin",
};

const userAndRole = ({ name, role }) => {
  return `${name} ${role}`;
};
*/

/*
const animes = [
  {
    title: "One Piece",
    rating: 89,
    year: 1999,
  },
  {
    title: "Bleach",
    rating: 82,
    year: 2004,
  },
  {
    title: "Attack on Titan",
    rating: 90,
    year: 2013,
  },
  {
    title: "Hunter x Hunter",
    rating: 90,
    year: 2011,
  },
  {
    title: "Naruto",
    rating: 84,
    year: 2002,
  },
];

const anime = animes.map(({ title, year, rating }) => {
  return `${title} (${year}) rating ${rating}`;
});
*/
// SESI BONGKAR (DESTRUCTING) PROPERTI OBJECT DI DALAM FUNCTION END