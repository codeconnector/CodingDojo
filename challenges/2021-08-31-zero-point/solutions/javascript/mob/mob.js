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

    pushValue(value) {
        // Check if value is empty
        if (typeof this.value == "undefined") {
            this.value = value;
        } else {
            if (!this.next) {
                // If node doesn't reference a node after it, reference a newly created node
                this.next = new ListNode();     
            }
            // Add value to referenced node
            this.next.pushValue(value);    
        }    
    }
}

function removeZeroSequences(input) {
    
    // Entry to linked list
    let current = input 
    
    // Store output sequence of nodes that aren't involved in zero sum subsets 
    let output = new ListNode();

    // Iterate over the linked list 
    while(current) {
        let total = current.value; // Set variable to store total and initialize with current node's value
        let end = current.next; // The end of the subsequence, following the `current` start position 

      
        // Continue adding to the total while the total is not zero AND there are still nodes to check 
        while(total !== 0 && end) {
            
            total += end.value; // Add end node's value to total   
            end = end.next; // Advance to the next node  
        }

        // If total equals zero
        if (total === 0) {
            // if sum of the sub-sequence from `current` to `end`, not inclusive of `end`, is `0`,
            // move `current` node position to `end` to start checking again
            current = end; 
        } else {
            // `current` is not a part of a subsequence that sums to `0`
            // so add its value to the `output` and start checking from the next node in sequence
            output.pushValue(current.value);
            current = current.next;
        }
    }

    if (output.value === undefined) {
        // if no values are pushed to output, return null
        return null;
    } else {
        // otherwise, return the output of values that did not contribute to the
        // consecutive zero sum subsequence
        return output;
    }   
}

module.exports = { ListNode, removeZeroSequences };