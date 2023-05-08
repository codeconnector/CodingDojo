const { classPhotos } = require('./solution');

test('True with no repeats', () => {
  const red = [7, 5, 3, 1];
  const blue = [6, 8, 2, 4];
  const expected = true;
  const actual = classPhotos(red, blue);
  expect(actual).toEqual(expected);
});

test('False with no repeats', () => {
  const red = [7, 5, 4, 1];
  const blue = [6, 8, 2, 3];
  const expected = false;
  const actual = classPhotos(red, blue);
  expect(actual).toEqual(expected);
});

test('True with red in front row', () => {
  const red = [5, 8, 1, 3, 4];
  const blue = [6, 9, 2, 4, 5];
  const expected = true;
  const actual = classPhotos(red, blue);
  expect(actual).toEqual(expected);
});

test('True with blue in front row', () => {
  const red = [6, 9, 2, 4, 8];
  const blue = [1, 7, 5, 3, 6];
  const expected = true;
  const actual = classPhotos(red, blue);
  expect(actual).toEqual(expected);
});

test('False with blue in front row', () => {
  const red = [6, 9, 3, 3, 8];
  const blue = [3, 3, 2, 5, 6];
  const expected = false;
  const actual = classPhotos(red, blue);
  expect(actual).toEqual(expected);
});

test('False with red in front row', () => {
  const red = [1, 2, 3, 4, 5, 6, 7];
  const blue = [2, 3, 4, 5, 4, 3, 2];
  const expected = false;
  const actual = classPhotos(red, blue);
  expect(actual).toEqual(expected);
});

