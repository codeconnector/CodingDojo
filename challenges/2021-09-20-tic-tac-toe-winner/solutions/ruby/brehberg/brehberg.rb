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
    if (board_state[row[0]] == board_state[row[1]] and
        board_state[row[0]] == board_state[row[2]])          
          if board_state[row[0]] != nil
            return board_state[row[0]]
          end
    end
  end
  
  # check for draw or in process game
  return board.length() == 9 ? 'Draw' : 'Pending'
end
