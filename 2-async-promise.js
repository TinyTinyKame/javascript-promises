const Dog = require('./dog');

const zaga = new Dog('Zaga');
const booby = new Dog('Booby');

const zagaResponse = new Promise((resolve, reject) => resolve(zaga.asyncFetchBall('long')));
const boobyResponse = new Promise((resolve, reject) => resolve(booby.asyncFetchBall('short')));

zagaResponse.then(done => console.log(done));
boobyResponse.then(done => console.log(done));
