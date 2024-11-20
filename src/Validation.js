class Validation {
  static validateInputBlank(input) {
    if (input === '' || input === null) {
      throw new Error('[ERROR] 입력이 공백입니다.');
    }
  }

  static validateNameLength(input) {
    if (input.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 최대 5자입니다.');
    }
  }
}

export default Validation;
