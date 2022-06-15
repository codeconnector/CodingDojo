fn common_prefix(left: String, right: &str) -> String {
    let mut prefix = String::from("");
    for (l, r) in left.chars().zip(right.chars()) {
        if l == r { prefix.push(l); } else { break; }
    }
    prefix
}

fn longest_common_prefix(strings: &[&str]) -> String {
    strings
        .iter()
        .copied()
        .fold(strings[0].to_string(), common_prefix)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn testing() {
        let x = common_prefix("g".to_string(), "gargantuan");
        println!("{}", x);
    }

    #[test]
    fn single_letter() {
        //! Should return any single letter as-is
        assert_eq!(longest_common_prefix(&["a"]), "a");
        assert_eq!(longest_common_prefix(&["g"]), "g");
        assert_eq!(longest_common_prefix(&["z"]), "z");
        assert_eq!(longest_common_prefix(&["T"]), "T");
    }

    #[test]
    fn single_letter_prefix() {
        //! Should identify single-letter prefixes
        let input = ["apple", "aardvark"];
        assert_eq!(longest_common_prefix(&input), "a");

        let input = ["garbage", "graendal", "gift"];
        assert_eq!(longest_common_prefix(&input), "g");

        let input = ["eagle", "easter", "easy", "egg"];
        assert_eq!(longest_common_prefix(&input), "e");
    }

    #[test]
    fn multiple_letter_prefix() {
        //! Should identify multiple-letter prefixes
        let input = ["apple", "apricot"];
        assert_eq!(longest_common_prefix(&input), "ap");

        let input = ["garbage", "garden", "gargantuan"];
        assert_eq!(longest_common_prefix(&input), "gar");

        let input = ["castle", "casting", "castanet", "cast"];
        assert_eq!(longest_common_prefix(&input), "cast");
    }

    #[test]
    fn no_letter_prefix() {
        //! Should identify when there is no common prefix
        let input = ["apple", "banana"];
        assert_eq!(longest_common_prefix(&input), "");

        let input = ["garbage", "garden", "helicopter"];
        assert_eq!(longest_common_prefix(&input), "");

        let input = ["castle", "antimony", "castanet", "antiquity"];
        assert_eq!(longest_common_prefix(&input), "");
    }

    #[test]
    fn repeated_words() {
        //! Should identify when there are repeated instances of a single word
        let input = ["apple", "apple"];
        assert_eq!(longest_common_prefix(&input), "apple");

        let input = ["apple", "apple", "apple"];
        assert_eq!(longest_common_prefix(&input), "apple");
    }

    #[test]
    fn large_inputs() {
        //! Should work on large inputs
        let mut input = vec!["variadic"; 10_000];
        assert_eq!(longest_common_prefix(&input), "variadic");

        input.extend(&["variable"; 1000]);
        input.extend(&["variety"; 1000]);
        assert_eq!(longest_common_prefix(&input), "vari");

        input.push("a");
        assert_eq!(longest_common_prefix(&input), "");
    }
}
