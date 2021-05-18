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