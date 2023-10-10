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

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class Solution {
    static int[] findThreeLargestNumbers(int[] array) {
        // Insert your solution here
        return new int[]{0, 0, 0};
    }

    // Test case one
    @Test
    @DisplayName("[141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7]")
    public void testCaseOne() {
        int[] input = {141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7};
        int[] result = findThreeLargestNumbers(input);
        int[] expected = {18, 141, 541};
        assertArrayEquals(expected, result, "[18, 141, 541] are the three largest");
    }

    // Test case two
    @Test
    @DisplayName("[11, -7, 5, -7]")
    public void testCaseTwo() {
        int[] input = {11, -7, 5, -7};
        int[] result = findThreeLargestNumbers(input);
        int[] expected = {-7, 5, 11};
        assertArrayEquals(expected, result, "[-7, 5, 11] are the three largest");
    }

    // Test case three
    @Test
    @DisplayName("[1]")
    public void testCaseThree() {
        int[] input = {1};
        int[] result = findThreeLargestNumbers(input);
        int[] expected = null;
        assertArrayEquals(expected, result, "[1] does not have three numbers");
    }

    // Test case four
    @Test
    @DisplayName("[-10, -100, -1, -1000]")
    public void testCaseThree() {
        int[] input = {-10, -100, -1, -1000};
        int[] result = findThreeLargestNumbers(input);
        int[] expected = {-100, -10, -1};
        assertArrayEquals(expected, result, "[-100, -10, -1] are the three largest");
    }

}
