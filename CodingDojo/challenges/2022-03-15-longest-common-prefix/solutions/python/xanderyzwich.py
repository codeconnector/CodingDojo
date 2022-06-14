"""
Longest Common Prefix
Given a list of strings, return a string containing the longest prefix in common amongst all the provided strings.

Business Rules/Errata
Your input will be a list of strings, and will contain at least one string.
Each string will contain one or more characters.
Your function should return a string.
In cases where no common prefix exists, return an empty string.
"""
from unittest import TestCase


def longest_prefix_of_two(word1, word2):
    length = min(len(word1), len(word2))
    common = ''
    for i in range(length):
        if word1[i] == word2[i]:
            common += word1[i]
        else:
            break
    return common


def longest_common_prefix(word_list):
    if 0 == len(word_list):
        return ''
    if 1 == len(word_list):
        return word_list[0]
    prefix = word_list[0]
    for word in word_list[1:]:
        prefix = longest_prefix_of_two(prefix, word)
        if 0 == len(prefix):
            break
    return prefix


class TestLongestPrefix(TestCase):

    def test_util_function(self):
        assert 'flow' == longest_prefix_of_two('flower', 'flow')

    def test_examples(self):
        assert 'fl' == longest_common_prefix(['flower', 'flowed', 'flicker'])
        assert 'pic' == longest_common_prefix(['pickle', 'pickup', 'pico', 'picture'])
        assert '' == longest_common_prefix(['butcher', 'baker', 'candlestick maker'])

    def test_single_letter(self):
        assert 'a' == longest_common_prefix(['apple', 'aardvark'])
        assert 'g' == longest_common_prefix(['garbage', 'graendal', 'gift'])
        assert 'e' == longest_common_prefix(['eagle', 'easter', 'easy', 'egg'])

    def test_no_common_prefix(self):
        assert '' == longest_common_prefix(['apple', 'banana'])
        assert '' == longest_common_prefix(['garbage', 'garden', 'helicopter'])
        assert '' == longest_common_prefix(['castle', 'antimony', 'castanet','antiquity'])

    def test_repeated_instance(self):
        assert 'apple' == longest_common_prefix(['apple', 'apple'])
        assert 'apple' == longest_common_prefix(['apple', 'apple', 'apple'])

    def test_large_inputs(self):
        word1 = 'variadic'
        input1 = [word1] * 10_000
        assert word1 == longest_common_prefix(input1)

        word2 = 'variable'
        word3 = 'variety'
        input2 = [word2] * 1_000
        input3 = [word3] * 1_000
        assert 'vari' == longest_common_prefix([*input2, *input3])

        assert '' == longest_common_prefix(['a', *input1])
