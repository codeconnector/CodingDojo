// # Find Three Largest Numbers
// 
// Write a function that takes in an array of at least three integers and, without 
// sorting the input array, returns a sorted array of the three largest integers in
// the input array. The function should return duplicate integers if necessary. 
// 
// ## Business Rules/Errata
// 
// - The input array should have at least three integers. If it does not, you should
//   return a null value.
// - You may not sort the input array
// - The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]`
//   should return `[10, 10, 12]`
// - Constant space -> you will return a new array of 3 integers, and this will be the
//   only new data structure you create.
// - Linear time -> you should solve this problem by only passing through the array a
//   single time.

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class RunOfOnes {
    static int longestBinaryRun(int num) {
        // Insert your solution here
        return 3;
    }

    // Test case one
    @Test
    @DisplayName("For the number: 156")
    public void testCaseOne() {
        int result = longestBinaryRun(156);
        assertEquals(3, result);
    }

    // Test case two
    @Test
    @DisplayName("For the number: 1979")
    public void testCaseTwo() {
        int result = longestBinaryRun(1979);
        assertEquals(3, result);
    }

    // Test case three
    @Test
    @DisplayName("For the number: 2731")
    public void testCaseThree() {
        int result = longestBinaryRun(2731);
        assertEquals(3, result);
    }
}
