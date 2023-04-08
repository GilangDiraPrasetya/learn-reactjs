const getUser = () => {
  setTimeout(() => {
    console.log('processing done!');
    return 'Rudi';
  }, 2000);
};

console.log('Start...'); // Start...
console.log(getUser()); // undefined
console.log('Finish'); // Finish
