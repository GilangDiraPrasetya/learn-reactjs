const getUser = () => {
  setTimeout(() => 'Rudi', 2000);
};

console.log('Start...'); // Start...
console.log(getUser()); // undefined
console.log('Finish'); // Finish
