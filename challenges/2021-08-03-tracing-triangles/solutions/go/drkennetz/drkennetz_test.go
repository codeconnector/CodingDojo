package drkennetz

import (
	"fmt"
	"testing"
)

func TestLongestPath(t *testing.T) {
	tables := []struct {
		input [][]int
		result int
	}{
		{[][]int{[]int{1}, []int{2, 3}, []int{1, 5, 1}}, 9},
		{[][]int{[]int{6}, []int{4, 4}, []int{1, 2, 1}, []int{5,4,3,2}}, 16},
		{[][]int{[]int{5}}, 5},
		{[][]int{[]int{1}, []int{1, 1}, []int{1, 1, 1}, []int{2, 1, 1, 1}}, 5},
		{[][]int{[]int{0}, []int{0,0}, []int{0,0,0}}, 0},
	}
	for _, table := range tables {
		actual := LongestPath(table.input)
		if actual != table.result {
			fmt.Println("FAIL, expected: ", table.result, "got: ", actual)
		} else {
			fmt.Println("SUCCESS!")
		}
	}
}

func BenchmarkLongestPath(b *testing.B) {
	for n := 0; n < b.N; n++ {
		LongestPath([][]int{[]int{6}, []int{4, 4}, []int{1, 2, 1}, []int{5,4,3,2}})
	}
}
