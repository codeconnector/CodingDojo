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
import java.util.ArrayList;
import java.util.HashMap;

public class FriendFinder {
    public static void main(String args[]){
        System.out.println("Start of test cases");
        testCaseOne();
        testCaseTwo();
        testCaseThree();
        testCaseFour();
        System.out.println("End of test cases");
	}

    static int friendList(Map<Integer, int[]> input) {
        Integer groupNum = 0;
        HashMap<Integer, ArrayList<Integer>> groups = new HashMap<Integer, ArrayList<Integer>>();

        if (input.size() > 0){
            ArrayList<Integer> currentFriends = new ArrayList<Integer>();

            // Convert input map into a more useful map with an ArrayList instead of an int array
            HashMap<Integer, ArrayList<Integer>> inputMap = new HashMap<Integer, ArrayList<Integer>>();
            for (Integer grp = 0; grp < input.size(); grp++){
                for (int st : input.get(grp)){
                    inputMap.putIfAbsent(grp, new ArrayList<Integer>());
                    inputMap.get(grp).add(st);
                }
            }

            for (int homie = 0; homie < inputMap.size(); homie++){ // For each homie
                // Get the homie's friends
                currentFriends = inputMap.get(homie);

                if (currentFriends == null){ // Poor little homie doesn't have any friends, create a group for him by himself
                    groups.putIfAbsent(groupNum, new ArrayList<Integer>());
                    groups.get(groupNum).add(homie);
                    groupNum++;
                }
                else { // homie has friends
                    Integer inGrp = null;
                    for (Integer f : currentFriends){             
                        // see if homie's friends are already in a group
                        for (Integer g = 0; g <= groups.size(); g++){
                            ArrayList<Integer> studentsInGroup = groups.get(g);
                            if (studentsInGroup != null){
                                if (studentsInGroup.contains(f)){
                                    inGrp = g;
                                }
                            }
                        }
                    }
                    if (inGrp != null){ // Homie's friends are already in a group 
                        groups.get(inGrp).add(homie);
                    }
                    else{
                        // If none of homie's friends are already in a group, then create a new group with this homie and all their friends
                        groups.putIfAbsent(groupNum, new ArrayList<Integer>());
                        groups.get(groupNum).add(homie);
                        for (Integer fr : currentFriends){
                            groups.get(groupNum).add(fr);
                        }
                        groupNum++;
                    }
                }
            }
        }
        return groups.size();
    }

    // Test case one
    @Test
    @DisplayName("Test searching a sample list.")
    public static void testCaseOne() {
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
    public static void testCaseTwo() {
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
    public static void testCaseThree() {
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
    public static void testCaseFour() {
        Map<Integer, int[]> input = new HashMap<Integer, int[]>();
        int result = friendList(input);
        assertEquals(0, result);
    }
}
