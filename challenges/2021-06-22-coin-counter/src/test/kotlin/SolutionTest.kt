import org.junit.Test
import kotlin.test.assertEquals

class SolutionTest {

    @Test
    fun test2Coins() {
        assertEquals(1, countCoinRounds(2))
    }

    @Test
    fun test16Coins() {
        assertEquals(4, countCoinRounds(16))
    }

    @Test
    fun test128Coins() {
        assertEquals(7, countCoinRounds(128))
    }

    @Test
    fun test100Coins() {
        assertEquals(7, countCoinRounds(100))
    }

    @Test
    fun test10000Coins() {
        assertEquals(14, countCoinRounds(10000))
    }

}
