package io.codeconnector.codedojo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/**
 * Unit test for Potential Palindrome coding challenge.
 */
public class PotentialPalindromeTest {

    private PotentialPalindrome testClass;

    @BeforeEach
    public void setUp() throws Exception {
        testClass = new PotentialPalindrome();
    }

    /**
     * First test case
     */
    @Test
    @DisplayName("Correctly finds a potential palindrome")
    public void testCaseOne() {
        boolean result = testClass.canMakePalindrome("carrace");
        assertEquals(true, result, "'carrace' can make a palindrome");
    }

    /**
     * Second test case
     */
    @Test
    @DisplayName("Correctly handles numbers submitted instead of strings")
    public void testCaseTwo() {
        boolean result = testClass.canMakePalindrome(41231234);
        assertEquals(true, result, "41231234 can make a palindrome");
    }

    /**
     * Third test case
     */
    @Test
    @DisplayName("Correctly rules out non-palindrome")
    public void testCaseThree() {
        boolean result = testClass.canMakePalindrome("notapalindrome");
        assertEquals(false, result, "'notapalindrome' can not make a palindrome");
    }

    /**
     * Fourth test case
     */
    @Test
    @DisplayName("Empty strings are not palindromes")
    public void testCaseFour() {
        boolean result = testClass.canMakePalindrome("");
        assertEquals(false, result, "An empty string cannot make a palindrome");
    }
}
