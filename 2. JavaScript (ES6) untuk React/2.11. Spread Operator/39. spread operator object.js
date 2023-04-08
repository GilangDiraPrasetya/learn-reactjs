let mahasiswa = {
  nama: 'Eka',
  umur: 19,
  jurusan: 'Teknik Informatika',
};

let mahasiswa1 = {
  ...mahasiswa,
  umur: 20,
  tempatLahir: 'Jakarta',
};

console.log(mahasiswa1);
// {nama: "Eka", umur: 20, jurusan: "Teknik Informatika", tempatLahir: "Jakarta"}
