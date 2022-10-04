const Dog = require('./dog');

async function main() {
  const zaga = new Dog('Zaga');
  const booby = new Dog('Booby');
  const shoma = new Dog('Shoma');

  const zagaResponse = new Promise((resolve, reject) => resolve(zaga.asyncFetchBall('long')));
  const boobyResponse = new Promise((resolve, reject) => resolve(booby.asyncFetchBall('short')));
  const shomaResponse = new Promise((resolve, reject) => resolve(shoma.asyncFetchBall('long')));

  console.log(await zagaResponse);
  console.log(await boobyResponse);
  console.log(await shomaResponse);
}

main();
