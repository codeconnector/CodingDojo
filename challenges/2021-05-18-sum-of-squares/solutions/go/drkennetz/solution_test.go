package solution

import (
	"fmt"
	"testing"
)

func TestSumOfSquares(t *testing.T) {
	tables := []struct {
		input int
		result int
	}{
		{13, 2},
		{27, 3},
		{144, 1},
		{84, 3},
		{85, 2},
	}
	for _, x := range tables {
		soln := SumOfSquares(x.input)
		if soln != x.result {
			t.Error("FAIL: SumOfSquares of: ", x.input, "was incorrect, got: ", soln, "expected: ", x.result)
		} else {
			fmt.Println("SUCCESS: SumOfSquares of: ", x.input, "yielded: ", soln, "which was correct!")
		}
	}
}

func benchmarkSumOfSquares(i int, b *testing.B) {
	for n:=0; n < b.N; n++ {
		SumOfSquares(i)
	}
}

func BenchmarkSumOfSquares13(b *testing.B) { benchmarkSumOfSquares(13, b) }
func BenchmarkSumOfSquares27(b *testing.B) { benchmarkSumOfSquares(27, b) }
func BenchmarkSumOfSquares144(b *testing.B) { benchmarkSumOfSquares(144, b) }
func BenchmarkSumOfSquares84(b *testing.B) { benchmarkSumOfSquares(84, b) }
func BenchmarkSumOfSquares85(b *testing.B) { benchmarkSumOfSquares(85, b) }
