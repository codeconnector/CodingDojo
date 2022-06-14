import laurelin


def test_1_brackets():
    output = laurelin.balanced_brackets("[[]]({}[])")
    assert output == True


def test_2_brackets():
    output = laurelin.balanced_brackets("[[({}[])")
    assert output == False


def test_3_brackets():
    output = laurelin.balanced_brackets("")
    assert output == True


def test_4_brackets():
    output = laurelin.balanced_brackets("(5 * 3) + [10 / {2}]")
    assert output == True


def test_5_brackets():
    output = laurelin.balanced_brackets(")]})]}")
    assert output == False


def test_6_brackets():
    output = laurelin.balanced_brackets("([{(((")
    assert output == False


def test_7_brackets():
    output = laurelin.balanced_brackets("no brackets at all")
    assert output == True


def test_8_brackets():
    output = laurelin.balanced_brackets(">>> (<> are not brackets) >>>")
    assert output == True


def test_9_brackets():
    output = laurelin.balanced_brackets("[///\\|||]")
    assert output == True


def test_10_brackets():
    output = laurelin.balanced_brackets("!@#$%%^&*(;',.<>?/\|~`'")
    assert output == False
