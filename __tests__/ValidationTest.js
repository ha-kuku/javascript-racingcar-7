import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Racingcar from "../src/model/racingcar.js";
import { ERROR_MESSAGE } from "../src/constants/message.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 이름 입력 유효성 검사", () => {
  test("정상 입력 시 Racingcar 배열 반환", async () => {
    const input = ["haku,haul"];

    const app = new App();
    mockQuestions(input);

    const result = await app.getRacingCarName();

    expect(JSON.stringify(result)).toEqual(
      JSON.stringify([new Racingcar("haku"), new Racingcar("haul")])
    );
  });

  test("자동차 이름 공백 입력 시 오류 발생", async () => {
    const input = [];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.blank
    );
  });

  test("자동차 이름 증복 시 오류 발생", async () => {
    const input = ["haku,haku"];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.carName.invalidOverlap
    );
  });

  test("자동차 이름 5글자 초과 시 오류 발생", async () => {
    const input = ["hakuku,haku"];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.carName.invalidLength
    );
  });

  test("자동차 이름 구분자 , 아닐 시 오류 발생", async () => {
    const input = ["haku.haul"];

    const app = new App();
    mockQuestions(input);

    await expect(async () => await app.getRacingCarName()).rejects.toThrow(
      ERROR_MESSAGE.carName.invalidSeparator
    );
  });
});