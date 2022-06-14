const findSingles = require('./solution');

test('Finds the singles in [2, 4, 6, 8, 10, 2, 6, 10]', () => {
  var input = [2, 4, 6, 8, 10, 2, 6, 10];
  expect(findSingles(input)).toEqual([4, 8]);
});

test('Finds the singles in [1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9]', () => {
  var input = [1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9];
  expect(findSingles(input)).toEqual([3, 8]);
});
