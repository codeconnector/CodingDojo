package solution

import (
	"math"
)

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


func SumOfSquares(i int) int {
	// creates a table to store base case entries that don't have perfect squares (or are 1)
	initial := []int{0, 1, 2, 3}

	// get rest of table
	for j := 4; j <= i; j++ {
		initial = append(initial, j)

		// go through smaller numbers to recursively find the minimum
		for k := 1; k <= int(math.Ceil(math.Sqrt(float64(j)))); k++ {
			square := k * k
			if square > j {
				break
			} else {
				initial[j] = int(math.Min(float64(initial[j]), 1.0+float64(initial[j-square])))
			}
		}
	}
	return initial[i]
}


