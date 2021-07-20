# # Single and Ready to Mingle
# 
# Given an array of integers in which two elements appear exactly once and all other
# elements appear exactly twice, find the two elements that appear only once.
# 
# ## Business Rules/Errata
# 
# - You can assume that the input will **always** include at least two and exactly two
#   elements that appear only once.
# - You may not assume that the list will be sorted ahead of time.
# - Extra Challenge: Can you complete this puzzle in linear time and constant space?
# - Extra Extra Challenge: Can you make your solution generic over other input types?
# 
# ## Examples
# 
# ```
# input = [2, 4, 6, 8, 10, 2, 6, 10];
# find_singles(input)  // [4, 8]
# ```
# ```
# input = [1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9];
# find_singles(input)  // [3, 8]
# ```

require 'set'

def find_singles(numbers)
  if !numbers.all? {|x| x.is_a?(Integer) } or !numbers.kind_of?(Array)
    raise "Tried to pass something besides an array of numbers"
  end

  number_set = Set.new()
  numbers.each do |item|
    if number_set.include? item
      number_set.delete(item)
    else
      number_set.add(item)
    end
  end
  number_set.to_a
end

puts find_singles([2, 4, 6, 8, 10, 2, 6, 10]).to_s # [4, 8]

puts find_singles([1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9]).to_s # [3, 8]
