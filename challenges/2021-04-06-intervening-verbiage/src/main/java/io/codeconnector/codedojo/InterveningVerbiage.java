package main.java.io.codeconnector.codedojo;

/**
 * # Intervening Verbiage
 *
 * Given two words in a string of words, count the number of other words between
 * the two words you are given.
 *
 * ## Business Rules/Errata
 *
 * - Your solution will take in three pieces of input: a string containing a
 * space-separated list of words, and two other strings representing the first
 * and second words, respectively.
 * - You may ignore all punctuation and capitalization.
 * - If your two words are not in the string of words, alert the user to an error.
 * - You should return a count of the words between your two words as an integer,
 * not the words themselves.
 * - If your words appear multiple times in the list of words, count words that
 * fall between the first  instance of each.
 *
 * ## Examples
 *
 * ```
 * list_of_words = "There was an old lady who lived in an outhouse";
 * count_words_between("lady", "outhouse", list_of_words)  // 4
 * count_words_between("an", "outhouse", list_of_words)    // 6
 * ```
 *
 * - The words 'who', 'lived', 'in', 'an' appear between 'lady' and 'outhouse'.
 * - The words 'old', 'lady', 'who', 'lived', 'in', 'an' appear between the
 * first instance of 'an' and 'outhouse'.
 */
public class InterveningVerbiage {
    public int countWordsBetween(
        String start,
        String stop,
        String words
    ) throws IllegalArgumentException
    {
        // You should put the challenge solution here
        int length = words.length();
        int keywordIndex = 0;
        int wordIndex = 0;
        int count = 0;
        boolean isCounting = false;
        for (int i = 0; i < length; i++) {
            if (words.charAt(i) == ' ') {
                if (start.length() == keywordIndex && wordIndex == start.length() && !isCounting) {
                    isCounting = true;
                    continue;
                }
                if (isCounting) count++;
                wordIndex = 0;
                keywordIndex = 0;
                continue;
            } else {
                wordIndex++;
            }

            if (!isCounting && charEqualsIgnoreCase(words.charAt(i),start.charAt(keywordIndex))) keywordIndex++;
            if (isCounting && charEqualsIgnoreCase(words.charAt(i), stop.charAt(keywordIndex))) keywordIndex++;

            if (isCounting
                    && stop.length() == keywordIndex
                    && wordIndex == keywordIndex
                    && (i == length - 1 || words.charAt(i + 1) == ' '))
            {
                return count;
            }

        }
        throw new IllegalArgumentException("Must search between words in the list");
    }

    private static boolean charEqualsIgnoreCase(char char1, char char2){
        return Character.toLowerCase(char1) == Character.toLowerCase(char2);
    }
}
