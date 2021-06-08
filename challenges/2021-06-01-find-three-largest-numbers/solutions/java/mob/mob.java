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

import java.util.Arrays;

public class Solution {
    static int[] findThreeLargestNumbers(int[] array) {
        // Insert your solution here
        // the quickest answer is
        // Arrays.sort(array);
        // int[] threeAmigos = int[]{array[arrayLength - 1], array[arrayLength -2], ..}
				// Solution by Ian G Canino ( github.com/CaninoDev )
        int lengthArray = array.length;
        if (lengthArray < 3) {
            return null;
        }

        int min,mid,max;
        min = array[0];
        mid = array[1];
        max = array[2];
        for (int i = 0; i < lengthArray; i++) {
            if (array[i] >= max) {
                min = mid;
                mid = max;
                max = array[i];
            } else if (array[i] > mid) {
                min = mid;
                mid = array[i];
            } else if (array[i] > min) {
                mid = array[i];
            }
        }
        int[] threeAmigos = new int[]{min, mid, max};

        return threeAmigos;
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

}
