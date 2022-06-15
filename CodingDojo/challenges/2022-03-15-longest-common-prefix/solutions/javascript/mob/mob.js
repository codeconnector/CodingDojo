// # Longest Common Prefix
//
// Given a list of strings, return a string containing the longest prefix in
// common amongst all the provided strings.
//
// ## Business Rules/Errata
//
// - Your input will be a list of strings, and will contain at least one string.
// - Each string will contain one or more characters.
// - Your function should return a string.
// - In cases where no common prefix exists, return an empty string.
//
// ## Examples
//
// ```
// strings = ["flower", "flowed", "flicker"]
// longest_common_prefix(strings) // "fl"
// ```
//
// ```
// strings = ["pickle", "pickup", "pico", "picture"]
// longest_common_prefix(strings) // "pic"
// ```
//
// ```
// strings = ["butcher", "baker", "candlestick maker"]
// longest_common_prefix(strings) // ""
// ```

function binaryPrefix(string1, string2) {
	let prefix = "";
	for (let i = 0; i < string1.length; i++) {
		if (string1[i] === string2[i]) {
			prefix += string1[i];
		} else {
			break;
		}
	}
	return prefix;
}

function longestCommonPrefix(strings) {
	//Type your solution here

	//SOLUTION 1
	//return strings.reduce(binaryPrefix);

	//SOLUTION 2

	let commonPrefix = strings[0];
	for (let str of strings) {
		commonPrefix = binaryPrefix(commonPrefix, str);
		if (!commonPrefix) {
			return "";
		}
	}

	return commonPrefix;
}

module.exports = { longestCommonPrefix };
