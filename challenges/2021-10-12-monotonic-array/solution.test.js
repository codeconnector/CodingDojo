const { isMonotonic } = require('./solution');

// ```
// is_monotonic([]) // True
// is_monotonic([1]) // True
// is_monotonic([1, 2]) // True
// is_monotonic([2, 2, 2, 2]) // True
// is_monotonic([-5, -4, -3, -2, -1, 0, 1]) // True
// is_monotonic([2, 1, 2, 3, 4, 5]) // False
// is_monotonic([1, 1, 0, 0, -1, -1, -2, -2]) // True
// is_monotonic([5, 4, 3, 3, 3, 2, 1]) // True
// ```

test('Should identify an empty array as monotonic', () => {
    let result = isMonotonic([]);
    expect(result).toBe(true);
})

test('Should identify an array with one item as monotonic', () => {
    let result = isMonotonic([1]);
    expect(result).toBe(true);
})

test('Should identify an increasing array as monotonic', () => {
    let result = isMonotonic([1, 2, 3, 4, 5]);
    expect(result).toBe(true);
})

test('Should identify an array with a single repeating value as monotonic', () => {
    let result = isMonotonic([2, 2, 2, 2, ]);
    expect(result).toBe(true);
})

test('Should identify an array that decreases then increases as not monotonic', () => {
    let result = isMonotonic([5, 4, 3, 2, 1, 2]);
    expect(result).toBe(false);
})

test('Should identify an array that increases then decreases as not monotonic', () => {
    let result = isMonotonic([2, 1, 2, 3, 4, 5]);
    expect(result).toBe(false);
})

test('Should identify a decreasing array as monotonic', () => {
    let result = isMonotonic([5, 4, 3, 2, 1]);
    expect(result).toBe(true);
})

test('Should identify an increasing array with negative numbers as monotonic', () => {
    let result = isMonotonic([-5, -4, -3, -2, -1, 0, 1]);
    expect(result).toBe(true);
})

test('Should identify a decreasing array with negative numbers as monotonic', () => {
    let result = isMonotonic([1, 0, -1, -2, -3, -4, -5]);
    expect(result).toBe(true);
})


