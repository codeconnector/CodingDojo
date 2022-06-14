package drkennetz

import (
	"log"
	"testing"
)

func TestToSpreadsheetColName(t *testing.T) {
	tables := []struct {
		input int
		result string
	} {
		{1, "A"},
		{27, "AA"},
		{52, "AZ"},
		{287, "KA"},
		{17576, "YYZ"},
		{80719, "DOJO"},
		{1004171, "BECKY"},
		{9413735, "TOOPS"},
	}

	for _, table := range tables {
		actual := ToSpreadsheetColName(table.input)
		if actual != table.result{
			log.Fatalln("FAIL, expected: ", table.result, "got: ", actual)
		}
	}
}