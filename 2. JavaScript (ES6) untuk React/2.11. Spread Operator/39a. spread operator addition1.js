let mahasiswa = {
  nama: 'Eka',
  umur: 19,
  jurusan: 'Teknik Informatika',
};

let umur = 20;
let tempatLahir = 'Jakarta';

let mahasiswa1 = {
  ...mahasiswa,
  umur: umur,
  tempatLahir: tempatLahir,
};

console.log(mahasiswa1);
// {nama: "Eka", umur: 20, jurusan: "Teknik Informatika", tempatLahir: "Jakarta"}
