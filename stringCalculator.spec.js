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

  test("두자리 숫자가 포함된 여러개 콤마로 구분된 숫자를 받고 합을 반환", () => {
    const result = stringCalculator("1,2,3,4,5,6,7,8,9,10");
    expect(result).toBe(55);
  });

  test("뉴라인 구분자도 사용 가능1", () => {
    const result = stringCalculator("1,\\n");
    expect(result).toBe(1);
  });

  test("뉴라인 구분자도 사용 가능2", () => {
    const result = stringCalculator("1\\n2,3");
    expect(result).toBe(6);
  });
  
  test("커스텀 구분자를 지원", () => {
    const result = stringCalculator("//[;]\n1;2");
    expect(result).toBe(3);
  });

  test("커스텀 구분자를 지원2", () => {
    const result = stringCalculator("//[@@]\n1@@2@@3");
    expect(result).toBe(6);
  });

  test("음수는 지원 x", () => {
    expect(() => stringCalculator("1,-2,-3")).toThrow();
    expect(() => stringCalculator("1,-2,-3")).toThrowError("음수는 지원하지 않습니다.(-2,-3)");
  });

  test("1000보다 큰 숫자는 덧셈x", () => {
    const result = stringCalculator("1,3,10001");
    expect(result).toBe(4);
  });
});
