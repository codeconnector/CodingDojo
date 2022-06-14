package solutions.java.jesse;
//# Single and Ready to Mingle
// Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice,
// find the two elements that appear only once.
//
// Business Rules/Errata
// You can assume that the input will always include at least two and exactly two elements that appear only once.
// You may not assume that the list will be sorted ahead of time.
//
// Extra Challenge: Can you complete this puzzle in linear time and constant space?
// Extra Extra Challenge: Can you make your solution generic over other input types?
//
// Examples
// input = [2, 4, 6, 8, 10, 2, 6, 10];
// find_singles(input)  // [4, 8]
//
// input = [1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9];
// find_singles(input)  // [3, 8]

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertIterableEquals;
import org.junit.jupiter.api.Test;

public class SingleAndReadyToMingle {
    static <T> ArrayList<T> singleAndReadyToMingle(T[] input) {
        HashSet<T> singles = new HashSet<>();
        for (T item : input) {
            if (singles.contains(item)){
                singles.remove(item);
            } else {
                singles.add(item);
            }
        }
        return new ArrayList<>(singles);
    }

    // Test case one
    @Test
    public void testCaseOne() {
        Integer[] input = {2, 4, 6, 8, 10, 2, 6, 10};
        ArrayList<Integer> result = singleAndReadyToMingle(input);
        assertIterableEquals(Arrays.asList(4, 8), result);
    }

    // Test case two
    @Test
    public void testCaseTwo() {
        Integer[] input = {1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9};
        ArrayList<Integer> result = singleAndReadyToMingle(input);
        assertIterableEquals(List.of(3, 8), result);
    }

    // Test case three
    @Test
    public void testCaseThree() {
        String[] input = {"one", "two", "three", "two", "one", "four", "four", "six", "seven", "eight", "seven", "six", "nine", "nine"};
        ArrayList<String> result = singleAndReadyToMingle(input);
        assertIterableEquals(List.of("three", "eight"), result);
    }

    // Test case four
    @Test
    public void testCaseFour() {
        class Person {
            private final String name;
            private final int id;

            public Person(String name, int id) {
                this.name = name;
                this.id = id;
            }

            @Override
            public boolean equals(Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;
                Person person = (Person) o;
                return id == person.id && Objects.equals(name, person.name);
            }

            @Override
            public int hashCode() {
                return Objects.hash(name, id);
            }
        }
        Person[] input = {new Person("Bill", 1), new Person("Henry", 2),new Person("Mark", 3),new Person("Henry", 2), new Person("Mark", 3)};
        ArrayList<Person> result = singleAndReadyToMingle(input);
        assertIterableEquals(List.of(new Person("Bill", 1)), result);
    }
}