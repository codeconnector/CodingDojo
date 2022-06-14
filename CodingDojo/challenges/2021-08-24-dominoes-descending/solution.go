package solution

/*
# Dominoes Descending

You are given an string representing the initial conditions of some dominoes. Each element can take one of three values:

- "L", meaning the domino has just been pushed to the left,
- "R", meaning the domino has just been pushed to the right, or
- ".", meaning the domino is standing still.

Determine the orientation of each tile when the dominoes stop falling. Note that if a domino receives a force from the left and right side simultaneously, it will remain upright.

For example, given the string .L.R.....L, you should return LL.RRR.LLL.

## Business Rules/Errata

- Input will be a valid string containing only the "L", "R", and "." characters.
- Output should be a valid string containing only the "L", "R", and "." characters.
- A domino that is struck from the left will fall left, a domino that is struck from the right will fall right.
- A domino struck from the left and right at the same time will remain standing.

## Examples

```
topple(".L.R....L") // "LL.RRRLLL"
topple("L.......R") // "L.......R"
topple("R........") // "RRRRRRRRR"
topple("........L") // "LLLLLLLLL"
topple("RLRLRLRLR") // "RLRLRLRLR"
topple("R..L.R..L") // "RRLL.RRLL"
topple("...L.R...") // "LLLL.RRRR"
topple("R.......L") // "RRRR.LLLL"
```
*/

// Topple will take in a valid string containing only L, R, and . and return a "toppled" string
func Topple(s string) string {
	return ""
}