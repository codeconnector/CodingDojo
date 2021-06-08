# Sum of Squares

Given a positive integer `n`, find the smallest number of squared integers which sum to `n` (i.e. n = x<sup>2</sup> + y<sup>2</sup> should yield `2`).

## Business Rules/Errata

- Any attempt to provide non-integer, non-positive input should return an error.
- Return only the count of squared integers that sum to `n`, not the list of integers.
- Remember that 1<sup>2</sup> = 1.

## Examples

```bash
SumOfSquares(13); // 2
SumOfSquares(27); // 3
```

- For `n` = 13: 3<sup>2</sup> + 2<sup>2</sup> = 9 + 4 = 13
- For `n` = 27:
    - 3<sup>2</sup> + 3<sup>2</sup> + 3<sup>2</sup> = 9 + 9 + 9 = 27
    - 5<sup>2</sup> + 1<sup>2</sup> + 1<sup>2</sup> = 25 + 1 + 1 = 27
    
## Tackling This Challenge

1. The challenge will be live-coded in our weekly Tuesday meetup in the `solutions.go` file.
2. During the live-coding session, it will be tested by navigating to this directory and running `go test`. 
3. The results of the live coding demo will be PR'ed as a mob solution. Any future submitters should reference [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- Installed go

## Notes and Observations

* will need to use recursion
* The upper limit might be calculated by the square root of the input.
* For example, 27-25=2

n - positive integer
SumOfSquares(n) - function

Step 1 - generate squares up to the floor of the square root of the number 
ie. 1, 2, 3, 4, 5 => 1, 4, 9, 16, 25

Step 2 - Break either at condition that the number is >= sqrt of the given number
11 => sqrt(11) => 3
11 - (3)^2 = 2












