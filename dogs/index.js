class Dog {
  constructor(name) {
    this.name = name;
  }

  fetchBall(distance = 'short') {
    switch(distance) {
      case 'short':
        this.returnBall();
        break;
      case 'long':
        setTimeout(() => {
          this.returnBall();
        }, 1000);
        break;
    }
  }

  returnBall() {
    console.log(`${this.name} has returned the ball`);
  }
}

module.exports = Dog;
