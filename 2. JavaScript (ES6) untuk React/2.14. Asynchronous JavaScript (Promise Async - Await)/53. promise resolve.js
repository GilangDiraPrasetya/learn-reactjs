const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Rudi');
    }, 2000);
  });
};

console.log('Start...');
getUser().then((userName) => console.log(userName));
console.log('Finish');
