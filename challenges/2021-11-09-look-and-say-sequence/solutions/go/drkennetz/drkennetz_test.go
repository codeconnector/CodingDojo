package drkennetz

import (
	"fmt"
	"log"
	"testing"
)

func TestGetLines(t *testing.T) {
	tables := []struct {
		input int
		result string
	} {
		{1, "1"},
		{2, "1,11"},
		{3, "1,11,21"},
		{5, "1,11,21,1211,111221"},
		{6, "1,11,21,1211,111221,312211"},
	}
	for _, table := range tables {
		actual := GetLines(table.input)
		if actual != table.result {
			log.Fatalln("FAIL, GOT: ", actual, "EXPECTED: ", table.result)
		} else {
			fmt.Println("SUCCESS, GOT: ", actual, "EXPECTED: ", table.result)
		}
	}
}