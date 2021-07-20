# frozen_string_literal: true

require '../mob'

RSpec.describe 'count_paths' do
  let(:return_value) { count_paths(array) }

  context 'given a 3x3 array of all zeros' do
    let(:array) do
      [[0, 0, 0],
       [0, 0, 0],
       [0, 0, 0]]
    end

    it 'returns 6' do
      expect(return_value).to eq(6)
    end
  end

  context 'given a 3x3 array with some 1s' do
    let(:array) do
      [[0, 0, 1],
       [0, 0, 1],
       [1, 0, 0]]
    end

    it 'returns 2' do
      expect(return_value).to eq(2)
    end
  end

  context 'given a 3x3 array with all 1s' do
    let(:array) do
      [[0, 1, 1],
       [1, 1, 1],
       [1, 1, 1]]
    end

    it 'returns 0' do
      expect(return_value).to eq(0)
    end
  end

  context 'given a 4x4 array of all zeros' do
    let(:array) do
      [[0, 0, 0, 0],
       [0, 0, 0, 0],
       [0, 0, 0, 0],
       [0, 0, 0, 0]]
    end

    it 'returns 20' do
      expect(return_value).to eq(20)
    end
  end

  context 'given a 4x4 array of some 1s' do
    let(:array) do
      [[0, 0, 1, 0],
       [0, 0, 0, 0],
       [0, 1, 0, 0],
       [0, 0, 0, 0]]
    end

    it 'returns 7' do
      expect(return_value).to eq(7)
    end
  end
end
