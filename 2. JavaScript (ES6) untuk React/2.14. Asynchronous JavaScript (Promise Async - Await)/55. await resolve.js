const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Rudi');
      reject('Something wrong...');
    }, 2000);
  });
};

const tryGetName = async () => {
  let userName = await getUser();
  console.log(userName);
};

console.log('Start...');
tryGetName();
console.log('Finish');
