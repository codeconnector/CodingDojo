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
    state = []
    
    # populate the board state
    board.each.with_index(1) do |move, index|
      row, col = move
      state[row*3+col+1] = index.odd? ? 'A' : 'B'
    end
  
    # check for winning rows
    POSSIBLE_ROWS.each do |row|
      i, j, k = row
      if (state[i] == state[j] && state[i] == state[k])
        return state[i] unless state[i].nil?
      end
    end
    
    # check for draw or in process game
    return board.length() == 9 ? 'Draw' : 'Pending'
  end