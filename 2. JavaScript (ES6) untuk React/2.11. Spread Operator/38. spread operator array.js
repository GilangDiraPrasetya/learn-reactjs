let arr1 = [10, 20, 30];
let arr2 = [100, 200, 300];

let arr3 = [...arr1, ...arr2];
console.log(arr3); // [10, 20, 30, 100, 200, 300]

// let arr3 = [arr1, arr2]
// console.log(arr3);   // [ [10, 20, 30], [100, 200, 300] ]

let arr4 = [...arr1, 40, 50];
console.log(arr4); // [10, 20, 30, 40, 50]

let arr5 = [30, 40, 50, ...arr1];
console.log(arr5); // [30, 40, 50, 10, 20, 30]
