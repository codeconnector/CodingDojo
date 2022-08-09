# Critter Crossing

It's that time of year again! No, not Christmas, it's planting season! Unfortunately, it turns out your carefully tended garden has attracted the interest of a family of moles... Being the kind and compassionate person you are, you've opted to purchase the "catch-and-release" style of mole trap. The only problem is that those "friendlier" traps are *expensive*! You need to be judicious with their placement. After making some observations, you've noted that these moles seem to only dig
their tunnels in a north-south or east-west direction (vertical or horizontal in a two-dimensional plane). You decide that, given your limited number of traps, it makes the most sense to place traps at tunnel intersections whenever possible. The tunnels aren't always close enough to the surface for you to just walk out and _find_ these "mole crossroads", so you'll need some strategy for predicting where they will be...

Given a list of coordinates in the format `(<lat>, <lon>)`, identify the most likely locations for "mole crossroads".

## Business Rules/Errata

- Each coordinate will consist of a tuple (or 2-element array) containing two numbers in the format `(<lat>, <lon>)`.
- A tunnel can be identified by two or more coordinates in a straight horizontal or vertical line.
- You may assume that a tunnel extends infinitely either vertically or horizontally for the purposes of identifying crossroads.
- Sometimes, your input will contain more than two coordinates for a single tunnel. 
- You may occasionally identify a coordinate that is not in line with any other coordinate. These 'points' can be safely ignored.
- Your function should return a list of coordinates identifying all possible crossroads.
- If your input is an empty list, then you should return an empty list.
- You should also return an empty list if no crossroads can be identified.

## Examples

```
find_crossroads([])               -> [] // No crossroads, no input
find_crossroads([(1, 1)])         -> [] // No crossroads, only one point
find_crossroads([(1, 1), (2, 2)]) -> [] // No crossroads, no overlap
```

```
input = [
    (2, 2),  (2, 34),   // Tunnel 1
    (5, 18), (17, 18)   // Tunnel 2
]
find_crossroads(input) -> [(2, 18)]           // Remember, assume the tunnels keep going


input = [
    (2, 2),  (2, 34),           // Tunnel 1
    (5, 18), (17, 18),          // Tunnel 2
    (11, 1), (11, 6), (11, 29), // Tunnel 3, 3 points
    (16, 24)                    // Extra point, not in a tunnel
]
find_crossroads(input) -> [(2, 18), (11, 18)] // Two crossroads from three tunnels


input = [
    (2, 2),  (2, 34),   // Tunnel 1
    (5, 18), (5, 22)   // Tunnel 2
]
find_crossroads(input) -> []                  // Parallel tunnels don't cross
```

## Tackling This Challenge

1. Make sure you've got the required software on your machine: A JDK 11+
1. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
1. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
1. Add your code to the solution file to make the puzzle function work as expected.
1. Confirm your solution by running tests. Execute the `run-tests` script (use `./run-tests` from the challenge root directory.
1. If you've passed all the tests, the `run-tests` script with help you commit it. Otherwise, try again to pass all tests.
1. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
1. One of the CodingDojo maintainers will help you get your PR merged.

## Requirements

- JDK 11+
