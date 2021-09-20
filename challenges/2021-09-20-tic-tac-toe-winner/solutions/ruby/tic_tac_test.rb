# frozen_string_literal: true

require 'minitest/autorun'
require './mob'

describe 'who_wins' do
  it 'returns the winner of board1' do
    board1 = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]

    _(who_wins(board1)).must_equal 'A'
  end

  it 'returns the winner for board2' do
    board2 = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]

    _(who_wins(board2)).must_equal 'B'
  end

  it "returns 'Draw' for board3" do
    board3 = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]

    _(who_wins(board3)).must_equal 'Draw'
  end

  it "returns 'Pending' for board4" do
    board4 = [[0, 0], [1, 1]]

    _(who_wins(board4)).must_equal 'Pending'
  end
end
