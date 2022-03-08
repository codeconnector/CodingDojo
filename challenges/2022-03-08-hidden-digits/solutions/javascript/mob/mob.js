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

// What we want to keep track of:
// Time - ‘hh:mm’
// Hours
// Minutes
// Max Hours / Max Minutes
// What we want to do:
// 	Check the “other digit”
// Hours: if both are ‘?’ replace with ‘23’
// If first digit is “?” If the second is less than ‘4’ first digit is ‘2’ otherwise ‘1’
// If second digit is “?” if first digit is 0, or 1, second digit must be ‘9’ 
// If first digit is ‘2’ second digit is ‘3’
// Minutes: If first minutes digit is “?” - change to “5”
// 	If second digit is “?” - change “9”
// Return the adjusted time


// ## Tackling This Challenge

function hiddenDigits(time) {
  //Type your solution here

//   What we want to keep track of:
// Time - ‘hh:mm’
// Hours
let hours = time.substring(0,2)
// Minutes
let minutes = time.substring(3)
// Max Hours / Max Minutes
// What we want to do:
// 	Check the “other digit”
// Hours: if both are ‘?’ replace with ‘23’
if(hours === '??'){
  hours = '23'
}
// If first digit is “?” If the second is less than ‘4’ first digit is ‘2’ otherwise ‘1’
else if(hours[0] === '?'){
  hours = (hours[1] < '4' ? '2' : '1') + hours[1]
}
// If second digit is “?” if first digit is 0, or 1, second digit must be ‘9’ 
else if(hours[1] === '?'){
  hours = hours[0] + (hours[0] === '2' ? '3' : '9')
}
// If first digit is ‘2’ second digit is ‘3’
// Minutes: If first minutes digit is “?” - change to “5”
if(minutes[0] === '?'){
  minutes = '5' + minutes[1]
}
// 	If second digit is “?” - change “9”
if(minutes[1] === '?'){
  minutes = minutes[0] + '9'
}
// Return the adjusted time
return hours + ':' + minutes
}

module.exports = { hiddenDigits };
