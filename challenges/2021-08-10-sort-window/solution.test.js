const { sortWindow } = require('./solution');

test('Identify a sort window in the middle of the array', () => {
    expect(sortWindow([3, 7, 5, 6, 9])).toStrictEqual([2, 4])
})

test('Identify a sort window at the end of the array', () => {
    expect(sortWindow([1, 2, 6, 5, 4])).toStrictEqual([3, 5])
})

test('Identify a sort window at the beginning of the array', () => {
    expect(sortWindow([3, 2, 1, 4, 5])).toStrictEqual([1, 3])
})

test('Identify a sort window that covers the whole array', () => {
    expect(sortWindow([5, 4, 3, 2, 1])).toStrictEqual([1, 5])
})

test('Identify an already sorted array', () => {
    expect(sortWindow([1, 2, 3, 4, 5])).toStrictEqual([])
})

test('Identify a single item array as already sorted', () => {
    expect(sortWindow([1])).toStrictEqual([])
})

test('Identify an empty array as already sorted', () => {
    expect(sortWindow([])).toStrictEqual([])
})

