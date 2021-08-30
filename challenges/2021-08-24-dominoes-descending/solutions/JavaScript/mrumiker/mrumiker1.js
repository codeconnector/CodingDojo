function topple(str) {
  const domArr = [...str],//domArr starts out as an array copy of the input string. We will edit domArr as we go, join it back into a string, and return it as our answer
        Length = str.length; //set this to a constant, since we will be looping through the same string multiple times
  let done = false; // done is a boolean flag that we will use to figure out when to quit the following routine 
  while (!done) {
    done = true; //set done to true, ever optimistic that this will be our final time through
    for (let i = 0; i < Length; i++) { //loop over domArr, looking for dots
      if (domArr[i] === '.') { //if we find a dot...
        if (domArr[i - 1] === 'R' && domArr[i + 1] !== 'L') {//check to see if the dot has an 'R' before it and doesn't have an 'L' after it (a domino struck from both sides at the same time stays upright)
          domArr[i] = 'R';//if so, change the dot to R
          done = false; //set done to false, since we're going to have to scan through again
          i++; //we need to move forward one space, otherwise the 'R' we just created may be improperly detected by the function and the next domino would fall prematurely. We need to make sure that they fall just one step at a time.
          if (domArr[i] === '.' && domArr[i + 1] === 'L') { //because we just skipped forward a space, we have to check to see if this space is a dot and has a left-falling domino about to hit it. Otherwise this would be missed
            domArr[i] = 'L'; //if so, we need to make it an 'L'
            i++; //we know the next space is 'L', so we may as well skip it (though the function will still work without this)
          }
        } else if (domArr[i + 1] === 'L' && domArr[i - 1] !== 'R') {//check to see if the dot has an 'L' after it and doesn't have an 'R' before it (a domino struck from both sides at the same time stays upright)
          domArr[i] = 'L'; //if so, make the dot an 'L'
          done = false; //set done to false, since we're going to have to scan through again
          i++;//we know the next space is 'L', so we may as well skip it (though the function will still work without this)
        }
      }
    }
  } //if any new dominoes fell on this step, done has been set to false, and we return to line 5 and repeat. If there were no changes, done is true, and so we're done!
  return domArr.join('');
}
