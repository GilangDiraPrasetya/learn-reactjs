let mahasiswa = {
  nama: 'Eka',
  umur: 19,
  jurusan: 'Teknik Informatika',
};

console.log(Object.keys(mahasiswa)); // ["nama", "umur", "jurusan"]
console.log(Object.values(mahasiswa)); // ["Eka", 19, "Teknik Informatika"]

console.log(Object.entries(mahasiswa));
// [
// 	 ["nama", "Eka"],
//   ["umur", 19],
// 	 ["jurusan", "Teknik Informatika"]
// ]
