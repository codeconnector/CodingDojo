function balancedBrackets(str) {
  let testArr = [];
  for (let i = 0; i < str.length; i++) { //loop through each char in the string
    if (Object.values(matcher).includes(str[i])) {
      testArr.push(str[i]); //if the char is any kind of open bracket, add it to the end of testArr.
    } else if (Object.keys(matcher).includes(str[i]) && 
              testArr.pop() !== (matcher[str[i]])) {
      return false; //if the char is any kind of closed bracket, pop off the last item in testArr and check if it is the corresponding open bracket. If not, return false. Otherwise, continue.
    }
    //if the char is not a bracket, do nothing!
  }
  return !testArr.length; //if you have made it through the entire string without returning false, check to see if testArr is empty. If so, return true. Return false if there are unmatched brackets remaining.
}

const matcher = { //the matcher object holds the corresponding pairs of brackets as keys and values
  ')': '(',
  ']': '[',
  '}': '{', 
} 
