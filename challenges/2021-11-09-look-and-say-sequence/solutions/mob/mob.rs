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

// Write a rle function that takes a string slice and outputs a String
trait RunLengthEncode {
    fn run_length_encode(&self) -> String;
}

impl RunLengthEncode for &str {
    fn run_length_encode(&self) -> String {
        // If the input string is empty, return an empty String
        if self.is_empty() { return String::from(""); }

        // Some variable setup
        let mut run_length = 1;

        // Start with the first character
        let mut current_char = self.chars().next().unwrap();
        let mut out = String::new();

        // For each char after the first, run length encode it
        for c in self.chars().skip(1) {
            if c == current_char {
                run_length += 1;
            } else {
                let rl_string = format!("{}{}", run_length, current_char);
                out.push_str(&rl_string);
                run_length = 1;
                current_char = c;
            }
        }
        let rl_string = format!("{}{}", run_length, current_char);
        out.push_str(&rl_string);
        out
    }
}

fn get_lines(n: isize) -> Vec<isize> {
    // Check to be sure n is a number, if not throw an exception
    if n <= 0 { return vec![-1]; }
    if n == 1 { return vec![1]; }

    let mut current = 1;
    let mut out = vec![current];

    for _ in 1..n {
        let string_rep = current.to_string().as_str().run_length_encode();
        let number_rep = string_rep.parse::<isize>().unwrap();
        current = number_rep;
        out.push(current);
    }
    out
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_properly_run_length_encode_a_number() {
        let input = "111221";
        let expected = "312211";
        assert_eq!(input.run_length_encode(), String::from(expected));
    }

    #[test]
    fn should_produce_the_first_number_in_sequence() {
        assert_eq!(get_lines(1), vec![1]);
    }

    #[test]
    fn should_produce_the_first_two_numbers_in_sequence() {
        assert_eq!(get_lines(2), vec![1, 11]);
    }

    #[test]
    fn should_produce_the_first_five_numbers_in_sequence() {
        assert_eq!(get_lines(5), vec![1, 11, 21, 1211, 111221]);
    }

    #[test]
    fn just_messing_around() {
        assert_eq!(get_lines("surprise!"), vec![1, 11, 21, 1211, 111221]);
    }
}
