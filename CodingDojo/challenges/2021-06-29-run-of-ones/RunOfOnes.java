// # Runs of Ones
// 
// Given a positive integer `n`, determine the length of the longest run of `1`'s 
// in the binary representation of that integer.
// 
// ## Business Rules/Errata
// 
// - A run of `1`'s is any series of one or more `1`'s in a row, with no `0`'s in 
//   between. The first four characters in `11110101` are a run of `1`'s.
// - There's no requirement related to what data type(s) should be used to store 
//   the binary representation of `n`.
// - Target time complexity: O(n) (linear)
// - Target space complexity: O(1) (constant)
// 
// ## Examples
// 
// ```
// longest_binary_run(156);   // 3
// longest_binary_run(1979);  // 4
// longest_binary_run(2731);  // 2
// longest_binary_run(2185);  // 1
// ```

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
        assertEquals(4, result);
    }

    // Test case three
    @Test
    @DisplayName("For the number: 2731")
    public void testCaseThree() {
        int result = longestBinaryRun(2731);
        assertEquals(2, result);
    }
    // Test case four
    @Test
    @DisplayName("For the number: 2185")
    public void testCaseFour() {
        int result = longestBinaryRun(2185);
        assertEquals(1, result);
    }
}
