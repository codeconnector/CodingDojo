from unittest import TestCase


def hidden_digits(time_str):
    result = ''

    # Hours
    first_hidden = '?' == time_str[0]
    second_hidden = '?' == time_str[1]
    if first_hidden and second_hidden:
        result += '23'
    else:
        if first_hidden:
            result += '2' if int(time_str[1]) < 5 else '1'
        else:
            result += time_str[0]

        if second_hidden:
            result += '3' if time_str[0] > '1' else '9'
        else:
            result += time_str[1]

    # Separator
    result += ':'

    # Minutes
    if '??' == time_str[3:]:
        result += '59'
    else:
        result += '5' if '?' == time_str[3] else time_str[3]
        result += '9' if '?' == time_str[4] else time_str[4]
    return result


class TestHiddenDigits(TestCase):
    def test_this(self):
        assert hidden_digits("2?:?0") == "23:50"
        assert hidden_digits("0?:3?") == "09:39"
        assert hidden_digits("?7:?1") == "17:51"
        assert hidden_digits("1?:22") == "19:22"
        assert hidden_digits("00:00") == "00:00"
        assert hidden_digits("??:??") == "23:59"
