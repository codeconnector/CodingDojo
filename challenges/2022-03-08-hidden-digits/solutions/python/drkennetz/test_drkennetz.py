"""
# Hidden Digits

You are given a string `time` in the form of `hh:mm`, where some of the digits in the string are _hidden_ (represented by `?`).

Return the _**LATEST valid time**_ you can get from `time` by replacing the hidden digits.

The valid times are those inclusively between `00:00` and `23:59`.

## Business Rules/Errata

- `time` is a string in the format `hh:mm`
- It is guaranteed that you can produce a valid time from the given string.
- Your function should return a string.

## Examples

```
hiddenDigits("2?:?0") -> "23:50"
hiddenDigits("0?:3?") -> "09:39"
hiddenDigits("?7:?1") -> "17:51"
hiddenDigits("1?:22") -> "19:22"
hiddenDigits("00:00") -> "00:00"
hiddenDigits("??:??") -> "23:59"
```
"""

import unittest

def hidden_digits(time_string):
    """ converts time with unknown digits to max time with respect to hours and minutes given starting digits
    Args:
        time_string (str): a string representing an unknown time
    Returns:
        max_time_string (str): a string with filled in missing digits for max time
    """
    mapper = {'first': lambda x,y: '2' if x == '?' and y == '?' else '2' if y < '4' and x == '?' else '1' if x == '?' else x,
              'second': lambda x,y: '9' if x < '2' and y == '?' else '3' if y == '?' else y,
              'third': lambda x: '5' if x == '?' else x,
              'fourth': lambda x: '9' if x == '?' else x}
    first = mapper['first'](time_string[0], time_string[1])
    second = mapper['second'](time_string[0], time_string[1])
    third = mapper['third'](time_string[3])
    fourth = mapper['fourth'](time_string[4])
    return ''.join([first, second, ':', third, fourth])

class TestHiddenDigits(unittest.TestCase):
    
    def test_same_time(self):
        self.assertEqual(hidden_digits('00:00'), '00:00')

    def test_latest_possible_time(self):
        self.assertEqual(hidden_digits('??:??'), '23:59')

    def test_second_hours_digit_three(self):
        self.assertEqual(hidden_digits('2?:31'), '23:31')

    def test_second_hours_digit_nine(self):
        self.assertEqual(hidden_digits('1?:22'), '19:22')

    def test_first_hours_digit_two_when_second_hours_digit_three(self):
        self.assertEqual(hidden_digits('?3:05'), '23:05')

    def test_first_hours_digit_one_when_second_hours_digit_is_eight(self):
        self.assertEqual(hidden_digits('?8:05'), '18:05')

    def test_first_minutes_digit_five_when_hidden(self):
        self.assertEqual(hidden_digits('23:?0'), '23:50')

    def test_makes_second_minutes_digit_nine_when_hidden(self):
        self.assertEqual(hidden_digits('09:3?'), '09:39')

    def test_handles_inner_digits_on_both_sides_of_colon(self):
        self.assertEqual(hidden_digits('2?:?0'), '23:50')

    def test_handles_right_digits_on_both_sides_of_colon(self):
        self.assertEqual(hidden_digits('0?:3?'), '09:39')

    def test_handles_left_digits_on_both_sides_of_colon(self):
        self.assertEqual(hidden_digits('?7:?1'), '17:51')
        
if __name__ == "__main__":
    unittest.main()
