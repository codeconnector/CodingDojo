function palindrome(word){
  let removeUnwantedCharacters = /[\W_]/g;
  let validatedString = word.toLowerCase().replace(removeUnwantedCharacters, '');
  let reverseString = validatedString.split('').reverse().join('');
  return reverseString === validatedString; 
}
palindrome('A cara rajada da jararaca')