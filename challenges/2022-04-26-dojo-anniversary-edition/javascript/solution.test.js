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
    const { direction, result } = answerObj;
    const expectedResult = sortArr(result);
    const actualResult = sortArr(tallBlock.level1(direction));
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
    const { direction, result } = answerObj;
    const expectedResult = sortArr(result);
    const actualResult = sortArr(horizontalBlock.level1(direction));
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
    const { direction, result } = answerObj;
    const expectedResult = sortArr(result);
    const actualResult = sortArr(verticalBlock.level1(direction));
    expect(actualResult.length).toEqual(expectedResult.length);
    expect(actualResult.every(item => item.length === 2)).toBeTruthy();
    expect(actualResult.every((pair, i) => pair.every((coord, j) => coord === expectedResult[i][j]))).toBeTruthy();
  })
});

test("Level 2: Can move the block in a small circle", () => {
  const block = new Block([[0, 0]]);
  const directionsArr = ['U', 'R', 'D', 'L'];
  const expected = sortArr([[-1, 0], [0, 0]]);
  const actual = sortArr(block.level2(directionsArr));
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
  const expected = sortArr([[0, 5], [0, 6]]);
  const actual = sortArr(block.level2(directionsArr));
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
});

test("Level 3: Can move the block two spaces", () => {
  const block = new Block([[0, 0]]);
  const endPosition = [[-3, 0]];
  const expected = ['U', 'U'];
  const actual = block.level3(endPosition);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every((direction, i) => direction === expected[i])).toBeTruthy();
});

test("Level 3: Can move the block one space in a slightly tricky way", () => {
  const block = new Block([[0, 0]]);
  const expected = [[0, 1]];
  const actualPath = block.level3(expected);
  const actual = block.level2(actualPath);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
});

test("Level 3: Can move the block pretty far away", () => {
  const block = new Block([[0, 0]]);
  const expected = [[100, -123]];
  const actualPath = block.level3(expected);
  const actual = block.level2(actualPath);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
});

test("Level 4: The block can find the shortest short path", () => {
  const block = new Block([[0, 0]]);
  const expected = [[0, -1]];
  const actualPath = block.level4(expected);
  const actual = block.level2(actualPath);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
  expect(actualPath.length === 3);
});

test("Level 4: The block can find the shortest path down to the right", () => {
  const block = new Block([[0, 0]]);
  const expected = [[9, 9]];
  const actualPath = block.level4(expected);
  const actual = block.level2(actualPath);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
  expect(actualPath.length === 12);
});

test("Level 4: The block can find the shortest path up to the left", () => {
  const block = new Block([[0, 0]]);
  const expected = [[-8, -13]];
  const actualPath = block.level4(expected);
  const actual = block.level2(actualPath);
  expect(actual.length).toEqual(expected.length);
  expect(actual.every(item => item.length === 2)).toBeTruthy();
  expect(actual.every((pair, i) => pair.every((coord, j) => coord === expected[i][j]))).toBeTruthy();
  expect(actualPath.length === 15);
});

const sortArr = arr => [...arr].sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));