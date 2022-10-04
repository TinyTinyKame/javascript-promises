const Dog = require('./dog');

const zaga = new Dog('Zaga');
const booby = new Dog('Booby');
const kikoo = new Dog('Kikoo');

async function main() {
  const zagaResponse = new Promise((resolve, reject) => resolve(zaga.asyncFetchBall('long')));
  const boobyResponse = new Promise((resolve, reject) => resolve(booby.asyncFetchBall('short')));
  const kikooResponse = new Promise((resolve, reject) => resolve(kikoo.asyncFetchBall('long')));

  console.log(await zagaResponse);
  console.log(await boobyResponse);
  console.log(await kikooResponse);
}

main();
