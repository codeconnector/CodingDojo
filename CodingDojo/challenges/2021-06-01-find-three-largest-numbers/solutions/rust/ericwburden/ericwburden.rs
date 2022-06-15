// # Find Three Largest Numbers
// 
// Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array. The function should return duplicate integers if necessary.
// 
// ## Business Rules/Errata
// 
// - The input array should have at least three integers. If it does not, you should return a null value.
// - You may not sort the input array
// - The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]` should return `[10, 10, 12]`
// - Constant space -> you will return a new array of 3 integers, and this will be the only new data structure you create.
// - Linear time -> you should solve this problem by only passing through the array a single time.
// 
// ## Examples
// 
// ```
// findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]) -> [18, 141, 541]
// findThreeLargestNumbers([11, -7, 5]) -> [-7, 5, 11]
// findThreeLargestNumbers([1]) -> Null
// ```

use std::mem;

pub fn find_three_largest_numbers(input: &[i32]) -> Option<[i32; 3]> {
    if input.len() < 3 { return None; }

    let mut output = [i32::MIN; 3];
    for n in input {
        let mut cur = *n;
        if cur > output[2] { cur = mem::replace(&mut output[2], cur);  } 
        if cur > output[1] { cur = mem::replace(&mut output[1], cur);  } 
        if cur > output[0] { output[0] = cur; } 
    }
    Some(output)
}

#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_one() {
        let input = vec![141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
        assert_eq!(find_three_largest_numbers(&input), Some([18, 141, 541]));
    }

    #[test]
    fn test_two() {
        let input = vec![11, -7, 5, -7];
        assert_eq!(find_three_largest_numbers(&input), Some([-7, 5, 11]));
    }

    #[test]
    fn test_three() {
        let input = vec![1];
        assert_eq!(find_three_largest_numbers(&input), None);
    }
}
