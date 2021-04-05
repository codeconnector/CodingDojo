package io.codeconnector.codedojo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/**
 * Unit test for Intervening Verbiage coding challenge.
 */
public class InterveningVerbiageTest {

    private InterveningVerbiage testClass;
    private String testSentence;

    @BeforeEach
    public void setUp() throws Exception {
        testClass = new InterveningVerbiage();
        testSentence = "There was an old lady who lived in an outhouse";
    }

    /**
     * First test case
     */
    @Test
    @DisplayName("Words between 'lady' and 'outhouse'")
    public void testCaseOne() {
        String msg = "Four words between 'lady' and 'outhouse'.";
        try {
            int result = testClass.countWordsBetween("lady", "outhouse", testSentence);
            assertEquals(4, result, msg);
        } catch (Exception e) {
            fail("Should not throw an exception for valid arguments.");
        }
    }

    /**
     * Second test case
     */
    @Test
    @DisplayName("Words between 'an' and 'outhouse'")
    public void testCaseTwo() {
        String msg = "Six words between 'an' and 'outhouse'.";
        try {
            int result = testClass.countWordsBetween("an", "outhouse", testSentence);
            assertEquals(6, result, msg);
        } catch (Exception e) {
            fail("Should not throw an exception for valid arguments.");
        }
    }

    /**
    * Test illegal arguments
    */
    @Test
    @DisplayName("The words must be in the list")
    public void testCaseWordNotInList() {
        assertThrows(IllegalArgumentException.class,
                     () -> testClass.countWordsBetween("frankly", "absurd", testSentence));
    }
}
