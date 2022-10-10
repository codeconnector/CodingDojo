import org.junit.Test
import kotlin.test.assert

class SolutionTest {

    @Test
    fun testCaseOne() {
        val input: IntArray = intArrayOf(141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7)
        val result: IntArray = findThreeLargestNumbers(input)
        val expected: IntArray = intArrayOf(18, 141, 541)
        assert(result contentEquals expected)
    }

    @Test
    fun testCaseTwo() {
        val input: IntArray = intArrayOf(11, -7, 5, -7)
        val result: IntArray = findThreeLargestNumbers(input)
        val expected: IntArray = intArrayOf(-7, 5, 11)
        assert(result contentEquals expected)
    }

    @Test
    fun testCaseThree() {
        val input: IntArray = intArrayOf(1)
        val result: IntArray = findThreeLargestNumbers(input)
        val expected: IntArray = intArrayOf(1)
        assert(result contentEquals expected)
    }

}
