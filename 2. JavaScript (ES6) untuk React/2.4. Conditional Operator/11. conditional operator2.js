const input = '100';

const result1 = Number.isInteger(input) ? 'valid' : 'invalid';
console.log(result1); // invalid

const result2 = typeof input === 'string' ? 'valid' : 'invalid';
console.log(result2); // valid
