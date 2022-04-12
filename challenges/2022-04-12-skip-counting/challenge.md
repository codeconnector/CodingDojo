# Skip Counting

The neighborhood children who normally laugh at you when you go jogging have invited you to come play a game with them. The game is played by laying out a circle of numbered tiles in a circle according to the following rules:

- The game starts with the `0` tile at the top of the circle. This is now the 'current' tile. This tile is placed by the first player, player `0`.
- Each round, the next player skips next tile clockwise from the current tile, and places the next numbered tile.
- The game continues until all the tiles have been laid.
- Tile positions are labeled, starting with the zero in the `0`th place, then increasing the number of the position clockwise around the circle.
- The score is calculated by having each player multiply the number on each tile they laid with the number of the position the tile was laid in, and adding them up.

Because you're so smart (and these kids obviously aren't), you quickly realize that this game is entirely deterministic and that, given the number of players and the number of tiles, you can always know which player will win. You agree to play this game to show these kids what all your hours in front of a computer have earned you (even if you do "run like a walrus").

## Business Rules/Errata

- You will be given the number of players and the number of tiles in the game, as positive integers.
- You should return the _score_ of the winning player, i.e. the highest score achieved at the end of the game.

## Examples

Here's an example of how a game will go with 16 tiles and 4 players. The inner ring represents the number of the tile, the middle ring is the number of the position, and the outer ring is the number of the player.

```
Round 1:                 Round 2:                 Round 3:                                                                                
                                                                                                                                  
        0                        0      1                 0      2                                                                         
         0                        0    1                   0    1     1                                                                     
          0  #                     0  1                     0  2    2                                                                           
       #        #               #        #               #        1                                                                                
     #            #           #            #           #            #                                                                                
    #              #         #              #         #              #                                                                                
    #              #         #              #         #              #                                                                                
     #            #           #            #           #            #                                                                                
       #        #               #        #               #        #                                                                                
          #  #                     #  #                     #  #                                                                                
                                                                                                         

                                                                                                         
Round 4:                 Round 5:                Round 6:                                                                                                                         
                                                                          
        0      2                 0      0                0      0         
         0    1     1             0    1     2            0    1     2    
          0  2    2   3            0  4    2   1           0  4    2   1  
       #        1   3           #        2   3          #        2   3   
     #            3           #            1          #            5    
    #              #         #              3 4 3    #              1 4 3
    #              #         #              #        #              3 5 3 
     #            #           #            #          #            #      
       #        #               #        #              #        #        
          #  #                     #  #                    #  #           
                                                                          
                          Round 16:                
                                                  
                                  0      0        
                              3    0    1     0   
                          3    15   0  8    2   1 
                            14   15       4   3   
                               7            9    
                         2 13 14             2  4 2
                         3 12  3             10 5 2
                              13            5     
                            11   6        11  6    
                           1   10   12 1    7   1 
                              2    9    8     3
                                  0      1
```
After 16 rounds, the scores are:

- Player 0: 124
- Player 1: 208
- Player 2: 300
- Player 3: 436

## Tackling This Challenge

1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+
