const NestedIterator = require('./solution');

test('Can iterate through example nested array', () => {
    var nestedIterator = new NestedIterator([[9], [1, 7, 5], [2, 9], []]);
    expect(nestedIterator.next()).toBe(9);
    expect(nestedIterator.next()).toBe(1);
    expect(nestedIterator.next()).toBe(7);
    expect(nestedIterator.next()).toBe(5);
    expect(nestedIterator.next()).toBe(2);
    expect(nestedIterator.next()).toBe(9);
    expect(nestedIterator.next()).toBe(null);
})

test('Correctly indicates when the iterator has a next element', () => {
    var nestedIterator = new NestedIterator([[9], [1, 7, 5], [2, 9], []]);
    nestedIterator.next(); // 9
    expect(nestedIterator.has_next()).toBe(true);
    nestedIterator.next(); // 1
    nestedIterator.next(); // 7
    nestedIterator.next(); // 5
    expect(nestedIterator.has_next()).toBe(true);
    nestedIterator.next(); // 2
    expect(nestedIterator.has_next()).toBe(true);
    nestedIterator.next(); //9
    expect(nestedIterator.has_next()).toBe(false);
})
