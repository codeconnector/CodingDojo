const { classPhotos } = require('./solution');

test('Max water two equal bars', () => {
  const barHeights = [5, 5];
  const expected = 5;
  const actual = maximumWater(barHeights);
  expect(actual).toEqual(expected);
});

test('Max water two unequal bars', () => {
  const barHeights = [5, 10];
  const expected = 5;
  const actual = maximumWater(barHeights);
  expect(actual).toEqual(expected);
});

test('Max water three bars, low middle', () => {
  const barHeights = [5, 3, 10];
  const expected = 10;
  const actual = maximumWater(barHeights);
  expect(actual).toEqual(expected);
});

test('Max water three bars, low left', () => {
  const barHeights = [3, 5, 10];
  const expected = 5;
  const actual = maximumWater(barHeights);
  expect(actual).toEqual(expected);
});

test('Max water three bars, low right', () => {
  const barHeights = [10, 5, 3];
  const expected = 5;
  const actual = maximumWater(barHeights);
  expect(actual).toEqual(expected);
});

test('Max water many bars, high middle', () => {
  const barHeights = [1, 2, 8, 8, 2, 1];
  const expected = 8;
  const actual = maximumWater(barHeights);
  expect(actual).toEqual(expected);
});

test('Max water many bars, wide middle', () => {
  const barHeights = [1, 2, 2, 8, 8, 2, 2, 1];
  const expected = 10;
  const actual = maximumWater(barHeights);
  expect(actual).toEqual(expected);
});

test('Max water many bars, mixed heights', () => {
  const barHeights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  const expected = 49;
  const actual = maximumWater(barHeights);
  expect(actual).toEqual(expected);
});
