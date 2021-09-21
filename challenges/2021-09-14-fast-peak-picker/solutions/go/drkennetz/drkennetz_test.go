package drkennetz

import (
	"fmt"
	"math"
	"math/rand"
	"sort"
	"testing"
	"time"
)

func TestFastPeakPicker(t *testing.T) {
	tables := []struct{
		input []int
		result int
	} {
		{[]int{1, 2, 3, 2, 1}, 3},
		{[]int{1, 2, 3, 4, 5}, 5},
		{[]int{5, 4, 3, 2, 1}, 5},
		{[]int{1}, 1},
	}
	for _, table := range tables {
		actual := FastPeakPicker(table.input)
		if actual != table.result {
			fmt.Println("FAIL, expected: ", table.result, "got: ", actual)
		} else {
			fmt.Println("SUCCESS!")
		}
	}
}

func TestLinearFastPeakPicker(t *testing.T) {
	tables := []struct{
		input []int
		result int
	} {
		{[]int{1, 2, 3, 2, 1}, 3},
		{[]int{1, 2, 3, 4, 5}, 5},
		{[]int{5, 4, 3, 2, 1}, 5},
		{[]int{1}, 1},
	}
	for _, table := range tables {
		actual := LinearFastPeakPicker(table.input)
		if actual != table.result {
			fmt.Println("FAIL, expected: ", table.result, "got: ", actual)
		} else {
			fmt.Println("SUCCESS!")
		}
	}
}

func BenchmarkFastPeakPicker1(b *testing.B) {
	rand.Seed(time.Now().Unix())
	input := rand.Perm(10000)
	input = append(input, math.MaxInt32)
	sort.Ints(input)
	input2 := rand.Perm(100000)
	sort.Ints(input2)
	input = append(input, input2...)
	b.ResetTimer()
	for n := 0; n < b.N; n++ {
		FastPeakPicker(input)
	}
}

func BenchmarkLinearFastPeakPicker1(b *testing.B) {
	rand.Seed(time.Now().Unix())
	input := rand.Perm(10000)
	input = append(input, math.MaxInt32)
	sort.Ints(input)
	input2 := rand.Perm(100000)
	sort.Ints(input2)
	input = append(input, input2...)
	b.ResetTimer()
	for n := 0; n < b.N; n++ {
		LinearFastPeakPicker(input)
	}
}
func BenchmarkFastPeakPicker2(b *testing.B) {
	rand.Seed(time.Now().Unix())
	input := rand.Perm(55000)
	input = append(input, math.MaxInt32)
	sort.Ints(input)
	input2 := rand.Perm(55000)
	sort.Ints(input2)
	input = append(input, input2...)
	b.ResetTimer()
	for n := 0; n < b.N; n++ {
		FastPeakPicker(input)
	}
}

func BenchmarkLinearFastPeakPicker2(b *testing.B) {
	rand.Seed(time.Now().Unix())
	input := rand.Perm(55000)
	input = append(input, math.MaxInt32)
	sort.Ints(input)
	input2 := rand.Perm(55000)
	sort.Ints(input2)
	input = append(input, input2...)
	b.ResetTimer()
	for n := 0; n < b.N; n++ {
		LinearFastPeakPicker(input)
	}
}

func BenchmarkFastPeakPicker3(b *testing.B) {
	rand.Seed(time.Now().Unix())
	input := rand.Perm(100000)
	input = append(input, math.MaxInt32)
	sort.Ints(input)
	input2 := rand.Perm(10000)
	sort.Ints(input2)
	input = append(input, input2...)
	b.ResetTimer()
	for n := 0; n < b.N; n++ {
		FastPeakPicker(input)
	}
}

func BenchmarkLinearFastPeakPicker3(b *testing.B) {
	rand.Seed(time.Now().Unix())
	input := rand.Perm(100000)
	input = append(input, math.MaxInt32)
	sort.Ints(input)
	input2 := rand.Perm(10000)
	sort.Ints(input2)
	input = append(input, input2...)
	b.ResetTimer()
	for n := 0; n < b.N; n++ {
		LinearFastPeakPicker(input)
	}
}