# frozen_string_literal: true

require 'minitest/autorun'
require './mob'

describe 'who_wins' do
  it 'detects a downhill diagonal win' do
    board1 = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]

    _(who_wins(board1)).must_equal 'A'
  end

  it 'detects an uphill diagonal win' do
    board2 = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]

    _(who_wins(board2)).must_equal 'B'
  end

  it "returns 'Draw' when there is no winner" do
    board3 = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]

    _(who_wins(board3)).must_equal 'Draw'
  end

  it "returns 'Pending' when there are not enough moves for a winner to be possible" do
    board4 = [[0, 0], [1, 1]]

    _(who_wins(board4)).must_equal 'Pending'
  end

  it "returns 'Pending' when there is no winner yet, despite there being enough moves for a winner to be possible" do
    board5 = [[1, 1], [0, 0], [1, 2], [1, 0], [2, 0], [0, 2]]

    _(who_wins(board5)).must_equal 'Pending'
  end

  it "detects a horizontal win" do
    board6 = [[1, 1], [0, 0], [1, 0], [0, 1], [1, 2]]

    _(who_wins(board6)).must_equal 'A'
  end

  it "detects a vertical win" do
    board7 = [[1, 1], [0, 2], [0, 0], [2, 2], [1, 0], [1, 2]]

    _(who_wins(board7)).must_equal 'B'
  end

end
