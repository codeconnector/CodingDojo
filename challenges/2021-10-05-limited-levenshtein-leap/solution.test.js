const { findTransformSequence } = require('./solution');

test('Should find the path when there is only one step', () => {
    let start = "car";
    let end = "cat";
    let words = ["cat"];
    let result = findTransformSequence(start, end, words);
    let expected = ["car", "cat"];
    expect(result).toStrictEqual(expected);
})


test('Should find the path through the example case', () => {
    let start = "dog";
    let end = "cat";
    let words = ["dop", "dot", "cop", "cap", "car", "cat"];
    let result = findTransformSequence(start, end, words);
    let expected = ["dog", "dop", "cop", "cap", "cat"];
    expect(result).toStrictEqual(expected);
})


test('Should identify when there is no solution', () => {
    let start = "bears";
    let end = "share";
    let words = ["truck", "frond", "crank", "drops", "blame", "share"];
    let result = findTransformSequence(start, end, words);
    let expected = null;
    expect(result).toStrictEqual(expected);
})


test('Should find the shortest path when more than one path exists', () => {
    let start = "food";
    let end = "dung";
    let words = ["frod", "frog", "grog", "guog", "gung", "dung", "fond", "fund", "fung"];
    let result = findTransformSequence(start, end, words);
    let expected = ["food", "fond", "fund", "fung", "dung"];
    expect(result).toStrictEqual(expected);
})


test('Should find the path when there is a potential for an infinite loop', () => {
    let start = "tot";
    let end = "kid";
    let words = ["tod", "tid", "tim", "tom", "kim", "kid"];
    let result = findTransformSequence(start, end, words);
    let expected = ["tot", "tod", "tid", "kid"];
    expect(result).toStrictEqual(expected);
})
