// # Runs of Ones
// 
// Given a positive integer `n`, determine the length of the longest run of `1`'s in the binary representation of that integer.
// 
// ## Business Rules/Errata
// 
// - A run of `1`'s is any series of one or more `1`'s in a row, with no `0`'s in between. The first four characters in `11110101` are a run of `1`'s.
// - There's no requirement related to what data type(s) should be used to store the binary representation of `n`.
// - Target time complexity: O(n) (linear)
// - Target space complexity: O(1) (constant)
// 
// ## Examples
// 
// ```
// longest_binary_run(156);   // 3
// longest_binary_run(1979);  // 4
// longest_binary_run(2731);  // 2
// longest_binary_run(2185);  // 1
// ```

struct Biterator {
    n: u128,
    bit_mask: u128,
}

impl Biterator {
    pub fn from<T: Into<u128>>(n: T) -> Self {
        Biterator { n: n.into(), bit_mask: 1u128 }
    }

    // The bit mask starts with 1, which in binary is 00000001. Multiplying by 2 moves
    // the set bit one to the left (2 -> 00000010; 4 -> 00000100; 8 -> 00001000). The
    // result of a binary AND of this value and some other number will return 0 if
    // the second number had a 0 in the position of the bit mask set bit, or a number
    // greater than 0 if the second number had a 1 in the position of the bit mask
    // set bit, effectively iterating through the bits of the number.
    pub fn next(&mut self) -> Option<bool> {
        if self.bit_mask > self.n { return None; }       
        let out = self.bit_mask & self.n > 0;
        self.bit_mask *= 2;
        Some(out)
    }
}

fn longest_binary_run<T: Into<u128>>(n: T) -> usize {
    let mut biterator = Biterator::from(n);
    let mut run = 0;
    let mut max_run = 0;

    while let Some(bit) = biterator.next() {
        if bit { run += 1; } else { run = 0; }
        if run > max_run { max_run = run; }
    }

    max_run
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(longest_binary_run(156u16),  3);
        assert_eq!(longest_binary_run(1979u16), 4);
        assert_eq!(longest_binary_run(2731u16), 2);
        assert_eq!(longest_binary_run(2185u16), 1);
    }
}
