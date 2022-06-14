// # Zero Point
// 
// Given a linked list, remove all consecutive nodes that sum to zero. 
// For example, suppose you are given the input `3 -> 4 -> -7 -> 5 -> -6 -> 6`. In
// this case, you should first remove `3 -> 4 -> -7`, then `-6 -> 6`, leaving only `5`.
// 
// ## Business Rules/Errata
// 
// - ***Data Structure Required: Linked List***
// - Your input will be a linked list, where each node represents either a positive or
//   negative integer.
// - Your return value should be in the form of a linked list containing only nodes
//   that are not part of a consecutive sequence that sums to zero.
// - If your input linked list does not contain any nodes that qualify to be returned
//   (such as `1 -> -1`), return `NULL` (or your language's equivalent).
// - Your input will contain at least one node with a value.

class ListNode {
    constructor(value) {
        this.value = value
        this.next = null                
    }
}

function removeZeroSequences(input) {
    // Insert your solution code here
}

module.exports = { ListNode, removeZeroSequences };
