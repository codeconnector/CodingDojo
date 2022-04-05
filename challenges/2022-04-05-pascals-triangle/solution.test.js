const { pascalRow } = require('./solution')

test('Returns first row', () => {
  const row = 0;
  const actual = pascalRow(row);
  const expected = [1];
  expect(expected.length).toEqual(actual.length);
  expect(expected.every((num, index) => num === actual[index])).toBeTruthy;
});

test('Returns second row', () => {
  const row = 1;
  const actual = pascalRow(row);
  const expected = [1, 1];
  expect(expected.length).toEqual(actual.length);
  expect(expected.every((num, index) => num === actual[index])).toBeTruthy;
});

test('Returns third row', () => {
  const row = 2;
  const actual = pascalRow(row);
  const expected = [1, 2, 1];
  expect(expected.length).toEqual(actual.length);
  expect(expected.every((num, index) => num === actual[index])).toBeTruthy;
});

test('Returns fourth row', () => {
  const row = 3;
  const actual = pascalRow(row);
  const expected = [1, 3, 3, 1];
  expect(expected.length).toEqual(actual.length);
  expect(expected.every((num, index) => num === actual[index])).toBeTruthy;
});

test('Returns fifth row', () => {
  const row = 4;
  const actual = pascalRow(row);
  const expected = [1, 4, 6, 4, 1];
  expect(expected.length).toEqual(actual.length);
  expect(expected.every((num, index) => num === actual[index])).toBeTruthy;
});

test('Returns eleventh row', () => {
  const row = 10;
  const actual = pascalRow(row);
  const expected = [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1];
  expect(expected.length).toEqual(actual.length);
  expect(expected.every((num, index) => num === actual[index])).toBeTruthy;
});

test('Returns thirty-first row', () => {
  const row = 30;
  const actual = pascalRow(row);
  const expected = [
    1, 30, 435, 4060,
    27405, 142506, 593775, 2035800,
    5852925, 14307150, 30045015, 54627300,
    86493225, 119759850, 145422675, 155117520,
    145422675, 119759850, 86493225, 54627300,
    30045015, 14307150, 5852925, 2035800,
    593775, 142506, 27405, 4060,
    435, 30, 1
  ];
  expect(expected.length).toEqual(actual.length);
  expect(expected.every((num, index) => num === actual[index])).toBeTruthy;
});