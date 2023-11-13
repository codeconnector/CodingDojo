const { reverseWords } = require('./solution');

test('An empty string reversed is an empty string', () => {
  const input = "";
  const expected = "";
  const actual = reverseWords(input);
  expect(actual).toEqual(expected);
});

test('Single letter words are unchanged', () => {
  const input = "a b c";
  const expected = "a b c";
  const actual = reverseWords(input);
  expect(actual).toEqual(expected);
});

test('Single words are reversed', () => {
  const input = "Spooky";
  const expected = "ykoopS";
  const actual = reverseWords(input);
  expect(actual).toEqual(expected);
});

test('Multiple words are reversed', () => {
  const input = "Under your bed";
  const expected = "rednU ruoy deb";
  const actual = reverseWords(input);
  expect(actual).toEqual(expected);
});

// The tests below are optional and make the solution more complex.
// A more complex solution should pass all tests, including the
// tests above.

// test('Leave multiple spaces intact', () => {
//   const input = "Under  your  bed";
//   const expected = "rednU  ruoy  deb";
//   const actual = reverseWords(input);
//   expect(actual).toEqual(expected);
// });

// test('Also handles newline separators', () => {
//   const input = "This\nis spooky";
//   const expected = "sihT\nsi ykoops";
//   const actual = reverseWords(input);
//   expect(actual).toEqual(expected);
// });

// test('Ignore ellipsis for drama', () => {
//   const input = "Hello...";
//   const expected = "olleH...";
//   const actual = reverseWords(input);
//   expect(actual).toEqual(expected);
// });