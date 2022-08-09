package solutions.java.corey;// # Critter Crossing
// 
// It's that time of year again! No, not Christmas, it's planting season!
// Unfortunately, it turns out your carefully tended garden has attracted the
// interest of a family of moles... Being the kind and compassionate person
// you are, you've opted to purchase the "catch-and-release" style of mole tra
// . The only problem is that those "friendlier" traps are *expensive*! You
// need to be judicious with their placement. After making some observations,
// you've noted that these moles seem to only dig their tunnels in a north
// south or east-west direction (vertical or horizontal in a two-dimensional
// plane). You decide that, given your limited number of traps, it makes the
// most sense to place traps at tunnel intersections whenever possible. The
// tunnels aren't always close enough to the surface for you to just walk out
// and _find_ these "mole crossroads", so you'll need some strategy for
// predicting where they will be...
// 
// Given a list of coordinates in the format `(<lat>, <lon>)`, identify the
// most likely locations for "mole crossroads".
// 
// ## Business Rules/Errata
// 
// - Each coordinate will consist of a tuple (or 2-element array) containing
//   two numbers in the format `(<lat>, <lon>)`.
// - A tunnel can be identified by two or more coordinates in a straight
//   horizontal or vertical line.
// - You may assume that a tunnel extends infinitely either vertically or
//   horizontally for the purposes of identifying crossroads.
// - Sometimes, your input will contain more than two coordinates for a single tunnel. 
// - You may occasionally identify a coordinate that is not in line with any
//   other coordinate. These 'points' can be safely ignored.
// - Your function should return a list of coordinates identifying all
//   possible crossroads.
// - If your input is an empty list, then you should return an empty list.
// - You should also return an empty list if no crossroads can be identified.

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

public class Corey {
    /*
    Records are like really simple classes
     */
    private record Coord(
            Integer row,
            Integer col
    ){};
    static int[][] findCrossroads(int[][] identifiedCoordinates) {
	    int[][] empty = {{}}; // this is a nice reference to keep around

        // intersections require more than 2 points
        if(2 > identifiedCoordinates.length || 0 == identifiedCoordinates[0].length)
	        return empty;

        // I really wanted to work with streams, this lets me do that
        List<Coord> coords = convertInput(identifiedCoordinates);

        // Get the location of rows with more than one point
        List<Integer> rows = coords.stream()
                .collect(Collectors.groupingBy(coord -> coord.row))
                .entrySet().stream().filter(e->e.getValue().size()>1)
                .map(Map.Entry::getKey).toList();
        // Get the location of columns with more than one point
        List<Integer> cols = coords.stream()
                .collect(Collectors.groupingBy(coord -> coord.col))
                .entrySet().stream().filter(e->e.getValue().size()>1)
                .map(Map.Entry::getKey).toList();

        // We require at least one of each to find intersection
        if(0 == rows.size() || 0 == cols.size())
            return empty;

        List<Coord> intersections = rows.stream()// iterate the rows
                .map(row -> cols.stream()// iterate the columns
                        .map(col-> new Coord(row, col)) // Coordinate of intersection
                        .toList())// convert stream to a list
                .flatMap(Collection::stream) // flaten our nested list
                .toList(); // convert stream to list
        return convertOutput(intersections);

    }

    static List<Coord> convertInput(int[][] nestedArr){
        // utility function to convert native 2d array to something I'd rather work with
        return Arrays.stream(nestedArr)
                .map(coord -> new Coord(coord[0], coord[1]))
                .toList();
    }

    static int[][] convertOutput(List<Coord> coords){
        // Setup required conversion back to native 2d array
        int[][] result = new int[coords.size()][2];
        for(int i = 0; i < coords.size(); i++) {
            Coord coord = coords.get(i);
            result[i][0] = coord.row;
            result[i][1] = coord.col;
        }
        return result;
    }

    @Test
    @DisplayName("Should find no crossroads in an empty input") 
    public void testCaseOne() {
        int[][] input = {{}};
        int[][] result = findCrossroads(input);
        int[][] expected = {{}};
        assertArrayEquals(result, expected);
    }

    @Test
    @DisplayName("Should find no crossroads in a single coordinate")
    public void testCaseTwo() {
        int[][] input = {{1, 1}};
        int[][] result = findCrossroads(input);
        int[][] expected = {{}};
        assertArrayEquals(result, expected);
    }

    @Test
    @DisplayName("Should find no crossroads in two coordinates with no tunnel")
    public void testCaseThree() {
        int[][] input = {{1, 1}, {2, 2}};
        int[][] result = findCrossroads(input);
        int[][] expected = {{}};
        assertArrayEquals(result, expected);
    }

    @Test
    @DisplayName("Should find the crossroad for two tunnels")
    public void testCaseFour() {
        int[][] input = {{2, 2}, {2, 34}, {5, 18}, {17, 18}};
        int[][] result = findCrossroads(input);
        int[][] expected = {{2, 18}};
        assertArrayEquals(result, expected);
    }

    @Test
    @DisplayName("Should handle tunnels with more than two coordinates")
    public void testCaseFive() {
        int[][] input = {{2, 2}, {2, 34}, {5, 18}, {17, 18}, {11, 1}, {11, 6}, {11, 29}};
        int[][] result = findCrossroads(input);
        int[][] expected = {{2, 18}, {11, 18}};
        assertArrayEquals(result, expected);
    }

    @Test
    @DisplayName("Should ignore extra coordinates not in a tunnel")
    public void testCaseSix() {
        int[][] input = {
            { 2,  2}, { 2, 34}, { 5, 18},
            {17, 18}, {11,  1}, {11,  6},
            {11, 29}, {16, 24}, { 7, 12}
        };
        int[][] result = findCrossroads(input);
        int[][] expected = {{2, 18}, {11, 18}};
        assertArrayEquals(result, expected);
    }

    @Test
    @DisplayName("Should not find a crossroads for parallel tunnels")
    public void testCaseSeven() {
        int[][] input = { { 2,  2}, { 2, 34}, { 5, 18}, {5, 22}};
        int[][] result = findCrossroads(input);
        int[][] expected = {{}};
        assertArrayEquals(result, expected);
    }
}
