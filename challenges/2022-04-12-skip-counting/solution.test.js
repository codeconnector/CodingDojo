const { gameWinningScore } = require('./solution')

test('Return zero when there are no players or tiles', () => {
  let highScore = gameWinningScore(0, 0)
  expect(highScore).toEqual(0);
});

test('Return high score for a one-player game', () => {
  let highScore = gameWinningScore(1, 10)
  expect(highScore).toEqual(211);
});

test('Return high score for a two-player game', () => {
  let highScore = gameWinningScore(2, 15)
  expect(highScore).toEqual(424);
});

test('Return high score for a many-player game', () => {
  let highScore = gameWinningScore(100, 5000)
  expect(highScore).toEqual(314997735);
});
