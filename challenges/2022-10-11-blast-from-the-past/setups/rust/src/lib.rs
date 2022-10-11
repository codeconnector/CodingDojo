// # Find Three Largest Numbers
// 
// Write a function that takes in an array of at least three integers and, without 
// sorting the input array, returns a sorted array of the three largest integers in
// the input array. The function should return duplicate integers if necessary. 
// 
// ## Business Rules/Errata
// 
// - The input array should have at least three integers. If it does not, you should
//   return a null value.
// - You may not sort the input array
// - The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]`
//   should return `[10, 10, 12]`
// - Constant space -> you will return a new array of 3 integers, and this will be the
//   only new data structure you create.
// - Linear time -> you should solve this problem by only passing through the array a
//   single time.

pub fn find_three_largest_numbers(arr: &[i32]) -> Option<[i32; 3]> {
    unimplemented!()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_one() {
        let input = [141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7];
        let result = find_three_largest_numbers(&input);
        let expected = [18, 141, 541];
        assert_eq!(result.expect("Should contain a value!"), expected);
    }

    #[test]
    fn test_case_two() {
        let input = [11, -7, 5, -7];
        let result = find_three_largest_numbers(&input);
        let expected = [-7, 5, 11];
        assert_eq!(result.expect("Should contain a value!"), expected);
    }

    #[test]
    fn test_case_three() {
        let input = [1];
        let result = find_three_largest_numbers(&input);
        assert_eq!(result, None);
    }
}
