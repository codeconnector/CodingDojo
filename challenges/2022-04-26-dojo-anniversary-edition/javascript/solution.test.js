const { Block } = require('./solution')

test("Level 1: Can move once when the block is tall", () => {
  const tallBlock = new Block([[0, 0]]);
  const expectedAnswers = [
    {
      direction: 'L',
      result: [[0, -2], [0, -1]],
    },
    {
      direction: 'R',
      result: [[0, 1], [0, 2]],
    },
    {
      direction: 'U',
      result: [[-1, 0], [-2, 0]],
    },
    {
      direction: 'D',
      result: [[1, 0], [2, 0]],
    },
  ];
  expectedAnswers.forEach(answerObj => {
    const { direction, result: expectedResult } = answerObj;
    const actualResult = tallBlock.level1(direction);
    expect(actualResult.length).toEqual(2);
    expect(actualResult.every(item => item.length === 2)).toBeTruthy();
    expect(actualResult.every((pair, i) => pair.every((coord, j) => coord === expectedResult[i][j]))).toBeTruthy();
  })
});

test("Level 1: Can move once when the block is lying horizontally", () => {
  const horizontalBlock = new Block([[0, -1], [0, 0]]);
  const expectedAnswers = [
    {
      direction: 'L',
      result: [[0, -2]],
    },
    {
      direction: 'R',
      result: [[0, 1]],
    },
    {
      direction: 'U',
      result: [[-1, -1], [-1, 0]],
    },
    {
      direction: 'D',
      result: [[1, -1], [1, 0]],
    },
  ];
  expectedAnswers.forEach(answerObj => {
    const { direction, result: expectedResult } = answerObj;
    const actualResult = horizontalBlock.level1(direction);
    expect(actualResult.length).toEqual(expectedResult.length);
    expect(actualResult.every(item => item.length === 2)).toBeTruthy();
    expect(actualResult.every((pair, i) => pair.every((coord, j) => coord === expectedResult[i][j]))).toBeTruthy();
  })
});

test("Level 1: Can move once when the block is lying vertically", () => {
  const verticalBlock = new Block([[-1, 0], [0, 0]]);
  const expectedAnswers = [
    {
      direction: 'L',
      result: [[-1, -1], [0, -1]],
    },
    {
      direction: 'R',
      result: [[-1, 1], [0, 1]],
    },
    {
      direction: 'U',
      result: [[-2, 0]],
    },
    {
      direction: 'D',
      result: [[1, 0]],
    },
  ];
  expectedAnswers.forEach(answerObj => {
    const { direction, result: expectedResult } = answerObj;
    const actualResult = verticalBlock.level1(direction);
    expect(actualResult.length).toEqual(expectedResult.length);
    expect(actualResult.every(item => item.length === 2)).toBeTruthy();
    expect(actualResult.every((pair, i) => pair.every((coord, j) => coord === expectedResult[i][j]))).toBeTruthy();
  })
});

test("Level 2: Can move the block in a small circle", () => {
  const block = new Block([[0, 0]]);
  const directionsArr = ['U', 'R', 'D', 'L'];
  const expected = [[-1, 0], [0, 0]];
  const actual = block.level2(directionsArr);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
});

test("Level 2: Can move the block in a bigger circle", () => {
  const block = new Block([[0, 0]]);
  const directionsArr = ['U', 'U', 'L', 'L', 'D', 'D', 'R', 'R'];
  const expected = [[0, 0]];
  const actual = block.level2(directionsArr);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
});

test("Level 2: Can move diagonal there and back", () => {
  const block = new Block([[0, 0]]);
  const directionsArr = ['D', 'R', 'D', 'R', 'U', 'L', 'U', 'L'];
  const expected = [[0, 0]];
  const actual = block.level2(directionsArr);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
});

test("Level 2: Can make the block meander around", () => {
  const block = new Block([[0, 0]]);
  const directionsArr = ['R', 'U', 'R', 'D', 'R', 'U', 'R', 'D'];
  const expected = [[0, 5], [0, 6]];
  const actual = block.level2(directionsArr);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
});