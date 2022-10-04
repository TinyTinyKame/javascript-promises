function wait(ms) {
  let start = Date.now(),
      now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  fetchBall(distance = 'short') {
    switch(distance) {
      case 'long':
        wait(2000);
        return this.returnBall();
      case 'short':
      default:
        return this.returnBall();
    }
  }

  asyncFetchBall(distance = 'short') {
    switch(distance) {
      case 'long':
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(this.returnBall()), 2000);
        });
      case 'short':
      default:
        return new Promise((resolve, reject) => {
          resolve(this.returnBall());
        });
    }
  }

  returnBall() {
    return `${this.name} has returned the ball`;
  }
}

module.exports = Dog;
