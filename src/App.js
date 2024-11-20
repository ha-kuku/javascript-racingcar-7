import { INPUT_MESSAGE } from './Constants.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  getCarName = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.carName);
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
