const { longestPeak } = require('./solution');

test('empty array returns 0', () => {
  const input = [];
  const actual = longestPeak(input);
  const expected = 0;
  expect(actual).toEqual(expected);
});

test('all decreasing', () => {
  const input = [5, 4, 3, 2, 1];
  const actual = longestPeak(input);
  const expected = 0;
  expect(actual).toEqual(expected);
});

test('all increasing', () => {
  const input = [1, 2, 3, 4, 5];
  const actual = longestPeak(input);
  const expected = 0;
  expect(actual).toEqual(expected);
});

test('valley (all decreasing followed by all increasing)', () => {
  const input = [5, 4, 3, 2, 1, 2, 10, 12];
  const actual = longestPeak(input);
  const expected = 0;
  expect(actual).toEqual(expected);
});

test('normal peak', () => {
  const input = [1, 3, 2];
  const actual = longestPeak(input);
  const expected = 3;
  expect(actual).toEqual(expected);
});

test('peaks on penultimate number', () => {
  const input = [1, 2, 3, 4, 5, 1];
  const actual = longestPeak(input);
  const expected = 6;
  expect(actual).toEqual(expected);
});

test('starts with plateau', () => {
  const input = [2, 2, 3, 2];
  const actual = longestPeak(input);
  const expected = 3;
  expect(actual).toEqual(expected);
});

test('ends with plateau', () => {
  const input = [1, 2, 3, 2, 1, 1];
  const actual = longestPeak(input);
  const expected = 5;
  expect(actual).toEqual(expected);
});

test('plateau at summit returns zero', () => {
  const input = [1, 2, 3, 3, 2, 1];
  const actual = longestPeak(input);
  const expected = 0;
  expect(actual).toEqual(expected);
});

test('multiple peaks, valleys, and plateaus', () => {
  const input = [1, 1, 1, 2, 3, 10, 12, -3, 2, 3, 45, 800, 99, 98, 0, -1, 2, 3, 4, 5, 0, -1];
  const actual = longestPeak(input);
  const expected = 9;
  expect(actual).toEqual(expected);
});





