const tambah = (a, b, ...args) => {
  let total = 0;
  for (const angka of args) {
    total += angka;
  }
  return total;
};

console.log(tambah(3, 5, 7, 9)); // 16
