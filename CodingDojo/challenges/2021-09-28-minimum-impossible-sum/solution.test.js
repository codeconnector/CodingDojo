const { minImpossibleSum } = require('./solution');

test('Return 1 if array is length 1 and num is greater than 1', () => {
    expect(minImpossibleSum([5])).toStrictEqual(1);
})

test('Return 2 if array is length 1 and num is 1', () => {
    expect(minImpossibleSum([1])).toStrictEqual(2);
})

test('Return a sum where only a subset of the numbers is used', () => {
    expect(minImpossibleSum([1, 2, 3, 10])).toStrictEqual(7)
})

test('Return a sum where all of the numbers are used', () => {
    expect(minImpossibleSum([1, 2, 3, 7, 10])).toStrictEqual(24)
})
