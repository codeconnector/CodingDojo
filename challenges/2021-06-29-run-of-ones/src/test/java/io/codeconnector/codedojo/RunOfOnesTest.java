package io.codeconnector.codedojo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/**
 * Unit test for Run Of Ones coding challenge.
 */
public class RunOfOnesTest {

    private RunOfOnes testClass;

    @BeforeEach
    public void setUp() throws Exception {
        testClass = new RunOfOnes();
    }


    /**
     * First test case
     */
    @Test
    @DisplayName("For the number: 156")
    public void testCaseOne() {
        int result = testClass.longest_binary_run(156);
        assertEquals(3, result);
    }

    /**
     * Second test case
     */
    @Test
    @DisplayName("For the number: 1979")
    public void testCaseTwo() {
        int result = testClass.longest_binary_run(1979);
        assertEquals(3, result);
    }
    /**
     * Third test case
     */
    @Test
    @DisplayName("For the number: 2731")
    public void testCaseThree() {
        int result = testClass.longest_binary_run(2731);
        assertEquals(3, result);
    }

    /**
     * Fourth test case
     */
    @Test
    @DisplayName("For the number: 2185")
    public void testCaseFour() {
        int result = testClass.longest_binary_run(2185);
        assertEquals(3, result);
    }
}
