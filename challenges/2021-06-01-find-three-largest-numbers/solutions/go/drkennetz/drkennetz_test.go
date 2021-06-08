package solution

import (
	"fmt"
	"reflect"
	"testing"
)

func TestFindThreeLargest(t *testing.T) {
	tables := []struct {
		input []int
		result []int
	}{
		{[]int{141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7}, []int{18, 141, 541}},
		{[]int{11, -7, 5, -7}, []int{-7, 5, 11}},
		{[]int{1}, nil},
	}

	for _, table := range(tables) {
		actual := FindThreeLargest(table.input)
		if !reflect.DeepEqual(actual, table.result){
			fmt.Println("FAIL, expected: ", table.result, "got: ", actual)
		} else {
			fmt.Println("SUCCESS!")
		}
	}
}

func BenchmarkFindThreeLargest(b *testing.B) {
	for n := 0; n < b.N; n++ {
		FindThreeLargest([]int{141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7})
	}
}