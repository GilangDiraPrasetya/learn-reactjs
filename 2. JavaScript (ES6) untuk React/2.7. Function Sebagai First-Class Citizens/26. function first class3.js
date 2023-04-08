const total = (a, b, cari) => cari(a, b);

console.log(total(5, 10, (x, y) => x + y)); // 15
