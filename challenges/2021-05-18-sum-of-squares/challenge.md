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
    
## Requirements

- Installed go
