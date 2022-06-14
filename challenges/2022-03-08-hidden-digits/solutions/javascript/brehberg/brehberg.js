// # Hidden Digits
// You are given a string `time` in the form of `hh:mm`, where some of the digits in the string are _hidden_ (represented by `?`).
// Return the _**LATEST valid time**_ you can get from `time` by replacing the hidden digits.
// The valid times are those inclusively between `00:00` and `23:59`.

function hiddenDigits(time) {
  return time
    .trim() // Time - ‘hh:mm’ - Hours and Minutes
    .replace(/^\?\?/, "23") // Hours: if both are “?” replace with ‘23’
    .replace(/^\?([0-4])/, "2$1") // If first is “?” and second is less than 4, first is ‘2’
    .replace(/^\?([5-9])/, "1$1") // If first is “?” and second is not less than 4, otherwith ‘1’
    .replace(/^([0-1])\?/, "$19") // If second is “?” and first is 0 or 1, second must be ‘9’
    .replace(/^(2)\?/, "23") //  If second is "?" and first digit is 2, second must be ‘3’
    .replace(/:\?/, ":5") // Minutes: If first minutes digit is “?” - change to “5”
    .replace(/\?$/, "9"); //   If second minutes digit is “?” - change to '9'
}

module.exports = { hiddenDigits };
