// ### Greedy Goblin

// You are writing an AI for a 2D map game. Specifically, you are writing the AI for a `Goblin`, who only cares about one thing: *money!* Your goblin is somewhere in a 2D grid, and there are coins strewn about over the map. Because goblins are not very smart, your goblin should seek out the closest coin, go grab it, then move on to the next closest coin.

// Given the position of all the coins and your current position, calculate the "optimal" path for your goblin, as described above. The closest coin to your goblin should be evaluated in terms of Manhattan distance. That is, the number of spaces the goblin will need to move up, down, left, or right to reach the coin.

// For example, given the following input:

// `Goblin: [0, 2]
// Coins: [[0, 4], [1, 0], [2, 0], [3, 2], [2, 4]]`

// represented by the below map, where your goblin is "G", coins are "o", and empty spaces are ".":

// ```
// ---------------------
// | . | . | G | . | o |
// ---------------------
// | o | . | . | . | . |
// ---------------------
// | o | . | . | . | o |
// ---------------------
// | . | . | o | . | . |
// ---------------------
// ```

// you goblin will visit `[0, 4] -> [2, 4] -> [3, 2] -> [2, 0] -> [1, 0]`.

// ## Business Rules/Errata

// - The "optimal" path is not really the shortest total travel distance, but the path to the next closest coin at each point.
// - Because goblins are particularly dim, if at any point there are two coins equally close to the goblin. he will panic, drop all his coins, and run away in terror. You should return an empty list.
// - Goblins cannot move diagonally, only in the four cardinal directions.
// - Your input will consist of a [row, column] index pair as the goblin's starting space and a list of [row, column] pairs as the coin locations.
// - You should return a list of [row, column] index pairs. These should be tuples if your language supports that, otherwise use an array or list of length 2.
// - Indices may be negative.

// ## Examples

// ```
// goblin = [1, 1]
// coins = [[1, 2], [-5, -5], [1, 3]]
// goblin_path(goblin, coins) // [[1, 2], [1, 3], [-5, -5]]

// goblin = [0, 2]
// coins = [[0, 4], [1, 0], [2, 0], [3, 2], [2, 4]]
// goblin_path(goblin, coins) // [[0, 4], [2, 4], [3, 2], [2, 0], [1, 0]]

// goblin = [100, 100]
// coins = [[99, 100], [101, 100], [100, 99], [100, 101]]
// goblin_path(goblin, coins) // []  -- he panicked
// ```


function greedyGoblin(goblin, coins) {

  var foundCoins = []
  var here = goblin
  var more_coins = coins

  while(0 < more_coins.length){

    let min_distance = Number.MAX_VALUE
    let min_index = Number.MAX_VALUE
    let min_count = 1
    for (let i = 0; i < more_coins.length; i++){

      let distance = manhattanDistance(here, more_coins[i])
      if (min_distance == distance){
        min_count += 1
      } else if (min_distance > distance){
        min_distance = distance
        min_index = i
        min_count = 1
      }

    }

    if (1 < min_count) {  // PANIC
      return []
    }
    here = more_coins[min_index]
    foundCoins.push(here)
    more_coins.splice(min_index, 1)
  }
  return foundCoins
}

function manhattanDistance(here, there){
  return Math.abs(here[0]-there[0]) + Math.abs(here[1]-there[1])
}

module.exports = { greedyGoblin };