# frozen_string_literal: true

# Potential Palindrome
#
# Given a string, determine whether any permutation of it is a palindrome.
# A palindrome is any string that can be read the same both forwards and
# backwards, such as "kayak".
#
# ## Business Rules/Errata
#
# - You only need to determine whether it is possible to make a palindrome,
# you do not need to return an example of the palindrome.
# - Any input that is not a string should be treated as a string, if possible.
# - An empty string is not a palindrome.
#
# ## Examples
#
# ```bash
# canMakePalindrome("carrace");  // True
# ```
#
# The string `carrace` can be rearranged to make `racecar`, a palindrome.

require 'test/unit/assertions'
include Test::Unit::Assertions

def can_make_palindrome(str)
  str = str.to_s

  return 'An empty string cannot make a palindrome' if str.empty?

  result_hsh = word_count(str)
  odd_values = result_hsh.reject { |_, v| v.even? }.count

  odd_values <= 1 ? "'#{str}' can make a palindrome" : "'#{str}' can not make a palindrome"
end

def word_count(str)
  result_hsh = Hash.new(0)
  str.split('').each do |letter|
    result_hsh[letter] += 1
  end

  result_hsh
end

puts 'Tests:'

puts 'Correctly finds a potential palindrome'
assert_equal("'carrace' can make a palindrome", can_make_palindrome('carrace'))

puts 'Correctly handles numbers submitted instead of strings'
assert_equal("'42131234' can make a palindrome", can_make_palindrome(42_131_234))

puts 'Correctly rules out non-palindrome'
assert_equal("'notapalindrome' can not make a palindrome", can_make_palindrome('notapalindrome'))

puts 'Empty strings are not palindromes'
assert_equal('An empty string cannot make a palindrome', can_make_palindrome(''))
