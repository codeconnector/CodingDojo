const { countVotes } = require('./solution');

test('Correctly count with only one name', () => {
  const votes = ["eric"];
  const expected = "eric";
  const actual = countVotes(votes);
  expect(actual).toEqual(expected);
});

test('Correctly count with two names in a short array', () => {
  const votes = ["eric", "corey", "corey", "eric", "corey"];
  const expected = "corey";
  const actual = countVotes(votes);
  expect(actual).toEqual(expected);
});

test('Correctly count with two names in another short array', () => {
  const votes = ["corey", "eric", "corey", "corey", "eric"];
  const expected = "corey";
  const actual = countVotes(votes);
  expect(actual).toEqual(expected);
});

test('Correctly count with hecklers', () => {
  const votes = [
    "i like to move it move it", "eric", "corey", "corey",
    "the voting machine was hacked", "eric", "corey", "corey",
    "i voted third party", "corey", "eric", "corey",
    "it's nuk-U-lar", "corey", "corey", "eric",
    "corey", "corey", "corey", "eric",
  ];
  const expected = "corey";
  const actual = countVotes(votes);
  expect(actual).toEqual(expected);
});

test('Count lots of votes', () => {
  const votes = [];
  for (let i = 0; i < 100000; i++) {
    if (i % 2 == 0) {
      votes.push("bret")
    } else if (i % 3 == 0) {
      votes.push("corey")
    } else if (i % 5 == 0) {
      votes.push("eric")
    } else {
      votes.push("blame canada")
    }
  }
  votes.push("bret");
  const expected = "bret";
  const actual = countVotes(votes);
  expect(actual).toEqual(expected);
});

