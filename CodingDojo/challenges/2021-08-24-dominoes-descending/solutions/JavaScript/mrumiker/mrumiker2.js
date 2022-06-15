function topple(str) {
  const domArr = [...str], //domArr starts out as an array copy of the input string. We will edit domArr as we go, join it back into a string, and return it as our answer
        Length = str.length; // we're going to use this a lot, so let's set it to a const
  let i = j = k = gap = 0;
  for (i = 0; i < Length; i++) { //i is the 'walker' - just stepping through the string looking for R's and L's

    if (str[i] === 'R') {

      for (j = i + 1; j < Length; j++) { //If i finds an 'R', we send j, the 'runner', to the right to find the next letter in the string (j ignores all the dots)

        if (str[j] === 'R') {
          for (k = i + 1; k < j; k++) domArr[k] = 'R';
          i = j - 1;
          break;
        } //if the next letter is also an 'R', we send k, the 'painter', to fill in all the intervening dots with 'R'. Then, we move i forward to skip over all the spaces we just filled, since those are  done now. 

        if (str[j] === 'L') {
          gap = (j - i - 1) / 2;
          for (k = i + 1; k <= i + gap; k++) domArr[k] = 'R';   
          for (k = j - 1; k >= j - gap ; k--) domArr[k] = 'L'; 
          i = j;
          break;
        } //if the next letter is an 'L', we send k, the 'painter', to fill in half the intervening dots with 'R' and half with 'L', meeting in the middle. If there is an odd number of spaces between the 'R' and the 'L', we leave one dot standing in the middle. Then, we move i forward to skip over all the spaces we just filled, since those are  done now. 

        if (j === Length - 1) {
          for (k = i + 1; k < Length; k++) domArr[k] = 'R';
          return domArr.join('');
        } //if j makes it all the way to the end of the string without finding another letter, we replace the all the dots from 'R' to the end with 'R'. Since we are now at the end of the string, we are done and can return an answer!

      }

    } else if (str[i] === 'L') {

      for (j = i - 1; j >= 0; j--) { //If i finds an 'L', we send j, the 'runner', to the left to find the next letter in the string (j ignores all the dots)


        if (str[j] === 'L') {
          for (k = i - 1; k > j; k--) domArr[k] = 'L';  
          break;
        } //if the next letter to the left is also an 'L', we send k, the 'painter', to fill in all the intervening dots with 'L'.  

        //note that 'j' will never find an 'R' to the left of an 'L' because that situation was already convered in lines 17-23 and we would have now moved past that area in the string

        if (!j) {
          for (k = i - 1; k >= 0; k--) domArr[k] = 'L';     
        } //if j makes it all the way to the beginning of the string without finding another letter, we replace all dots from 'L to the beginning with 'L'. 
      }
    } 
  }
  return domArr.join(''); //once i has made it through the string, return the transformed arr as a string
}
