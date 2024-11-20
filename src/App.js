import { INPUT_MESSAGE } from './Constants.js';
import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';

class App {
  getCarName = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.carName);
    Validation.validateInputBlank(input);

    const carNames = input.split(',').map((el) => {
      Validation.validateNameLength(el);
      return el;
    });

    return carNames;
  };

  getPlayCount = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.playCount);
    Validation.validateInputBlank(input);
    Validation.validatePlayCount(input);
  };

  async run() {
    try {
      const carNames = await this.getCarName();
      await this.getPlayCount();
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
