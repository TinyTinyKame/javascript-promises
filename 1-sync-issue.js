const Dog = require('./dog');

const zaga = new Dog('Zaga');
const booby = new Dog('Booby');

console.log(zaga.fetchBall('long'));
console.log(booby.fetchBall('short'));
