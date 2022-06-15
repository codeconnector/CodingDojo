package drkennetz

import (
	"math"
)

func LongestPath(a [][]int) int {
	store := make([]int, len(a))
	n := len(a) - 1

	// store the bottom row
	for i := 0; i < len(a[n]); i++ {
		store[i] = a[n][i]
	}
	// walk backwards through the rows starting from the second to last
	for i := len(a) - 2; i >= 0; i-- {
		// walk through the items in each row by index
		for j := 0; j < len(a[i]); j++ {
			// update the store at each index with the array's current value plus the max of the store current and store next
			max := math.Max(float64(store[j]), float64(store[j + 1]) )
			store[j] = a[i][j] + int(max)
		}
	}
	return store[0]
}