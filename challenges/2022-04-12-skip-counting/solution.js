// # Skip Counting
// 
// The neighborhood children who normally laugh at you when you go jogging
// have invited you to come play a game with them. The game is played by
// laying out a circle of numbered tiles in a circle according to the
// following rules:
// 
// - The game starts with the `0` tile at the top of the circle. This is now
//   the 'current' tile. This tile is placed by the first player, player `0`.
// - Each round, the next player skips next tile clockwise from the current
//   tile, and places the next numbered tile.
// - The game continues until all the tiles have been laid.
// - Tile positions are labeled, starting with the zero in the `0`th place,
//   then increasing the number of the position clockwise around the circle.
// - The score is calculated by having each player multiply the number on each
//   tile they laid with the number of the position the tile was laid in, and
//   adding them up.
// 
// Because you're so smart (and these kids obviously aren't), you quickly
// realize that this game is entirely deterministic and that, given the number
// of players and the number of tiles, you can always know which player will
// win. You agree to play this game to show these kids what all your hours in
// front of a computer have earned you (even if you do "run like a walrus").
// 
// ## Business Rules/Errata
// 
// - You will be given the number of players and the number of tiles in the
//   game, as positive integers.
// - You should return the _score_ of the winning player, i.e. the highest
//   score achieved at the end of the game.

function gameWinningScore(players, tiles) {
  if (tiles == 0) { return 0 }
  let circle = []

  // Fill up the circle with tiles
  for (let i = 0; i < tiles; i++) {
    circle.length && circle.push(circle.shift())
    circle.push({tile: i, player: i % players})
  }

  // Shift the `0` tile to the beginning of `circle`
  while (circle[0].tile > 0) { circle.push(circle.shift()) }

  // Calculate player scores
  let scores = new Array(players).fill(0)
  for (let i = 0; i < circle.length; i++) {
    const {tile, player} = circle[i]
    scores[player] += tile * i
  }

  // Return maximum score
  return Math.max.apply(null, scores)
}

console.log(gameWinningScore(100, 5000))


module.exports = { gameWinningScore };
