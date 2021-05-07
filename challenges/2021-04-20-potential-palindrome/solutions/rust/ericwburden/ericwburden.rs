//! # Potential Palindrome
//! 
//! Given a string, determine whether any permutation of it is a palindrome. A
//! palindrome is any string that can be read the same both forwards and
//! backwards, such as "kayak".
//! 
//! ## Business Rules/Errata
//! 
//! - You only need to determine whether it is possible to make a palindrome,
//! you do not need to return an example of the palindrome.
//! - Any input that is not a string should be treated as a string, if possible.
//! - An empty string is not a palindrome.
//! 
//! ## Examples
//! 
//! ```bash
//! canMakePalindrome("carrace");  // True
//! ```
//! 
//! The string `carrace` can be rearranged to make `racecar`, a palindrome.

use std::collections::HashSet;

pub fn can_make_palindrome<T: ToString>(input: T) -> bool {
    let mut unique_letters: HashSet<char> = HashSet::new();
    let input_string = input.to_string();
    
    if input_string.is_empty() { return false; }
    for c in input_string.chars() {
        if !unique_letters.insert(c) { unique_letters.remove(&c); }
    }

    unique_letters.len() <= 1  // return the result of this comparison
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn finds_actual_palindrome() {
        assert_eq!(can_make_palindrome("carrace"), true);
    }
    
    #[test]
    fn handles_numeric_input() {
        assert_eq!(can_make_palindrome(41231234), true);
    }
    
    #[test]
    fn rejects_non_palindrome() {
        assert_eq!(can_make_palindrome("notapalindrome"), false);
    }
    
    #[test]
    fn rejects_empty_strings() {
        assert_eq!(can_make_palindrome(""), false);
    }
}
