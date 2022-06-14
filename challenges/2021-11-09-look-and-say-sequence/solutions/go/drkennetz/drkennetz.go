package drkennetz

import (
	"strconv"
	"strings"
)

/*
# Look and Say Sequence

[From CodeWars](https://www.codewars.com/kata/5263c5d011f4233c9d000561)

In mathematics, the look-and-say sequence is the sequence of integers beginning as follows:

`1, 11, 21, 1211, 111221, 312211, …`

To generate a member of the sequence from the previous member, read off the digits of
the previous member, counting the number of digits in groups of the same digit. For
example:

```
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
1211 is read off as "one 1, then one 2, then two 1s" or 111221.
111221 is read off as "three 1s, then two 2s, then one 1" or 312211.
```

Your mission is to write a function which, given an integer n as parameter, returns a
comma separated list of the first n terms of the sequence. For 0, an empty string
shall be returned.

For example:

```
get_lines(2);  //  "1,11"
get_lines(3);  //  "1,11,21"
get_lines(5);  //  "1,11,21,1211,111221"
 */

func runLengthEncoding(s string) string {

	output := ""
	for i:=0; i < len(s); {
		currChar := string(s[i])
		count := 1
		for (i < len(s) - 1) && (s[i] == s[i+1]) {
			count += 1
			i += 1
		}
		output += strconv.Itoa(count) + currChar
		i += 1
	}

	return output
}

func GetLines(i int) string {
	if i == 0 {
		return ""
	}
	str := "1"
	var encodings []string
	encodings = append(encodings, str)
	for j := 2; j <= i; j++ {
		encoded := runLengthEncoding(str)
		encodings = append(encodings, encoded)
		str = encoded
	}
	str = strings.Join(encodings, ",")
	return str
}
