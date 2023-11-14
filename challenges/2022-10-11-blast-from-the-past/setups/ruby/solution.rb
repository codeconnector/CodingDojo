# frozen_string_literal: true

# Find Three Largest Numbers

# Write a function that takes in an array of at least three integers and, without
# sorting the input array, returns a sorted array of the three largest integers in
# the input array. The function should return duplicate integers if necessary.
#
# ## Business Rules/Errata
#
# - The input array should have at least three integers. If it does not, you should
#   return a null value.
# - You may not sort the input array
# - The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]`
#   should return `[10, 10, 12]`
# - Constant space -> you will return a new array of 3 integers, and this will be the
#   only new data structure you create.
# - Linear time -> you should solve this problem by only passing through the array a
#   single time.

require 'rspec/autorun'

def find_three_largest_numbers(num_array)
  # write your solution here
end

describe '#find_three_largest_numbers' do
  let(:return_value) { find_three_largest_numbers(@num_array) }
  it 'returns an array of 3 numbers' do
    @num_array = [1, 2, 3]

    expect(return_value.count).to eq(3)
  end

  it 'returns [18, 141, 541] when given [141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7]' do
    @num_array = [141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7]

    expect(return_value).to eq([18, 141, 541])
  end

  it 'returns [-7, 5, 11] when given [11, -7, 5, -7]' do
    @num_array = [11, -7, 5, -7]

    expect(return_value).to eq([-7, 5, 11])
  end

  it "returns 'nil' when given [1]" do
    @num_array = [1]

    expect(return_value).to be_nil
  end
end
