# frozen_string_literal: true

MAGIC_SQUARE =[[2,7,6],
               [9,5,1],
               [4,3,8]].freeze

def is_winner?(player_moves)
  player_combo = player_moves.combination(3)
  player_combo.any? {|combo| combo.sum == 15}
end

def who_wins(board)
  a_moves = []
  b_moves = []

  board.each.with_index(1) do |move, idx|
    # [0,0]
    row, col = move
    a_moves << MAGIC_SQUARE[row][col] if idx.odd?
    b_moves << MAGIC_SQUARE[row][col] if idx.even?
  end
    return 'Pending' if a_moves.length < 3 
    return 'A' if is_winner?(a_moves)
    return 'B' if is_winner?(b_moves)
    
    board.length == 9 ? 'Draw' : 'Pending'
end
