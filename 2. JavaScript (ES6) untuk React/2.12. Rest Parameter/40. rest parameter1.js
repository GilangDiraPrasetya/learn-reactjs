function foo(...args) {
  return args;
}

console.log(foo(1, 2, 3)); // [1, 2, 3]
console.log(foo(3, 5, 7, 9)); // [3, 5, 7, 9]
console.log(foo(5, 10, 15, 20, 25, 30)); // [5, 10, 15, 20, 25, 30]
