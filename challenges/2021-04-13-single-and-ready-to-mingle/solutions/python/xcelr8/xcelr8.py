'''
# Single and Ready to Mingle

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

## Business Rules/Errata

- You can assume that the input will **always** include at least two and exactly two elements that appear only once.
- You may not assume that the list will be sorted ahead of time.
- Extra Challenge: Can you complete this puzzle in linear time and constant space?
- Extra Extra Challenge: Can you make your solution generic over other input types?

## Examples

```
input = [2, 4, 6, 8, 10, 2, 6, 10];
find_singles(input)  // [4, 8]
```
```
input = [1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9];
find_singles(input)  // [3, 8]
```
'''

from collections import Counter

def findSingles(input):
    # Counter function returns a dictionary of the list and the most_common function of Counter class sorts it by values.
    output = Counter(input).most_common()
    # As specified in the problem instructions, only 2 elements appear once and all others appear twice, hence the last 2 keys are the required output
    return ([output[-2][0], output[-1][0]])

if __name__ == "__main__":
    input = [1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9]
    print(findSingles(input))