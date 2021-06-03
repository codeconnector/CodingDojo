import math

def count_squared_addends_max_four(input_int):
    """
    Due to Lagrange's four square theorem all numbers are representable as the sum of at most 4 squares
    https://en.wikipedia.org/wiki/Lagrange%27s_four-square_theorem

    Solution by Corey McCarty
    Additional input by Charles Umiker
    """
    upper_limit = math.floor(math.sqrt(input_int))
    if input_int == upper_limit ** 2:
        return 1  # 1 is the answer if and only if input_int is a perfect square
    options = [v for v in range(1, upper_limit + 1)]
    options.sort(reverse=True)
    i = 0
    answer_is_3 = False
    while i <= len(options) - 1:
        i_square = options[i] ** 2
        j = i
        while (j <= len(options) - 1):
            j_square = options[j] ** 2
            if input_int == i_square + j_square:
                return 2  # Quitting early as there can't be a better solution at this point
            k = j
            while k <= len(options) - 1:
                k_square = options[k] ** 2
                if input_int == i_square + j_square + k_square:
                    answer_is_3 = True
                k += 1
            j += 1
        i += 1

    if answer_is_3:

        return 3

    return 4
  
