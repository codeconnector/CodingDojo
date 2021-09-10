const { pickPeak } = require('./solution');

test('Find a peak in the middle', () => {
    expect(pickPeak([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual(7);
})

test('Find a peak in the middle, skip count', () => {
    expect(pickPeak([0, 25, 150, 600, 400, 225, 75])).toStrictEqual(600);
})

test('Find a peak at the end', () => {
    expect(pickPeak([2, 4, 6, 8])).toStrictEqual(8);
})

test('Find a peak at the beginning', () => {
    expect(pickPeak([100, 50, 25, 12.5, 6.25])).toStrictEqual(100);
})

test('Find a peak in a one-element array', () => {
    expect(pickPeak([99])).toStrictEqual(99);
})

test('Find a peak in a sneaky one-element array', () => {
    expect(pickPeak([0])).toStrictEqual(0);
})

test('Find a peak in a really big array, and time it!', () => {
    let input = [...Array(1000000).keys()];
    let t0 = performance.now();
    let result = pickPeak(input);
    let t1 = performance.now();
    console.log("Finding the peak of a big array took " + (t1 - t0) + " milliseconds.")
    expect(result).toStrictEqual(999999);
})

