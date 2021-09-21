# frozen_string_literal: true

POSSIBLE_ROWS = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
].freeze

def who_wins(board)
  board_state = []
  
  # populate the board state
  board.each.with_index(1) do |move, index|
    row, col = move
    board_state[row*3+col+1] = index.odd? ? 'A' : 'B'
  end

  # check for winning rows
  POSSIBLE_ROWS.each do |row|
    i, j, k = row
    if (board_state[i] == board_state[j] and
        board_state[i] == board_state[k])          
          if board_state[i] != nil
            return board_state[i]
          end
    end
  end
  
  # check for draw or in process game
  return board.length() == 9 ? 'Draw' : 'Pending'
end
