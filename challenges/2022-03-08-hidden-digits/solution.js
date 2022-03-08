// # Hidden Digits

// You are given a string `time` in the form of `hh:mm`, where some of the digits in the string are _hidden_ (represented by `?`).

// Return the _**LATEST valid time**_ you can get from `time` by replacing the hidden digits.

// The valid times are those inclusively between `00:00` and `23:59`.

// ## Business Rules/Errata

// - `time` is a string in the format `hh:mm`
// - It is guaranteed that you can produce a valid time from the given string.
// - Your function should return a string.

// ## Examples

// ```
// hiddenDigits("2?:?0") -> "23:50"
// hiddenDigits("0?:3?") -> "09:39"
// hiddenDigits("?7:?1") -> "17:51"
// hiddenDigits("1?:22") -> "19:22"
// hiddenDigits("00:00") -> "00:00"
// hiddenDigits("??:??") -> "23:59"
// ```

// ## Tackling This Challenge

function hiddenDigits(time) {
  //Type your solution here
}

module.exports = { hiddenDigits };
