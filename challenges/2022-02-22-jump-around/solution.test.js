const { jumpAround } = require('./solution');

test('returns zero when input is zero', () => {
  const num = 0;
  const actual = jumpAround(num);
  const expected = 0;
  expect(actual).toEqual(expected);
});

test('returns one when input is one', () => {
  const num = 1;
  const actual = jumpAround(num);
  const expected = 1;
  expect(actual).toEqual(expected);
});

test('returns correct number of jumps when one jump is backward', () => {
  const num = 2;
  const actual = jumpAround(num);
  const expected = 3;
  expect(actual).toEqual(expected);
});

test('returns correct number of jumps when input is negative', () => {
  const num = -2;
  const actual = jumpAround(num);
  const expected = 3;
  expect(actual).toEqual(expected);
});

test('returns correct number of jumps when more than one jump is backward', () => {
  const num = 175;
  const actual = jumpAround(num);
  const expected = 21;
  expect(actual).toEqual(expected);
});

test('returns correct number of jumps when all jumps are forward', () => {
  const num = -154290;
  const actual = jumpAround(num);
  const expected = 555;
  expect(actual).toEqual(expected);
});