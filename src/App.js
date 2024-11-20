import { INPUT_MESSAGE } from './Constants.js';
import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';

class App {
  getCarName = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.carName);
    Validation.validateInputBlank(input);

    const cars = input.split(',').map((el) => {
      Validation.validateNameLength(el);
    });
  };

  async run() {
    try {
      await this.getCarName();
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
