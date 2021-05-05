package main

import (
	"testing"
	"fmt"
)

func TestOverlaps(t *testing.T) {
	tables := []struct {
		c1 coords
		c2 coords
		s bool
	}{
		{coords{1, 4, 3, 3}, coords{0, 3, 2, 1}, false},
		{coords{1, 4, 3, 3}, coords{0, 3, 4, 4}, true},
		{coords{1, 4, 3, 3}, coords{0, 3, 3, 3}, false},
	}
	for _, x := range tables {
		r1 := Rectangle{}.Construct(x.c1)
		r2 := Rectangle{}.Construct(x.c2)
		result := Overlaps(r1, r2)
		if result != x.s {
			t.Error("FAIL: Overlaps of: ", r1, r2, "was incorrect, got: ", result, "expected: ", x.s)
		} else {
			fmt.Println("SUCCESS: Overlaps of: ", r1, r2, "was correct!")
		}
	}
}
