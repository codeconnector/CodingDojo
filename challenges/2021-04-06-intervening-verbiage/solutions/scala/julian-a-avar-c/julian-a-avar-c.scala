//> using scala 3.3.1
package `julian-a-avar-c`

private object util:
    extension [A](a: A)
        def |>[B](f: A => B): B =
            f apply a
    extension [A, B](f: A => B)
        def |>[C](g: B => C): A => C =
            f andThen g
    extension [A](seq: Seq[A])
        def indexOfOption(elem: A): Option[Int] =
            seq.indexOf(elem) match
                case -1    => None
                case index => Some(index)
end util
import util.{|>, indexOfOption}

def words_to_list(words: String): List[String] =
    words.split(raw"\s+").toList

def sanitize(words: String): String = words
    .collect {
        case char if char.isUpper                 => char.toLower
        case char if char.isLower || char.isDigit => char
    }

/** Given two words in an ASCII string of words, counts the number of other
  * words between the two words given.
  *
  * @param start
  *   First word to match. (Exclusive)
  * @param end
  *   Last word to match. (Exclusive)
  * @param words
  *   Space separated words containing punctuation and mixed cases.
  * @return
  *   Exclusive range length from `start` to `end`.
  */
def count_words_between(
    start: String,
    end: String,
    words: String
): Int =
    val sanitized_start = start |> sanitize
    val sanitized_end = end |> sanitize
    // If really large strings were used, then `words` should be some sort of stream and it would be sanitized as it was being read
    val word_list = (words |> words_to_list) map sanitize

    val start_index =
        word_list.indexOfOption(sanitized_start.toLowerCase).ensuring(
          _.isDefined,
          s"Argument `start` ($sanitized_start) should be in `words` ($words)"
        )
    val end_index = word_list.indexOfOption(sanitized_end.toLowerCase).ensuring(
      _.isDefined,
      s"Argument `end` ($sanitized_end) should be in `words` ($words)"
    )

    end_index.get - start_index.get - 1
end count_words_between
