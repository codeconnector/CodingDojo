const { greedyGoblin } = require('./solution');

test('Solves scenario that includes negative points', () => {
  const goblin = [1, 1];
  const coins = [[1, 2], [-5, -5], [1, 3]];
  const actual = greedyGoblin(goblin, coins);
  const expected = [[1, 2], [1, 3], [-5, -5]];
  const result = expected.length === actual.length && expected.every((pair, i) => pair.every((point, j) => point === actual[i][j]));
  expect(result).toBeTruthy();
});

test('Solves scenario that includes points with mixed signs', () => {
  const goblin = [34, 51];
  const coins = [[1050, -34], [-8809080, 2], [-46788, -67683]];
  const actual = greedyGoblin(goblin, coins);
  const expected = [[1050, -34], [-46788, -67683], [-8809080, 2]];
  const result = expected.length === actual.length && expected.every((pair, i) => pair.every((point, j) => point === actual[i][j]));
  expect(result).toBeTruthy();
});

test('Solves scenario that includes only positive points', () => {
  const goblin = [0, 2];
  const coins = [[0, 4], [1, 0], [2, 0], [3, 2], [2, 4]]
  const actual = greedyGoblin(goblin, coins);
  const expected = [[0, 4], [2, 4], [3, 2], [2, 0], [1, 0]];
  const result = expected.length === actual.length && expected.every((pair, i) => pair.every((point, j) => point === actual[i][j]));
  expect(result).toBeTruthy();
});

test('Solves scenario where goblin panic quits', () => {
  const goblin = [100, 100];
  const coins = [[99, 100], [101, 100], [100, 99], [100, 101]];
  const actual = greedyGoblin(goblin, coins);
  const expected = [];
  const result = expected.length === actual.length;
  expect(result).toBeTruthy();
})
