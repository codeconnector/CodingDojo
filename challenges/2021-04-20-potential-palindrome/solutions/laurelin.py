from collections import defaultdict


def is_palindrome(s: str) -> bool:
    #count char frequency in string, if more than one is odd, not a palindrome
    if not s:
        return False
    freq = defaultdict(int)
    for char in s:
        freq[char] += 1
    if len([val for val, chr in freq.items() if chr % 2 != 0]) > 1:
        return False
    return True
