const { searchSortedMatrix } = require('./solution');

test('detect number in first quadrant', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];
  const target = 19;
  const expected = [1, 2];
  const actual = searchSortedMatrix(matrix, target);
  expect(actual).toEqual(expected);
});


test('detect number in second quadrant', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];
  const target = 32;
  const expected = [1, 4];
  const actual = searchSortedMatrix(matrix, target);
  expect(actual).toEqual(expected);
});

test('detect number in third quadrant', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];
  const target = 41;
  const expected = [3, 1];
  const actual = searchSortedMatrix(matrix, target);
  expect(actual).toEqual(expected);
});

test('detect number in fourth quadrant', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];
  const target = 44;
  const expected = [3, 3];
  const actual = searchSortedMatrix(matrix, target);
  expect(actual).toEqual(expected);
});


test('detect number in bottom left corner', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];
  const target = 99;
  const expected = [4, 0];
  const actual = searchSortedMatrix(matrix, target);
  expect(actual).toEqual(expected);
});

test('detect number in top left corner', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];
  const target = 1;
  const expected = [0, 0];
  const actual = searchSortedMatrix(matrix, target);
  expect(actual).toEqual(expected);
});

test('detect number in bottom right corner', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];
  const target = 1004;
  const expected = [4, 5];
  const actual = searchSortedMatrix(matrix, target);
  expect(actual).toEqual(expected);
});

test('detect that number is not in the matrix when it would fall within a row', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];
  const target = 43;
  const expected = [-1, -1];
  const actual = searchSortedMatrix(matrix, target);
  expect(actual).toEqual(expected);
});

test('detect that number is not in the matrix when it would fall between rows', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 16],
    [2, 5, 19, 31, 32, 34],
    [3, 8, 24, 33, 35, 36],
    [40, 41, 42, 44, 45, 52],
    [99, 100, 103, 106, 128, 145],
  ];
  const target = 76;
  const expected = [-1, -1];
  const actual = searchSortedMatrix(matrix, target);
  expect(actual).toEqual(expected);
});


const bigMatrix = []

for (let i = 0; i < 1000000; i++) {
  const row = []
  for (let j = 0; j < 1000; j++) {
    row.push(i)
    i++
  }
  i--
  bigMatrix.push(row)
}

test('detect number in big matrix', () => {
  const target = 839105;
  const expected = [839, 105];
  const actual = searchSortedMatrix(bigMatrix, target);
  expect(actual).toEqual(expected);
});

test('target number is smaller than all numbers in big matrix', () => {
  const target = -1;
  const expected = [-1, -1];
  const actual = searchSortedMatrix(bigMatrix, target);
  expect(actual).toEqual(expected);
});

test('target number is larger than all numbers in big matrix', () => {
  const target = 1000000;
  const expected = [-1, -1];
  const actual = searchSortedMatrix(bigMatrix, target);
  expect(actual).toEqual(expected);
});

