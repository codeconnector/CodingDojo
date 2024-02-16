//> using scala 3.3.1
//> using test.dep org.scalatest::scalatest::3.2.17
package `julian-a-avar-c`.tests

import org.scalatest.*
import flatspec.*
import matchers.*

import `julian-a-avar-c`.*
class Tests extends AnyFlatSpec with must.Matchers:
    behavior of "count_words_between"

    it must "work correctly under normal circumstances" in:
        count_words_between("start", "end", "1 2 3 start 4 5 6 end 7 8 9") must be (3)

    it must "result in 0 if no word characters are between start and end" in:
        count_words_between("start", "end", "1 2 3 start end 7 8 9") must be (0)

    it must "only account for first start" in:
        count_words_between("start", "end", "1 2 3 start 4 start 6 end 7 8 9") must be (3)

    it must "only account for first end" in:
        count_words_between("start", "end", "1 2 3 start 4 end 6 end 7 8 9") must be (1)

    it must "throw if start is not in words" in:
        an [AssertionError] must be thrownBy:
            count_words_between("start", "end", "1 2 3 X 4 5 6 end 7 8 9")

    it must "throw if end is not in words" in:
        an [AssertionError] must be thrownBy:
            count_words_between("start", "end", "1 2 3 start 4 5 6 X 7 8 9")

    it must "throw if both start and end are not in words" in:
        an [AssertionError] must be thrownBy:
            count_words_between("start", "end", "1 2 3 X 4 5 6 X 7 8 9")

    "all arguments" must "be filtered except for letters and numbers" in:
        an [AssertionError] must be thrownBy:
            count_words_between("start", "end", "1 2 3 start.4 5 6 end 7 8 9")
        count_words_between("start4", "end", "1 2 3 start.4 5 6 end 7 8 9") must be(2)
        count_words_between("start", "6end", "1 2 3 start 4 5 6.end 7 8 9") must be(2)

    "all arguments" must "be case insensitive" in:
        count_words_between("Start", "end", "1 2 3 start 4 5 6 end 7 8 9") must be(3)
        count_words_between("start", "End", "1 2 3 start 4 5 6 end 7 8 9") must be(3)
        count_words_between("start", "end", "1 2 3 Start 4 5 6 end 7 8 9") must be(3)
        count_words_between("start", "end", "1 2 3 start 4 5 6 End 7 8 9") must be(3)
end Tests

