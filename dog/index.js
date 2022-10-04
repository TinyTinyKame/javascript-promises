function wait(ms) {
  var start = Date.now(),
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
      case 'short':
        return this.returnBall();
      case 'long':
        wait(2000);
        return this.returnBall();
    }
  }

  asyncFetchBall(distance = 'short') {
    switch(distance) {
      case 'short':
        return new Promise((resolve, reject) => {
          resolve(this.returnBall());
        });
      case 'long':
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(this.returnBall()), 2000);
        })
    }
  }

  returnBall() {
    return `${this.name} has returned the ball`;
  }
}

module.exports = Dog;
