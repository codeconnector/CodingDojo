def balanced_brackets(input: str) -> bool:
    if len(input) == 0:
        return True

    stack = []
    brackets = {'(', ')', '[', ']', '{', '}'}
    bracket_pair = {')': '(', ']': '[', '}': '{'}

    for char in input:
        if char not in brackets:
            continue

        is_closed = char in bracket_pair
        size = len(stack)

        if size == 0 and is_closed:  # if there are no opening brackets, but we found a closing bracket
            return False

        if not is_closed:
            stack.append(char)
        else:
            bracket = stack.pop()
            if bracket_pair[char] != bracket:
                return False

    size = len(stack)
    if size == 0:
        return True
    else:
        return False
