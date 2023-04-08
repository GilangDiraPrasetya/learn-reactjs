const mahasiswas = [
  {
    nama: 'Eka',
    umur: 19,
    jurusan: 'Teknik Informatika',
  },
  {
    nama: 'Lisa',
    umur: 18,
    jurusan: 'Sistem Informasi',
  },
  {
    nama: 'Rudi',
    umur: 19,
    jurusan: 'Teknik Elektro',
  },
];

const prosesMahasiswa = (mahasiswa) => `<p>${mahasiswa.nama} (${mahasiswa.umur}), ${mahasiswa.jurusan}</p>`;

const formatMahasiswas = mahasiswas.map(prosesMahasiswa);

console.log(formatMahasiswas);

// [
//   "<p>Eka (19), Teknik Informatika</p>",
//   "<p>Lisa (18), Sistem Informasi</p>",
//   "<p>Rudi (19), Teknik Elektro</p>"
// ]
