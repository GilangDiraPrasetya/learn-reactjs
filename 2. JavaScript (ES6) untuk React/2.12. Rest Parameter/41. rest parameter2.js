function tambah(...args) {
  let total = 0;
  for (let angka of args) {
    total += angka;
  }
  return total;
}

console.log(tambah(1, 2, 3)); // 6
console.log(tambah(3, 5, 7, 9)); // 24
console.log(tambah(5, 10, 15, 20, 25, 30)); // 105
