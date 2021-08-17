// # Friend Finder
// 
// A classroom consists of N students, whose friendships can be represented in an
// adjacency list. For example, the following describes a situation where 0 is friends
// with 1 and 2, 3 is friends with 6, and so on.
// 
// ```
// {0: [1, 2],
//  1: [0, 5],
//  2: [0],
//  3: [6],
//  4: [],
//  5: [1],
//  6: [3]} 
// ```
// 
// Each student can be placed in a friend group, which can be defined as the the
// smallest set of students such that no student in the group has any friends outside
// this group. For the example above, the friend groups would be
// {0, 1, 2, 5}, {3, 6}, {4}.
// 
// Given a friendship list such as the one above, determine the number of friend
// groups in the class.

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import java.util.Map;
import java.util.HashMap;

public class FriendFinder {
    static void singleFriend(Map<Integer, int[]> input, Map<Integer,Integer> groups, Map.Entry<Integer,int[]> current, int friend){
        
        if (!groups.containsKey(friend)) {

            // determine the current group to add this friend and all friends of friends
            Integer myGroup = groups.get(current.getKey());
            groups.put(friend, myGroup);

            int[] myFriendFriends = input.get(Integer.valueOf(friend));                    
            for (int secondFriend : myFriendFriends) {
                if (secondFriend != current.getKey())
                    singleFriend(input, groups, current, secondFriend);            
            }
        }
    }

    static int friendList(Map<Integer, int[]> input) {
        // Insert your solution here
        Integer groupCount = 0;
        Map<Integer,Integer> groups = new HashMap<Integer,Integer>();

        // using for-each loop for iteration over input Map.entrySet()
        for (Map.Entry<Integer,int[]> current : input.entrySet()) {

            // increment the count if this person is not yet in a group
            if (!groups.containsKey(current.getKey())) {
                groupCount += 1;
                groups.put(current.getKey(), groupCount);
            }

            // recursively add all friends and friends of friends to group
            for (int myFriend : current.getValue()) {                
                singleFriend(input, groups, current, myFriend);
            }
        }

        return groupCount;
    }

    // Test case one
    @Test
    @DisplayName("Test searching a sample list.")
    public void testCaseOne() {
        Map<Integer, int[]> input = Map.of(
            0, new int[]{1, 2}, 1, new int[]{0, 5},
            2, new int[]{0},    3, new int[]{6},
            4, new int[]{},     5, new int[]{1},
            6, new int[]{3});
        int result = friendList(input);
        assertEquals(3, result);
    }

    // Test case two
    @Test
    @DisplayName("Test searching a list with one big friend group.")
    public void testCaseTwo() {
        Map<Integer, int[]> input = Map.of(
            0, new int[]{1, 2},    1, new int[]{0, 2},
            2, new int[]{0, 1, 3}, 3, new int[]{2, 4},
            4, new int[]{3, 5},    5, new int[]{3, 4}
        );
        int result = friendList(input);
        assertEquals(1, result);
    }

    // Test case three
    @Test
    @DisplayName("Test searching a list with lots of small groups.")
    public void testCaseThree() {
        Map<Integer, int[]> input = Map.of(
            0, new int[]{1}, 1, new int[]{0},
            2, new int[]{3}, 3, new int[]{2},
            4, new int[]{5}, 5, new int[]{4},
            6, new int[]{7}, 7, new int[]{6}
        );
        int result = friendList(input);
        assertEquals(4, result);
    }

    // Test case four
    @Test
    @DisplayName("Test searching an empty list.")
    public void testCaseFour() {
        Map<Integer, int[]> input = new HashMap<Integer, int[]>();
        int result = friendList(input);
        assertEquals(0, result);
    }
}
