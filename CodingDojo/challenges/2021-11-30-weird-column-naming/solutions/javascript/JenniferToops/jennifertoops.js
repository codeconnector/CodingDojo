// # Weird Column Naming
//
// Spreadsheets often use an alphabetical encoding for naming columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....
// 
// Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".
//
// ## Business Rules/Errata
//
// - Your function should take an unsigned integer greater than 0. Return an error if a number 0 or less is given.
// - Hint: Note that the format "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", .... does not support the concept of "zero".
// - This  challenge should be attempted with at Test-Driven Development (TDD) methodology. For more information on TDD, see [this video](https://www.youtube.com/watch?v=llaUBH5oayw).
//
// ## Examples
// 
// ```
// to_spreadsheet_colname(1);     // "A"
// to_spreadsheet_colname(27);    // "AA"
// to_spreadsheet_colname(52);    // "AZ"
// to_spreadsheet_colname(287);   // "KA"
// ```

function to_spreadsheet_colname(integer) {
    // insert your solution code here
    let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let remainderArray = []
    let quotient = integer

    while (quotient > 0) {
        let remainder = (quotient - 1) % 26
        remainderArray.push(remainder)
        quotient = Math.floor((quotient - 1) / 26) 
    }

    let answer = remainderArray.map(el => alpha[el]).reverse().join("")
    return answer
}

module.exports = { to_spreadsheet_colname };

