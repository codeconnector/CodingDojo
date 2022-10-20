/*
Find Those Fives

Ah, children are truly a gift! Except, of course, when your extremely spoiled nephew is having a fifth birthday party, his parents are pushovers, and this little monster has a very specific request for his "favorite" uncle/aunt. See, a love of numbers runs in the family, and while this apple seems to have fallen from the tree, rolled down the hill a bit, and bumped into multiple roots on the way down, he wants to celebrate this momentous occasion by decorating his house with every number containing the digit 5. Now, of course, even his doting parents can't provide decorations containing every number, they wouldn't be done in time to make the cake or buy presents. On the other hand, they're somehow willing to decorate with an arbitrarily large set of numbers. In order to plan appropriately, they've requested (begged) you to devise some algorithm for determining how many times the digit 5 appears in a sequence of numbers.

Being the loving uncle/aunt you are (and secretly being glad this isn't your kid), you agree to write a function that, given a starting and ending number, will return a count of all the times the digit 5 appears.
Business Rules/Errate

    Your function should take two integers and return a single integer representing the number of times the digit 5 appears in the range.
    The range you inspect should be inclusive on both ends, so for the range from 1-5, you should inspect the numbers [1, 2, 3, 4, 5].
    Your given range will always have a smaller starting value than ending value.
    You should be prepared for negative numbers. (Who taught this kid about negative numbers!?)
    If a number in the sequence you inspect contains more than one 5, count each digit.

Examples

find_those_fives(1, 10)   -> 1  // [5]
find_those_fives(50, 60)  -> 11 // [50, 51, 52, 53, 54, 55 (x2), 56, 57, 58, 59]
find_those_fives(-6, 6)   -> 2  // [-5, 5]
find_those_fives(-15, -5) -> 2  // [-15, -5]
*/

function findThoseFives (num1, num2) {
	// type your solution here
	
};

module.exports = { findThoseFives };

