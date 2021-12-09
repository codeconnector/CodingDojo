package drkennetz

import (
	"strings"
)

// Converts an input integer to a spreadsheet column name
func ToSpreadsheetColName (integer int) string {
	quotient := integer

	var encoded []string
	for quotient > 0 {
		remainder := (quotient-1) % 26
		encoded = append(encoded, string(rune(remainder + 65)))
		quotient = (quotient-1) / 26
	}
	reverse(encoded)
	result := strings.Join(encoded, "")
	return result
}

// in place reversal of slice
func reverse(s []string) []string {
	for i, j := 0, len(s) - 1; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}

	return s
}

