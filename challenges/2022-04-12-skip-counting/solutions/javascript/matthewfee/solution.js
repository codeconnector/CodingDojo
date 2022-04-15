const skipCounting = (playerCount, tileCount) => {
  if (tileCount === 0) {
    return 0
  }
  // generate the board state

  let currentTile = 0
  let tiles = []
  let currentPlayer = 0

  while (currentTile < tileCount) {
    let firstValue = tiles[0]

    if (tiles.length >= 1) {
      tiles.shift()
      tiles.push(firstValue)
    }

    tiles.push([currentTile, currentPlayer])

    currentTile++
    currentPlayer++

    //return to first player at end of last player's turn

    if (currentPlayer >= playerCount) {
      currentPlayer = 0
    }
  }

  //rotate tiles if needed

  while (tiles[0][0] !== 0 || tiles[0][1] !== 0) {
    tiles.push(tiles[0])
    tiles.shift()
  }

  // calculate score

  let playerScores = new Array(playerCount).fill(0)

  for (let i = 0; i < tiles.length; i++) {
    let value = tiles[i][0]
    let player = tiles[i][1]
    let score = i * value

    playerScores[player] += score
  }

  const maxScore = playerScores.reduce((a, b) => {
    return Math.max(a, b)
  })

  return maxScore
}
