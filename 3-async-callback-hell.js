const Dog = require('./dog');

const zaga = new Dog('Zaga');
const booby = new Dog('Booby');
const shoma = new Dog('Shoma');

const zagaResponse = new Promise((resolve, reject) => resolve(zaga.asyncFetchBall('long')));
const boobyResponse = new Promise((resolve, reject) => resolve(booby.asyncFetchBall('short')));
const shomaResponse = new Promise((resolve, reject) => resolve(shoma.asyncFetchBall('long')));

zagaResponse.then(done => {
  console.log(done);
  boobyResponse.then(done => {
    console.log(done);
    shomaResponse.then(done => {
      console.log(done);
    });
  });
});
