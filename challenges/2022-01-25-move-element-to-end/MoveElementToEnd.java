// # Move Element to End
// 
// You're given an array of integers and an integer. Write a function that moves all
// instances of that integer in the array to the end of the array and returns the
// array. The potential difficulty of this challenge lies in achieving the optimal time
// and space complexity, so they will be a rule requirement.

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
// Feel free to add necessary imports

public class MoveElementToEnd {
    static int[] moveToEnd(int[] arr, int toMove) {
        // Insert your solution here
        return new int[0];
    }

    // Test case one
    @Test
    @DisplayName("Should return an empty array when given an empty array")
    public void testCaseOne() {
        int[] input = new int[0];
        int[] result = moveToEnd(input, 0);
        assertEquals(result.length, 0);
    }

    // Test case two
    @Test
    @DisplayName("Should not modify an already 'sorted' array")
    public void testCaseTwo() {
        int[] input = {2, 1, 1, 1};
        int[] result = moveToEnd(input, 1);
        for (int i = 1; i < 4; i++) {
            assertEquals(result[i], 1);
        }
    }

    // Test case three
    @Test
    @DisplayName("Should move a single value to the end of the array")
    public void testCaseThree() {
        int[] input = {1, 2, 2, 2, 2, 2, 2};
        int[] result = moveToEnd(input, 1);
        for (int i = 0; i < 6; i++) {
            assertEquals(result[i], 2);
        }
        assertEquals(result[6], 1);
    }

    // Test case four
    @Test
    @DisplayName("Should move multiple values to the end of the array")
    public void testCaseFour() {
        int[] input = {2, 1, 2, 2, 2, 3, 4, 2};
        int[] result = moveToEnd(input, 2);
        for (int i = 3; i < 8; i++) {
            assertEquals(result[i], 2);
        }
    }
}
