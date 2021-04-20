package io.codeconnector.codedojo;

/*
 * # Potential Palindrome
 * 
 * Given a string, determine whether any permutation of it is a palindrome. 
 * A palindrome is any string that can be read the same both forwards and 
 * backwards, such as "kayak".
 * 
 * ## Business Rules/Errata
 * 
 * - You only need to determine whether it is possible to make a palindrome, 
 * you do not need to return an example of the palindrome.
 * - Any input that is not a string should be treated as a string, if possible.
 * - An empty string is not a palindrome.
 * 
 * ## Examples
 * 
 * ```bash
 * canMakePalindrome("carrace");  // True
 * ```
 * 
 * The string `carrace` can be rearranged to make `racecar`, a palindrome.
 */

import java.nio.charset.StandardCharsets;

public class PotentialPalindrome {
    public boolean canMakePalindrome(Object input)
    {
        // Treat input as a String, return false if it is an empty string.
        String objString = input.toString();
        if (objString.equals("")) return false;

        // Convert the String input to ASCII bytes, XOR all the bytes. If we 
        // get '0' back, that means all the input bytes are paired and thus
        // can definitely make a palindrome
        byte[] objStringBytes = objString.getBytes(StandardCharsets.US_ASCII);
        int xored = 0;
        for (byte b: objStringBytes) {
            xored = xored ^ b;
        }
        if (xored == 0) return true;

        // If `xored` is not '0', it still might be a palindrome if there's only
        // one unique byte, so try XORing again, just skipping the byte that
        // was left over the first time
        int xored2 = 0;
        for (byte b: objStringBytes) {
            if (b == xored) continue;
            xored2 = xored2 ^ b;
        }
        if (xored2 == 0) return true;

        // If all else fails, return false
        return false;
    }
}


