const { MaxNonAdjacentSum } = require("./solution");

test("Empty Array returns Zero", () => {
  const arr = [];
  const expected = 0;
  const actual = MaxNonAdjacentSum(arr);
  expect(actual).toEqual(expected);
});

test("Non-Adjacent Sum is Max", () => {
  const arr = [75, 105, 120, 75, 90, 135];
  const expected = 330;
  const actual = MaxNonAdjacentSum(arr);
  expect(actual).toEqual(expected);
});

test("Adjacent Sum is Max", () => {
  const arr = [3, 5, 1, 1];
  const expected = 6;
  const actual = MaxNonAdjacentSum(arr);
  expect(actual).toEqual(expected);
});
