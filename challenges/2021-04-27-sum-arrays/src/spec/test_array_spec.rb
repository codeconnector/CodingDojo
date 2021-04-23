# frozen_string_literal: true

require './sum_arrays'

RSpec.describe 'sum_arrays' do
  let(:return_value) { sum_array(array) }

  context 'given a one dimension array' do
    let(:array) { [1, 2, 3, 4, 5] }

    it 'returns 15' do
      expect(return_value).to eq(15)
    end
  end

  context 'given a two dimension array' do
    let(:array) { [1, 2, [1, 2, 3], 4, 5] }

    it 'returns 18' do
      expect(return_value).to eq(18)
    end
  end

  context 'givent an n dimension array' do
    let(:array) { [1, [1, 2, [3, 4], 5], [6, 7]] }

    it 'returns 29' do
      expect(return_value).to eq(29)
    end
  end
end
