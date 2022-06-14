const { ListNode, removeZeroSequences } = require('./solution');

function toLinkedList(inputArr) {
  let head = new ListNode(inputArr[0]);
    let nextNode = head;

    for (let i = 1; i < inputArr.length; i++) {
    nextNode.next = new ListNode(inputArr[i]);
        nextNode = nextNode.next
  }

    return head
}

test('Remove one zero sequence from a linked list', () => {
    // 1 -> 2 -> -2 -> 3 yields 1 -> 3
    let input = toLinkedList([1, 2, -2, 3]);
    let expected = toLinkedList([1, 3]);
    expect(removeZeroSequences(input)).toStrictEqual(expected);
})

test('Remove zero sequence from beginning and end of linked list', () => {
    // 3 -> 4 -> -7 -> 5 -> -6 -> 6  yields 5
    let input = toLinkedList([3, 4, -7, 5, -6, 6]);
    let expected = toLinkedList([5])
    expect(removeZeroSequences(input)).toStrictEqual(expected);
})

test('Remove zero from linked list', () => {
    // 1 -> 0 -> 1 yields 1 -> 1
    let input = toLinkedList([1, 0, 1]);
    let expected = toLinkedList([1, 1])
    expect(removeZeroSequences(input)).toStrictEqual(expected);
})

test('Remove nested zero sequences from a linked list', () => {
    // 1 -> 2 -> 3 -> 4 -> -4 -> -3 -> 5 yields 1 -> 2 -> 5
    let input = toLinkedList([1, 2, 3, 4, -4, -3, 5]);
    let expected = toLinkedList([1, 2, 5]);
    expect(removeZeroSequences(input)).toStrictEqual(expected);
})

test('Remove zero sequences containing more than two values', () => {
    // 2 -> 3 -> 4 -> 5 -> -9 yields 2 -> 3
    let input = toLinkedList([2, 3, 4, 5, -9]);
    let expected = toLinkedList([2, 3]);
    expect(removeZeroSequences(input)).toStrictEqual(expected);
})

test('Remove a zero sequence from the beginning of the linked list', () => {
    // 1 -> -1 -> -2 -> 3 yields -2 -> 3
    let input = toLinkedList([1, -1, -2, 3]);
    let expected = toLinkedList([-2, 3]);
    expect(removeZeroSequences(input)).toStrictEqual(expected);
})

test('Return null if all nodes are removed', () => {
    let input = toLinkedList([1, -10, 5, 4]);
    expect(removeZeroSequences(input)).toBe(null);
})

test('Return a single node', () => {
    let input = new ListNode(5);
    expect(removeZeroSequences(input)).toStrictEqual(input);
})

