import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  createRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  stopAndGo() {
    const number = this.createRandomNumber();

    if (number > 3) {
      this.distance += number;
    }
  }
}

export default Car;
