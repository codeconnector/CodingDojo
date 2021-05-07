package main

import (
	"fmt"
	"testing"
)

func TestCanMakePalindrome(t *testing.T) {
	tables := []struct {
		x interface{}
		y bool
	}{
		{"carrace", true},
		{"", false},
		{"annnab", false},
		{41231234, true},
	}

	for _, table := range tables {
		result := CanMakePalindrome(table.x)
		if result != table.y {
			t.Error("FAIL: CanMakePalindrome of: ", result, "was incorrect, got: ", result, "expected: ", table.y)
		} else {
			fmt.Println("SUCCESS: CanMakePalindrome of: ", result, "was correct, got: ", result, "expected: ", table.y)
		}
	}
}
