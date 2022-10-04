const Dog = require('./dog');

const zaga = new Dog('Zaga');
const booby = new Dog('Booby');
const kikoo = new Dog('Kikoo');

const zagaResponse = new Promise((resolve, reject) => resolve(zaga.asyncFetchBall('long')));
const boobyResponse = new Promise((resolve, reject) => resolve(booby.asyncFetchBall('short')));
const kikooResponse = new Promise((resolve, reject) => resolve(kikoo.asyncFetchBall('long')));

zagaResponse.then(done => {
  console.log(done);
  boobyResponse.then(done => {
    console.log(done);
    kikooResponse.then(done => {
      console.log(done);
    });
  });
});
