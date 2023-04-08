const generateRandom = (start = 1, end = 10) => Math.floor(Math.random() * (end - start + 1)) + start;

console.log(generateRandom()); //  8
console.log(generateRandom(5)); //  6
console.log(generateRandom(10, 20)); // 17
