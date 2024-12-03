import { INPUT_MESSAGE } from './Constants.js';
import { Console } from '@woowacourse/mission-utils';
import { validateInputBlank, validateNameLength, validatePlayCount } from './Validation.js';

class App {
  async getCarName() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.carName);
    validateInputBlank(input);

    const carNames = input.split(',').map((name) => {
      validateNameLength(name);
      return name;
    });

    return carNames;
  }

  async getPlayCount() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.playCount);
    validateInputBlank(input);
    validatePlayCount(input);

    return Number(input);
  }

  async run() {
    try {
      await this.getCarName();
      await this.getPlayCount();
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
