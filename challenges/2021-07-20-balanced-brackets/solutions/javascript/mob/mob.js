// # Balanced Brackets
//
// Given a string of round, curly, and square open and closing brackets, return
// whether the brackets are balanced (well-formed).
//
// For example, given the string "([])[]({})", you should return true.
// Given the string "([)]" or "((()", you should return false.
//
// ## Business Rules/Errata
//
// - The only characters considered to be 'brackets' are `(`, `)`, `[`, `]`, `{`,
//   and `}`.
// - Your input will always be a string.
// - An empty string is considered balanced (return true).
// - **Your string may contain characters that are not brackets.**
//
// ## Examples
//
// ```
// balanced_brackets("[[]]({}[])");       // true
// balanced_brackets("[[({}[])");         // false
// balanced_brackets("");                 // true
// balanced_brackets("(5 * 3) + 4");      // true
// ```

function balancedBrackets(input) {
    // Insert your solution code here
    let stack = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "[" || input[i] == "(" || input[i] == "{") {
            stack.push(input[i]);
        }
        if (input[i] == "]" || input[i] == ")" || input[i] == "}") {
            let compare = stack.pop();
            if (compare == undefined) return false;
            if (compare == '(' && input[i] != ")") return false;
            if (compare == '{' && input[i] != "}") return false;
            if (compare == '[' && input[i] != "]") return false;
        }
    }

    return stack.length == 0;
}

module.exports = balancedBrackets;
