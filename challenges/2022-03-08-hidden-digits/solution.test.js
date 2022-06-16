const { hiddenDigits } = require('./solution');

test('returns same time when there are no hidden digits', () => {
  const time = '00:00';
  const actual = hiddenDigits(time);
  const expected = '00:00';
  expect(actual).toEqual(expected);
});

test('returns latest possible time when all digits are hidden', () => {
  const time = '??:??';
  const actual = hiddenDigits(time);
  const expected = '23:59';
  expect(actual).toEqual(expected);
});

test('makes second hours digit 3 when first hours digit is 2', () => {
  const time = '2?:31';
  const actual = hiddenDigits(time);
  const expected = '23:31';
  expect(actual).toEqual(expected);
});

test('makes second hours digit 9 when first hours digit is 1', () => {
  const time = '1?:22';
  const actual = hiddenDigits(time);
  const expected = '19:22';
  expect(actual).toEqual(expected);
});

test('makes first hours digit 2 when second hours digit is 3', () => {
  const time = '?3:05';
  const actual = hiddenDigits(time);
  const expected = '23:05';
  expect(actual).toEqual(expected);
});

test('makes first hours digit 1 when second hours digit is 8', () => {
  const time = '?8:05';
  const actual = hiddenDigits(time);
  const expected = '18:05';
  expect(actual).toEqual(expected);
});

test('makes first minutes digit 5 when hidden', () => {
  const time = '23:?0';
  const actual = hiddenDigits(time);
  const expected = '23:50';
  expect(actual).toEqual(expected);
});

test('makes second minutes digit 9 when hidden', () => {
  const time = '09:3?';
  const actual = hiddenDigits(time);
  const expected = '09:39';
  expect(actual).toEqual(expected);
});

test('handles hidden digits on both sides of :, example 1', () => {
  const time = '2?:?0';
  const actual = hiddenDigits(time);
  const expected = '23:50';
  expect(actual).toEqual(expected);
});

test('handles hidden digits on both sides of :, example 2', () => {
  const time = '0?:3?';
  const actual = hiddenDigits(time);
  const expected = '09:39';
  expect(actual).toEqual(expected);
});

test('handles hidden digits on both sides of :, example 3', () => {
  const time = '?7:?1';
  const actual = hiddenDigits(time);
  const expected = '17:51';
  expect(actual).toEqual(expected);
});
