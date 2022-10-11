const { findThreeLargestNumbers } = require("./solution");

test("Test Case One", () => {
  const input = [141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7];
  const actual = findThreeLargestNumbers(input);
  const expected = [18, 141, 541];
  expect(expected.length).toEqual(actual.length);
  expect(expected.every((num, index) => num === actual[index])).toBe(true);
});

test("Test Case Two", () => {
  const input = [11, -7, 5, -7];
  const actual = findThreeLargestNumbers(input);
  const expected = [-7, 5, 11];
  expect(expected.length).toEqual(actual.length);
  expect(expected.every((num, index) => num === actual[index])).toBe(true);
});

test("Test Case Three", () => {
  const input = [1];
  const actual = findThreeLargestNumbers(input);
  expect(actual).toBeNull();
});

test("Boundary value test for input length", () => {
  const input = [1, 1];
  const actual = findThreeLargestNumbers(input);
  expect(actual).toBeNull();
});

test("Exception test for no input array given", () => {
  const input = null;
  const actual = findThreeLargestNumbers(input);
  expect(actual).toBeNull();
});