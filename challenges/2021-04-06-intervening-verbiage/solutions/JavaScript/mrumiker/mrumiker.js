function interveningVerbiage(word1, word2, sentence) {
  
  const strArr = sentence.split(' '),
        word1Index = strArr.indexOf(word1), 
        word2Index = strArr.indexOf(word2);

  if (word1Index === -1 || word2Index === -1) return "The words must be in the list.";
  
  return Math.abs(word1Index - word2Index) - 1;

}
