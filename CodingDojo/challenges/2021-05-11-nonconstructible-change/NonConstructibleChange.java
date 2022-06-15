// # Non-Constructible Change
// 
// Given an array of sorted positive integers representing the values of coins in 
// your possession, write a function that returns the minimum amount of change (the 
// minimum sum of money) that you **cannot** create.
// 
// ## Business Rules/Errata
// 
// - You can assume that the input will be a list or array of  **sorted** integers.
// - The given coins can have any positive integer value, they do not have to 
//   correspond to real coin values (for example, we could have a coin worth 3).
// - The coins aren't necessarily unique (you could have 7 coins worth 1, 2 coins 
//   worth 3, etc.
// - Extra challenge: Complete this challenge in linear time and constant space.


import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class NonConstructibleChange {

    static int minImpossibleChange(int[] array) {
        // Insert your solution here
        return 0;
    }

    // Test case one
    @Test
    @DisplayName("[1]")
    public void testCaseOne() {
        int[] input = {1};
        int result = minImpossibleChange(input);
        assertEquals(2, result, "cannot make change for 2");
    }

    // Test case two
    @Test
    @DisplayName("[1, 1, 1, 1, 1]")
    public void testCaseTwo() {
        int[] input = {1, 1, 1, 1, 1};
        int result = minImpossibleChange(input);
        assertEquals(6, result, "cannot make change for 6");
    }

    // Test case three
    @Test
    @DisplayName("[1, 1, 2, 3, 5, 7, 22]")
    public void testCaseThree() {
        int[] input = {1, 1, 2, 3, 5, 7, 22};
        int result = minImpossibleChange(input);
        assertEquals(20, result, "cannot make change for 20");
    }

    // Test case four
    @Test
    @DisplayName("[1, 1, 4, 5, 6, 7, 9]")
    public void testCaseFour() {
        int[] input = {1, 1, 4, 5, 6, 7, 9};
        int result = minImpossibleChange(input);
        assertEquals(3, result, "cannot make change for 3");
    }

    // Test case five
    @Test
    @DisplayName("[1, 1, 1, 1, 5, 10, 15, 20, 100]")
    public void testCaseFive() {
        int[] input = {1, 1, 1, 1, 5, 10, 15, 20, 100};
        int result = minImpossibleChange(input);
        assertEquals(55, result, "cannot make change for 55");
    }
}

