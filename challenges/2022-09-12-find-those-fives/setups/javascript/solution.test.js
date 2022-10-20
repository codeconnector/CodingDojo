const { findThoseFives } = require("./solution");

test("Test Case One", () => {
  const input1 = 1;
  const input2 = 10;
  const actual = findThoseFives(input1, input2);
  const expected = 1;
  expect(actual).toEqual(expected);
});

test("Test Case Two", () => {
  const input1 = 50;
  const input2 = 60;
  const actual = findThoseFives(input1, input2);
  const expected = 11;
  expect(expected).toEqual(actual);
});

test("Test Case Three", () => {
  const input1 = -6;
  const input2 = 6;
  const actual = findThoseFives(input1, input2);
  const expected = 2;
  expect(expected).toEqual(actual);
});

test("Test Case Four", () => {
  const input1 = -15;
  const input2 = -5;
  const actual = findThoseFives(input1, input2);
  const expected = 2;
  expect(expected).toEqual(actual);
});
