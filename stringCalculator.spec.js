const { stringCalculator } = require("./stringCalculator");

describe("String calculator", () => {
  test("빈 문자열 일 경우 0을 반환", () => {
    const result = stringCalculator("");
    expect(result).toBe(0);
  });

  test("하나의 숫자일 경우 그대로 출력", () => {
    const result = stringCalculator("1");
    expect(result).toBe(1);
  });

  test("콤마로 구분된 숫자를 받고 합을 반환", () => {
    const result = stringCalculator("1,2");
    expect(result).toBe(3);
  });

  test("여러개 콤마로 구분된 숫자를 받고 합을 반환", () => {
    const result = stringCalculator("1,2,3");
    expect(result).toBe(6);
  });

  test("뉴라인 구분자도 사용 가능", () => {
    const result = stringCalculator("1\\n2,3");
    expect(result).toBe(6);
  });
});
