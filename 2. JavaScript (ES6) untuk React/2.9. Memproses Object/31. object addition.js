let mahasiswa = {
  nama: 'Eka',
  umur: 19,
  jurusan: 'Teknik Informatika',
  getInfo() {
    return `${this.nama} (${this.umur} tahun) dari jurusan ${this.jurusan}`;
  },
};

// console.log(mahasiswa);
// {nama: "Eka", umur: "19", jurusan: "Teknik Informatika", getInfo: ƒ}

mahasiswa.umur = 20;
mahasiswa.tempatLahir = 'Jakarta';

console.log(mahasiswa);
// {nama: "Eka", umur: 20, jurusan: "Teknik Informatika", tempatLahir: "Jakarta", getInfo: ƒ}
