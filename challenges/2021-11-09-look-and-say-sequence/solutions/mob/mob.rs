// # Look and Say Sequence
//
// In mathematics, the look-and-say sequence is the sequence of integers beginning as
// follows:
//
// `1, 11, 21, 1211, 111221, 312211, …`
//
// To generate a member of the sequence from the previous member, read off the digits of
// the previous member, counting the number of digits in groups of the same digit. For
// example:
//
// ```
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// 1211 is read off as "one 1, then one 2, then two 1s" or 111221.
// 111221 is read off as "three 1s, then two 2s, then one 1" or 312211.
// ```
//
// Your mission is to write a function which, given an integer n as parameter, returns a
// comma separated list of the first n terms of the sequence. For 0, an empty string
// shall be returned.
//
// For example:
//
// ```
// get_lines(2);  //  "1,11"
// get_lines(3);  //  "1,11,21"
// get_lines(5);  //  "1,11,21,1211,111221"
// ```

// This crate can be imported by adding `itertools="0.10"` to your Cargo.toml
// under [dependencies]
use itertools::Itertools;

/// Returns the first `n` "look and say numbers" 
#[allow(dead_code)] // Keeps the compiler from complaining
#[allow(unstable_name_collisions)]
fn get_lines(n: usize) -> String {
    // String::default() is an empty string
    let mut current = String::default();
    if n == 0 { return current }

    let sep = String::from(",");

    // This closure takes the `current` string, updates it with the `run_length_encode()`
    // method, then provides a copy of the updated string. Essentially 'advances' the 
    // `current` string by one 'look and say' number.
    let next = || {
        current = run_length_encode(&current);
        current.clone()
    };

    // Produces `n` iterations of calling the `next` closure to produce `n` 'look and
    // say' numbers in sequence, places commas between them, then collapses them all
    // into a single string.
    std::iter::repeat_with(next)
        .take(n)
        .intersperse(sep)
        .collect()
}

/// Run length encodes a string slice
/// If the input is empty, return the first 'look and say' number, otherwise return
/// a 'run length encoded' version of the input.
///
/// Example:
///
/// "111221" -> [(3, 1), (2, 2), (1, 1)] -> "312211"
fn run_length_encode(s: &str) -> String {
    if s.is_empty() {
        String::from("1")
    } else {
        s.chars().dedup_with_count().map(format_rle_pair).collect()
    }
}

/// Given a pair of (run_length, value), return a String "<run_length><value>"
fn format_rle_pair<T: std::fmt::Display>(pair: (usize, T)) -> String {
    let (run_length, value) = pair;
    format!("{}{}", run_length, value)
}



#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_properly_run_length_encode_a_number() {
        let input = "111221";
        let expected = "312211";
        assert_eq!(run_length_encode(input), String::from(expected));
    }

    #[test]
    fn should_produce_the_first_number_in_sequence() {
        assert_eq!(get_lines(1), "1");
    }

    #[test]
    fn should_produce_the_first_two_numbers_in_sequence() {
        assert_eq!(get_lines(2), "1,11");
    }

    #[test]
    fn should_produce_the_first_five_numbers_in_sequence() {
        assert_eq!(get_lines(5), "1,11,21,1211,111221");
    }
}
