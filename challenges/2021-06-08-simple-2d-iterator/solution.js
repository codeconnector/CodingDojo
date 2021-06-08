// # Simple 2D Iterator
// 
// Implement a class (or struct, or object) representing a 2-dimensional iterator.
// This class should be initialized with a 2-dimensional (nested) array, and should
// implement two methods:
// 
// - `next()` returns the next element in the array of arrays
// - `has_next()` returns true/false indicating whether the iterator still has elements
//    left
// 
// ## Business Rules/Errata
// 
// - ***Data Structure Required: 2D Array***
// - Your class will need a constructor method (or other strategy) to accept a
//   2-dimensional array and produce an instance of your class.
// - You should not `flatten` or otherwise copy data out of the 2D array into another
//   data structure.
// - If you call `next()` on your class, and there are no elements left to return,
//   return `null` (or some other indicator that the iterator has been exhausted).

class NestedIterator {
    constructor(array) {
        // `array` should be a two-dimensional array
        this.array = array;
    }

    next() {
        // Insert solution code here
    }

    has_next() {
        // Insert solution code here
    }
}

module.exports = NestedIterator;
