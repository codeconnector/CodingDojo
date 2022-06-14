getLines(n) {
  
 if (!n) return ''; //if n === 0, return the empty string
  
 const strArr = ["1"]; //since n must be at least 1, start our array with "1" 

 for (let i = 0; i < n - 1; i++) { //loop through strArr. We will examine each element and then add the next element based on what we find. We skip the nth element because we don't need to examine it (once we create the nth element, we're done)
   let bigStr = '', // start with an empty string - we will add to this
       count = 1; // start number counter at 1 (we will always have one of whatever number to start)
   const currentStr  = strArr[i]; // set the current string we are examining to a named variable for readability
   for (let j = 0; j < currentStr.length; j++) { // loop through currentStr, keeping track of number streaks
     if (currentStr[j] === currentStr[j + 1]) { // if the current number and the next number are the same...
       count++; //add one to the counter
     } else { //otherwise...
       bigStr += count + currentStr[j]; //we are at the end of a number streak, so take the final count and the number in question, smash them together, and add the result to the end of the big String
       count = 1; // don't forget to reset the counter
     }
   }
   strArr.push(bigStr); //once we get through currentStr, push the resulting big String of counts and numbers into strArr. bigStr will be reset to empty when the loop repeats (line 8)
  }
 return strArr.join(','); //when we have n elements in strArr, join and return the array
}

console.log(getLines(2));  //  "1,11"
console.log(getLines(3));  //  "1,11,21"
console.log(getLines(5));//  "1,11,21,1211,111221"
