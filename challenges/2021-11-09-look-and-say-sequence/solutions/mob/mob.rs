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

// These are the types and traits that need to be imported from the standard library for
// this solution. In Rust, you need to import a type or trait (most of the time) in
// order to use it. If you forget, the compiler will usually tell you which one you need.
use std::fmt::{Display, Formatter};
use std::iter::{FromIterator, Peekable};
use std::str::Chars;

/// Returns the first `n` "look and say numbers" 
/// This is the main function, which creates a "look and say" iterators, takes `n`
/// elements from it, then collects those elements into a Vec and returns the Vec.
/// Everything else in this file supports this 'one-line' solution.
#[allow(dead_code)] // Keeps the compiler from complaining
fn get_lines(n: usize) -> Vec<usize> {
    LookAndSayIter::new().take(n).collect()
}

//--------------------------------------------------------------------------------------
//-- Unfortunately, the Rust standard library does not contain an Iterator that can,
//-- given an input Iterator, return 'groups' of elements that have the same value.
//-- `Groups` provides that Iterator, sequentially returning a `Group`, which is a
//-- thin wrapper type around a Vec of whatever type of value is being grouped. The
//-- entire purpose of `Group` is to provide the `.rle()` method, which returns
//-- the number of values in `Group` and the identity of that repeated value.
//--------------------------------------------------------------------------------------

struct Group<T>(Vec<T>);

impl<T: Copy> Group<T> {
    fn new() -> Self {
        Group(Vec::new())
    }

    fn push(&mut self, value: T) {
        self.0.push(value);
    }

    /// Group[1, 1, 1].rle() -> (3, 1)
    fn rle(&self) -> Option<(usize, T)> {
        let length = self.0.len();
        self.0.first().map(|v| (length, *v))
    }
}

/// `Groups` transforms an Iterator that returns an item T into an iterator that
/// returns `Vec<T>` containing contiguous regions of repeated T values, where T
/// can be any type that implements PartialEq (for comparison) and Copy (for cheap
/// copying of the underlying data).
struct Groups<T, I>(Peekable<I>)
where
    T: PartialEq + Copy,
    I: Iterator<Item = T>;

impl<T, I> Iterator for Groups<T, I>
where
    T: PartialEq + Copy,
    I: Iterator<Item = T>,
{
    type Item = Group<T>;

    /// Each time `next()` is called (implicit in for loops), take a look at the next 
    /// item in the inner iterator (`self.0.peek()`). If there are any items left, 
    /// gather up all the next items in sequence with the same value, and return
    /// those collected items.
    fn next(&mut self) -> Option<Self::Item> {
        let next_value = match self.0.peek() {
            None => return None,
            Some(value) => *value,
        };

        let mut group = Group::new();
        while let Some(value) = self.0.next_if_eq(&next_value) {
            group.push(value);
        }
        Some(group)
    }
}

/// This trait allows for attaching the functionality of the `.grouped()` method to 
/// other Iterators, such as `Chars` below, the Iterator over the characters in a 
/// string slice. Just creates a new `Groups` Iterator wrapping whatever Iterator
/// invokes the `.grouped()` method.
trait Grouped<T, I>
where
    T: PartialEq + Copy,
    I: Iterator<Item = T>,
{
    fn grouped(self) -> Groups<T, I>;
}

/// "hi".chars().grouped() -> Groups("hi") -> [(1, 'h'), (1, 'i')]
impl<'a> Grouped<char, Chars<'a>> for Chars<'a> {
    fn grouped(self) -> Groups<char, Chars<'a>> {
        Groups(self.peekable())
    }
}


//--------------------------------------------------------------------------------------
//-- A `RunLengthEncoding` is a thin wrapper around a Vec containing items in the format
//-- of (<run length>, <value>). This type implements `FromIterator` to allow for the
//-- use of the `.collect()` function to gather the items from an iterator into a 
//-- RunLengthEncoding. This type also implements `Display` to allow for `.to_string()`
//-- to directly convert a RunLengthEncoding to a printable String.
//-- The `RunLengthEncode` trait provides the `.run_length_encode()` function, which
//-- is implemented for string slices to allow for easy transformation of a string
//-- slice into a RunLengthEncoding<char>. This is the main workhorse of this solution
//-- which allows conversion of "1112211" into RunLengthEncoding[(3, 1), (2, 2), (2, 1)].
//--------------------------------------------------------------------------------------

#[derive(Debug)]
struct RunLengthEncoding<T>(Vec<(usize, T)>);

/// [(3, 1), (2, 2), (2, 1)].collect() -> RunLengthEncoding[(3, 1), (2, 2), (2, 1)]
impl<T> FromIterator<(usize, T)> for RunLengthEncoding<T> {
    fn from_iter<I: IntoIterator<Item = (usize, T)>>(iter: I) -> Self {
        RunLengthEncoding(iter.into_iter().collect())
    }
}

/// Provides the functionality for RunLengthEncoding[(3, 1), (2, 2), (2, 1)].to_string()
/// to return "312221".
impl<T: Display> Display for RunLengthEncoding<T> {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        for pair in &self.0 {
            write!(f, "{}{}", pair.0, pair.1)?;
        }
        write!(f, "")
    }
}

trait RunLengthEncode<T> {
    fn run_length_encode(&self) -> Option<RunLengthEncoding<T>>;
}

impl RunLengthEncode<char> for &str {
    /// "111".run_length_encode() -> RunLengthEncoding[(3, '1')]
    fn run_length_encode(&self) -> Option<RunLengthEncoding<char>> {
        // An empty string returns a None, since it contains no characters
        if self.is_empty() { return None; }

        // Otherwise, the string is split into characters, grouped by value, and
        // each group is run length encoded.
        self.chars().grouped().map(|group| group.rle()).collect()
    }
}


//--------------------------------------------------------------------------------------
//-- The `LookAndSayIter` is a thin wrapper around a String value that generates the
//-- next "look and say" value in sequence each time `.next()` is called. In the 
//-- `get_lines(5)` function, `.take(5)` calls `.next()` 5 times and collects the
//-- results into the answer. The `LookAndSayIter` stores the string representation
//-- of the last returned value, used to calculate the next returned value.
//--------------------------------------------------------------------------------------

#[derive(Debug)]
struct LookAndSayIter(String);

impl Iterator for LookAndSayIter {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        // If the wrapped String is empty (which means run length encoding it returns
        // `None`), then we initialize the wrapped String with "1", otherwise
        // just use the value we get back from run length encoding the last returned
        // value.
        self.0 = match self.0.as_str().run_length_encode() {
            None => String::from("1"),
            Some(rle) => rle.to_string(),
        };
        self.0.parse::<usize>().ok()
    }
}

impl LookAndSayIter {
    fn new() -> Self {
        LookAndSayIter(String::new())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_properly_run_length_encode_a_number() {
        let input = "111221";
        let expected = "312211";
        assert_eq!(
            input.run_length_encode().unwrap().to_string(),
            String::from(expected)
        );
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
}
