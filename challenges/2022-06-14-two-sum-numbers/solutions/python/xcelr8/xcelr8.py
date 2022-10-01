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

def twoSumNumbers(sum: int, arr):
    output = False
    # create a copy of the list to restore it to its original as we will remove the element being used in the formula in every loop
    arrCopy = arr.copy()
    
    if len(arr) > 1:
        for i in arr:
            # if (x + i) == sum, then x has to be in the list for argument to be true
            x = sum - i
            # remove i from the list temporarily just in case x and i are same
            arr.remove(i)
            if x in arr:
                output = True
                break
            else:
                continue
            arr = arrCopy.copy()
    return output

if __name__ == "__main__":
    sum = 16
    arr = [10, 15, 8, 7]
    print(twoSumNumbers(sum, arr))