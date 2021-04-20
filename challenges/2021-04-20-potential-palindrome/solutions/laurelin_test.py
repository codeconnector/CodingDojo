import laurelin


def test1_palindrome():
    output = laurelin.can_make_palindrome("aaaaaa")
    assert output == True


def test2_palindrome():
    output = laurelin.can_make_palindrome("aaaaa")
    assert output == True


def test3_palindrome():
    output = laurelin.can_make_palindrome("aabb")
    assert output == True


def test4_palindrome():
    output = laurelin.can_make_palindrome("aaabbb")
    assert output == False

def test5_palindrome():
    output = laurelin.can_make_palindrome("carrace")
    assert output == True

def test6_palindrome():
    output = laurelin.can_make_palindrome("asdfghjklkjhgfdsa")
    assert output == True

def test7_palindrome():
    output = laurelin.can_make_palindrome("")
    assert output == False