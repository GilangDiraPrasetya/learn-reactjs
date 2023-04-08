const input = '100';
const result = `<div class="${Number.isInteger(input) ? 'valid' : 'invalid'}">`;

console.log(result); // <div class="invalid">
