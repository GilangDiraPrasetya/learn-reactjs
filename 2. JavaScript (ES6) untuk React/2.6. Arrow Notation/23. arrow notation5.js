const generateRandom = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

console.log(generateRandom(10, 20)); // 14
