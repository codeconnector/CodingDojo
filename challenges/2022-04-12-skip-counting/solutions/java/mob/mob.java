// # Skip Counting
// 
// The neighborhood children who normally laugh at you when you go jogging
// have invited you to come play a game with them. The game is played by
// laying out a circle of numbered tiles in a circle according to the
// following rules:
// 
// - The game starts with the `0` tile at the top of the circle. This is now
//   the 'current' tile. This tile is placed by the first player, player `0`.
// - Each round, the next player skips next tile clockwise from the current
//   tile, and places the next numbered tile.
// - The game continues until all the tiles have been laid.
// - Tile positions are labeled, starting with the zero in the `0`th place,
//   then increasing the number of the position clockwise around the circle.
// - The score is calculated by having each player multiply the number on each
//   tile they laid with the number of the position the tile was laid in, and
//   adding them up.
// 
// Because you're so smart (and these kids obviously aren't), you quickly
// realize that this game is entirely deterministic and that, given the number
// of players and the number of tiles, you can always know which player will
// win. You agree to play this game to show these kids what all your hours in
// front of a computer have earned you (even if you do "run like a walrus").
// 
// ## Business Rules/Errata
// 
// - You will be given the number of players and the number of tiles in the
//   game, as positive integers.
// - You should return the _score_ of the winning player, i.e. the highest
//   score achieved at the end of the game.

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

// Feel free to add necessary imports

public class SkipCounting {


    static int gameWinningScore(int players, int tiles) {
        // return 0;
        if (tiles == 0) { return 0; }
        ArrayList<int[]> circle = new ArrayList<int[]>();

        for (int i = 0; i < tiles; i++) {
            if (i > 0) {
                circle.add(circle.get(0));
                circle.remove(0);
            }
            int[] tileAndPlayer = {i, i % players};
            circle.add(tileAndPlayer);
        }

        while (circle.get(0)[0] > 0) {
            circle.add(circle.get(0));
            circle.remove(0);
        }

        int[] scores = new int[players];
        for (int i = 0; i < tiles; i++) {
            int tile = circle.get(i)[0];
            int player = circle.get(i)[1];

            scores[player] += tile * i;
        }

        int maxScore = 0;
        for (int i = 0; i < scores.length; i++) {
            if (scores[i] > maxScore) {
                maxScore = scores[i];
            }
        }
        return maxScore;
    }


    // Test case one
    @Test
    @DisplayName("Should return zero when there are no tiles.")
    public void testCaseOne() {
        assertEquals(gameWinningScore(5, 0), 0);
    }

    // Test case two
    @Test
    @DisplayName("Should return high score for a one-player game.")
    public void testCaseTwo() {
        assertEquals(gameWinningScore(1, 10), 211);
    }

    // Test case three
    @Test
    @DisplayName("Should return high score for a two-player game.")
    public void testCaseThree() {
        assertEquals(gameWinningScore(2, 15), 424);
    }

    // Test case four
    @Test
    @DisplayName("Should return high score for a many-player game.")
    public void testCaseFour() {
        assertEquals(gameWinningScore(100, 5000), 314997735);
    }
}
