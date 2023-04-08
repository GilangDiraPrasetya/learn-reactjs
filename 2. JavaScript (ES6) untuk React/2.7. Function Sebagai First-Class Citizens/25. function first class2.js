const total = (a, b, cari) => cari(a, b);
const tambah = (x, y) => x + y;

console.log( total(5,10,tambah) )  // 15
