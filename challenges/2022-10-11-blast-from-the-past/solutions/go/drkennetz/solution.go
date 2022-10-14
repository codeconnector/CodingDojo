// Package solution solves the blast from the past challenge
package solution

import (
	"math"
	"sort"
)

/*
# Find Three Largest Numbers

Write a function that takes in an array of at least three integers and, without
sorting the input array, returns a sorted array of the three largest integers in
the input array. The function should return duplicate integers if necessary.

## Business Rules/Errata
 - The input array should have at least three integers. If it does not, you should
   return a null value.
 - You may not sort the input array
 - The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]`
   should return `[10, 10, 12]`
 - Constant space -> you will return a new array of 3 integers, and this will be the
   only new data structure you create.
 - Linear time -> you should solve this problem by only passing through the array a
   single time.
*/

func Solution(array []int) []int {
	if len(array) < 3 {
		return nil
	}
	output := []int{math.MinInt, math.MinInt, math.MinInt}

	for i := 0; i < len(array); i++ {
		if output[2] < array[i] {
			output[0], output[1], output[2] = output[1], output[2], array[i]
		} else if output[1] < array[i] {
			output[0], output[1] = output[1], array[i]
		} else if output[0] < array[i] {
			output[0] = array[i]
		}
	}
	return output
}

func SolutionSort(array []int) []int {
	if len(array) < 3 {
		return nil
	}
	output := []int{math.MinInt, math.MinInt, math.MinInt, math.MinInt}
	for _, v := range array {
		output[0] = v
		sort.Ints(output)
	}
	return output[1:]
}
