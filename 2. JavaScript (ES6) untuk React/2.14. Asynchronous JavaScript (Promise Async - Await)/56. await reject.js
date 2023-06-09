const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Rudi");
      reject('Something wrong...');
    }, 2000);
  });
};

const tryGetName = async () => {
  try {
    let userName = await getUser();
    console.log(userName);
  } catch (error) {
    console.log(error);
  }
};

console.log('Start...');
tryGetName();
console.log('Finish');
