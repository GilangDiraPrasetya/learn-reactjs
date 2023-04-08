const dataMahasiswa = () => {
  return { nama: 'Eka', umur: 19, jurusan: 'Teknik Informatika' };
};

let { nama: namaMahasiswa, umur: umurMahasiswa } = dataMahasiswa();

console.log(namaMahasiswa); // Eka
console.log(umurMahasiswa); // 19
