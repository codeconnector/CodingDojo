'''
# Two Number Sum

## Description

Given a list of `numbers` and a number `sum`, return whether any two numbers from the list add up to `sum`.

## Business Rules/Errata

- Numbers may be positive or negative integers, or 0.
- The list of numbers may contain fewer than two numbers, in which case your function should return `False`.
- **Bonus Challenge**: Identify the efficiency (time and memory) of your solution. Can you do better?

## Examples

```
two_number_sum(17, [10, 15, 3, 7])  // true
two_number_sum(17, [10, 15, 3, 8])  // false
two_number_sum(16, [10, 15, 8, 7])  // false
two_number_sum(16, [10, 15, 8, 8])  // true
two_number_sum(32, [])              // false
two_number_sum(32, [32])            // false
two_number_sum(32, [32, 0])         // true
two_number_sum(-32, [32, 0])        // false
two_number_sum(-32, [32, -64])      // true
```
'''


# Brute Force Solution
def two_number_sum(sum: int, numbers: list[int]) -> bool:
    if len(numbers) < 2:
        return False
    for i in range(len(numbers)):
        if sum - numbers[i] in numbers[i+1: len(numbers)]:
            return True
    return False


# Using Dictionary(Efficient) O(n)
def two_sum_numbers(sum: int, numbers: list[int]) -> bool:
    if len(numbers) < 2:
        return False
    mydict = {}
    for index, value in enumerate(numbers):
        if sum - value in mydict:
            return True
        mydict[value] = index
    return False

if __name__ == "__main__":
    assert two_sum_numbers(17, [10, 15, 3, 7]) == True
    assert two_sum_numbers(17, [10, 15, 3, 8]) == False
    assert two_sum_numbers(16, [10, 15, 8, 7]) == False
    assert two_sum_numbers(16, [10, 15, 8, 8]) == True
    assert two_sum_numbers(32, [])             == False
    assert two_sum_numbers(32, [32])           == False
    assert two_sum_numbers(32, [32, 0])        == True
    assert two_sum_numbers(-32, [32, 0])       == False
    assert two_sum_numbers(-32, [32, -64])     == True
