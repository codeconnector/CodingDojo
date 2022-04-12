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
// Feel free to add necessary imports
import java.util.LinkedList;
import java.util.ArrayList;
import java.util.Collections;

public class SkipCounting {
    static private class MyTile {
      int value;
      int player;
      public MyTile(int num, int who) {
          this.value = num;
          this.player = who;
      }
    }
    static int gameWinningScore(int players, int tiles) {
        // Keep up with a list of played tiles and who played them
        LinkedList<MyTile> circle = new LinkedList<MyTile>();
        circle.add(new MyTile(0, 0));
        // For each tile involved in the game
        for (int i = 1; i < tiles; i++) {            
            // Move the first item in the 'circle' to the end
            MyTile firstTile = circle.removeFirst();
            circle.addLast(firstTile);
            // Add [tile number, player number] to the list
            MyTile currentTile = new MyTile(i, i % players);
            circle.addLast(currentTile);
        }
        // Adjust circle to put the zero tile at the beginning
        while (circle.getFirst().value != 0) {
            circle.addLast(circle.removeFirst());
        }
        // Keep up with each player's score
        ArrayList<Integer> scores = new ArrayList<Integer>();
        for (int i = 0; i < players; i++) {
            scores.add(0);
        }
        // For each tile in the circle add the value times index to the player's score
        int position = 0;
        for (MyTile tile : circle) {
            scores.set(tile.player, scores.get(tile.player) + tile.value * position);
            position++;
        }
        // return the maximum score value
        Collections.sort(scores, Collections.reverseOrder());
        return scores.get(0);
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
