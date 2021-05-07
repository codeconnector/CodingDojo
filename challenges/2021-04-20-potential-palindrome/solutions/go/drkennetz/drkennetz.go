package main

import (
	"strconv"
)

// # Potential Palindrome
//
// Given a string, determine whether any permutation of it is a palindrome. A palindrome is any string that can be read the same both forwards and backwards, such as "kayak".

// ## Business Rules/Errata

// - You only need to determine whether it is possible to make a palindrome, you do not need to return an example of the palindrome.
// - Any input that is not a string should be treated as a string, if possible.
// - An empty string is not a palindrome.

// ## Examples
// canMakePalindrome("carrace");  // True
// canMakePalindrome(41231234); //

func convertToString(x interface{}) string {
	switch x.(type) {
	case int:
		return strconv.Itoa(x.(int))
	default:
		return x.(string)
	}
}
// CanMakePalindrome takes in any type, treats it as a string and checks to see if it can form a palindrome
func CanMakePalindrome(x interface{}) bool {
	s := convertToString(x)
	if s == "" {
		return false
	}
	// 256 chars in ascii charset
	ords := make([]int, 256)
	for pos := range(s) {
		ords[s[pos]] = ords[s[pos]]+1
	}
	oddCount := 0
	for i := range(ords) {
		if ords[i]%2 != 0 {
			oddCount++
		}
		if oddCount > 1 {
			return false
		}
	}
	return true
}