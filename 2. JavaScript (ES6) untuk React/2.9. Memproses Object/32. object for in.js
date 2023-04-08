let mahasiswa = {
  nama: 'Eka',
  umur: 19,
  jurusan: 'Teknik Informatika',
};

for (prop in mahasiswa) {
  console.log(`Nilai ${prop} : ${mahasiswa[prop]}`);
}

// Nilai nama : Eka
// Nilai umur : 19
// Nilai jurusan : Teknik Informatika
