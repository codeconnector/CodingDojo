const { commonElements } = require('./solution');

test('should handle negatives', () => {
    const arr1 = [-1, 3, 4, 6, 7, 9];
    const arr2 = [1, 3];
    const expected = [3];
    const actual = commonElements(arr1, arr2);
    expect(actual).toEqual(expected);
});

test('interleaved results', () => {
    const arr1 = [1, 3, 4, 6, 7, 9];
    const arr2 = [1, 2, 3, 4, 7, 10];
    const expected = [1, 3, 4, 7];
    const actual = commonElements(arr1, arr2);
    expect(actual).toEqual(expected);
});

test('should contain all of arr2, handling duplicates in arr1', () => {
    const arr1 = [1, 2, 2, 2, 3, 4, 5];
    const arr2 = [1, 2, 4, 5];
    const expected = [1, 2, 4, 5];
    const actual = commonElements(arr1, arr2);
    expect(actual).toEqual(expected);
});

test('should handle no overlap returning an empty result', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [10, 12, 13, 15];
    const expected = [];
    const actual = commonElements(arr1, arr2);
    expect(actual).toEqual(expected);
});

test('should handle repeated numbers in both arrays', () => {
    const arr1 = [3, 3, 4, 6, 7, 9];
    const arr2 = [1, 2, 2, 2, 3, 4, 10];
    const expected = [3, 4];
    const actual = commonElements(arr1, arr2);
    expect(actual).toEqual(expected);
});