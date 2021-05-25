package solution

/*
# Sum of Squares
Given a positive integer `n`, find the smallest number of squared integers which sum to `n` (i.e. n = x^2 + y^2 should yield `2`).

## Business Rules/Errata

- Any attempt to provide non-integer, non-positive input should return an error.
- Return only the count of squared integers that sum to `n`, not the list of integers.
- Remember that 1^2 = 1.

## Examples

```bash
SumOfSquares(13); // 2
SumOfSquares(27); // 3
```

- For `n` = 13: 3^2 + 2^2 = 9 + 4 = 13
- For `n` = 27:
    - 3^2 + 3^2 + 3^2 = 9 + 9 + 9 = 27
    - 5^2 + 1^2 + 1^2 = 25 + 1 + 1 = 27
 */

import (
	"math"
)

func SumOfSquares(i int, j int) int {
	
	// TODO Handle cases where i < 0
	if i < 4 {
		return i
	}

	upperLimit := i - int(math.Floor(math.Sqrt(float64(i))))
	var iter = j 
	var result int
	
	for iter <= upperLimit {
		newVal := int(math.Sqrt(float64(i))) - iter

		if (iter >= int(math.Sqrt(float64(i)))) {
			break
		}
		if newVal < 0 {
			break
		}

		result += SumOfSquares(newVal, iter)
	}
	return result
	
}
