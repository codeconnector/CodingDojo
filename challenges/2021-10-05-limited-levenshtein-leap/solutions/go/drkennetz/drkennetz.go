// Package drkennetz finds the limited levenshtein leap through an array of words
package drkennetz

import "fmt"

//

// takes the minimum possible path to get from start to end, if possible
func LimitedLevenshtein(start, end string, words []string) []string {
	output := []string{start}
	starter := make(map[string][]string)
	startingPoints := make(map[string]string)
	for i := 0; i < len(words); i++ {
		for j := 0; j < len(words); j++ {
			if isOffByOne()
		}
		if isOffByOne(start, words[i]) {
			startingPoints = append(startingPoints, words[i])
		}
	}
	for i := 0; i < len(startingPoints); i++ {

	}
	fmt.Println(startingPoints)
	fmt.Println(output)
	return nil
}

// words guaranteed to be same length
func isOffByOne(word1, word2 string) bool {
	dist := 0
	for i := 0; i < len(word1); i++ {
		if word1[i] != word2[i] {
			dist++
		}
	}
	return dist == 1
}
