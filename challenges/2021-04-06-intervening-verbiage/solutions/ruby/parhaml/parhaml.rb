# frozen_string_literal: true

require 'test/unit/assertions'
include Test::Unit::Assertions


# Given the sentence:
#   There was an old lady who lived in an outhouse
def count_words_between(start, stop, sentence)
  # partition will return ["There was an old ", "lady", " who lived in an outhouse"]
  sentence_after_start = sentence.partition(start).last # the last value being " who lived in an outhouse"

  # partition will return [" who lived in an ", "outhouse", ""]
  sentence_before_stop = sentence_after_start.partition(stop).first # the first value being " who lived in an "

  # split will return ["who", "lived", "in", "an"]
  sentence_before_stop.split(' ').count # the count of these values is the # of words between the start and stop
end

# TESTS
sentence = 'There was an old lady who lived in an outhouse'

start = 'lady'
stop = 'outhouse'

assert_equal(4, count_words_between(start, stop, sentence))

start = 'an'
stop = 'outhouse'
assert_equal(6, count_words_between(start, stop, sentence))
