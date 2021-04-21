package io.codeconnector.codedojo;

import java.util.HashMap;
import java.util.Map;

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

public class PotentialPalindrome {
    public boolean canMakePalindrome(Object input)
    {
    	String value = input.toString();
    	if(value.isEmpty()) {
    		return false;
    	}
    	if(value.length() == 1) {
    		return true;
    	}
    	
    	value = value.toLowerCase();
    	Map<Character, Integer> map = new HashMap<>();
    	
    	for(int i = 0; i < value.length(); i++) {
    		char c = value.charAt(i);
			Integer count = map.get(c);
			if(count == null) {
				count = 0; //initialize it
			}
			count++;
			map.put(c, count);
    	}
    	boolean evenValueSize = value.length() % 2 == 0;
    	boolean oneOddFound = false;
    	for(int next: map.values()) {
    		if( next % 2 != 0) {
    			//odd
    			if(oneOddFound || evenValueSize) {
    				return false;
    			}
    			oneOddFound = true;
    		}
    	}
        return true;
    }

}


