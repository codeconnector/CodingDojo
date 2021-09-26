function ticTacToeWinner(arr) {
  const L = arr.length;
  if (L < 5) return "Pending"; //If there are not enough squares for a win to be possible, return 'Pending'

  const squaresA = [],
        squaresB = [];

  for (let i = 0; i < L; i++) {
    squaresA.push(arr[i]);
    i++;
    if (i < L) squaresB.push(arr[i]);
  }//separate the two players' squares into two arrays
  
  return isWinner(squaresA) && "A" || isWinner(squaresB) && "B" || L === 9 && "Draw" || "Pending"; //evaluate the results and see if the isWinner function finds a winner. If there is no winner and the board is full, return 'Draw'. Otherwise, return 'Pending'
}

function isWinner(subArr) {
  for (i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      if (subArr.filter(square => square[j] === i).length === 3) return true;
    }  
  }//check for horizontal and vertical wins by seeing if a player has three squares with the same number in the 0 position or the same number in the 1 position.

  return subArr.filter(square => square[0] === square[1]).length === 3 || subArr.filter(square => square[0] + square[1] === 2).length === 3; //check for diagonal wins. A downhill diagnonal win will have three squares where the two coordinates are equal. An uphill diagonal win will have three squares where the two coordinates add up to 2. If neither of these kinds of wins is found, this player did not win, and the function returns false. 
}

console.log(ticTacToeWinner([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]])) //A (\ win)
console.log(ticTacToeWinner([[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]])) //B (/ win)
console.log(ticTacToeWinner([[0, 0], [1, 1], [0, 1], [2, 2], [0, 2], [2, 0]])) //A (- win)
console.log(ticTacToeWinner([[1, 1], [1, 2], [1, 0], [0, 2], [0, 0], [2, 2]])) //B (| win)
console.log(ticTacToeWinner([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1],[0, 2],[2, 2]])); //Draw
console.log(ticTacToeWinner([[0, 0],[1, 1]]));//Pending (not enough squares)
console.log(ticTacToeWinner([[1, 1], [0, 0], [1, 2], [1, 0], [2, 0], [0, 2]])) //Pending (enough squares, but no winner yet)
