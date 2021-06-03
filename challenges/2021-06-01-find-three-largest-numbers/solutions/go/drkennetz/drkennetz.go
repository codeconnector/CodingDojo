package solution

import (
	"math"
)

/*
# Find Three Largest Numbers

Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array. The function should return duplicate integers if necessary.

## Business Rules/Errata

- The input array should have at least three integers. If it does not, you should return a null value.
- You may not sort the input array
- The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]` should return `[10, 10, 12]`
- Constant space -> you will return a new array of 3 integers, and this will be the only new data structure you create.
- Linear time -> you should solve this problem by only passing through the array a single time.

## Examples

```
findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]) -> [18, 141, 541]
findThreeLargestNumbers([11, -7, 5]) -> [-7, 5, 11]
findThreeLargestNumbers([1]) -> Null
```
 */

func FindThreeLargest(i []int) []int {
	if len(i) < 3 {
		return nil
	}
	result := []int{-math.MaxInt32, -math.MaxInt32, -math.MaxInt32}

	for j := 0; j < len(i); j++ {
		if i[j] > result[2] {
			result[0] = result[1]
			result[1] = result[2]
			result[2] = i[j]
		} else if (result[1] < i[j]) && (i[j] <= result[2]) {
			result[0] = result[1]
			result[1] = i[j]
		} else if (result[0] < i[j]) && (i[j] <= result[1]) {
			result[0] = i[j]
		}
	}
	return result
}


