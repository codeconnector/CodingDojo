package solution

import (
	"github.com/stretchr/testify/require"
	"testing"
)

func TestSolution(t *testing.T) {
	testCases := []struct {
		input  []int
		result []int
	}{
		{input: []int{141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7}, result: []int{18, 141, 541}},
		{input: []int{11, -7, 5, -7}, result: []int{-7, 5, 11}},
		{input: []int{1}, result: nil},
	}

	for _, v := range testCases {
		require.Equal(t, v.result, Solution(v.input))
	}
}

func TestSolutionSort(t *testing.T) {
	testCases := []struct {
		input  []int
		result []int
	}{
		{input: []int{141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7}, result: []int{18, 141, 541}},
		{input: []int{11, -7, 5, -7}, result: []int{-7, 5, 11}},
		{input: []int{1}, result: nil},
	}

	for _, v := range testCases {
		require.Equal(t, v.result, SolutionSort(v.input))
	}
}

func BenchmarkSolution(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Solution([]int{141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7})
	}
}

func BenchmarkSolutionSort(b *testing.B) {
	for n := 0; n < b.N; n++ {
		SolutionSort([]int{141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7})
	}
}
