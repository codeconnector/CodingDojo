using System;
namespace c_
{
    // ___INSTRUCTIONS___
    // Your solution will take in three pieces of input: a string containing a space-separated list of words,
    // and two other strings representing the first and second words, respectively.
    // You may ignore all punctuation and capitalization.
    // If your two words are not in the string of words, alert the user to an error.
    // You should return a count of the words between your two words as an integer, not the words themselves.
    // If your words appear multiple times in the list of words, count words that fall between the first instance of each.

    // Examples

    // list_of_words = "There was an old lady who lived in an outhouse";
    // count_words_between("lady", "outhouse", list_of_words)  // 4
    // count_words_between("an", "outhouse", list_of_words)    // 6

    // The words 'who', 'lived', 'in', 'an' appear between 'lady' and 'outhouse'.
    // The words 'old', 'lady', 'who', 'lived', 'in', 'an' appear between the first instance of 'an' and 'outhouse'.

    class Program
    {
        static void Main(string[] args)
        {
            WordsBetween("lady", "outhouse", "There was an old lady who lived in an outhouse"); // 4
            WordsBetween("an", "outhouse", "There was an old lady who lived in an outhouse"); // 6
        }

        public static int WordsBetween(string wordOne, string wordTwo, string sentence)
        {
            string[] sentenceArray = sentence.Split(' ');
            int wordsBetweenCount = 0;
            int wordOneIndex = Array.IndexOf(sentenceArray, wordOne);
            int wordTwoIndex = Array.IndexOf(sentenceArray, wordTwo);

            for (int i = wordOneIndex + 1; i < wordTwoIndex; i++)
            {
                wordsBetweenCount++;
            }
            Console.WriteLine(wordsBetweenCount);
            return wordsBetweenCount;
        }
    }
}
