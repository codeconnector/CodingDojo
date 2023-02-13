# Valid Starting City

Imagine you have a set of cities that are laid out in a circle, connected by a circular road that runs clockwise. Each city has a gas station that provides gallons of fuel, and each city is some distance away from the next city.

You have a car that can drive some number of miles per gallon of fuel, and you goal is to pick a starting city such that you can fill up your car with that city's fuel, drive to the next city, refill up your car with that city's fuel, drive to the next city, and so on until you return back to the starting city with 0 or more gallons of fuel left.

This city is called a valid starting city, and it's guaranteed that there will always be exactly one valid starting city.

For the actual problem, you'll be given an array of distances such that city `i` is `distances[i]` away form city `i+1`. Since the cities are connected via a circular road, the last city is connected to the first city. In other words, the last distance in the distances array is equal to the distance from the last city to the first city. You'll also be given an array of fuel available at each city, where `fuel[i]` is equal to the fuel available at city `i`. The total amount of fuel available (from all cities combined) is exactly enough to travel to all cities. Your fuel tank always starts out empty, and you're given a positive integer value for the number of miles that your car can travel per gallon of fuel (miles per gallon, or MPG). You can assume that you will always be given at least two cities.

Write a function that returns the index of the valid starting city.

## Business Rules/Errata
 - There will be exactly one valid starting city
 - The total amount of available fuel (from all cities combined) is exactly enough to travel to all cities
 - Your fuel tank always starts out at 0, or empty
 - You're given a positive integer for miles per gallon which is how far your car can travel on a gallong of fuel
 - You will always be given at least two cities in your input array
 - city `i` is `distances[i]` -> each item in the input `distances` array corresponds to a city
 - each city will have a corresponding fuel value available in that city that represents gallons of fuel available in that city
 - the last city in the array connects to the first item in the array

## Example
```python
distances = [5, 25, 15, 10, 15]
fuel = [1, 2, 1, 0, 3]
mpg = 10

## output
valid_starting_city(distances, fuel, mpg) -> 4
```

In the example above, the city at the 4th index in `distances` is the only Valid Starting City

## Tackling This Challenge

1. Make sure you've got the required software on your machine: python 3.x
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Checkout a new branch using `git checkout -b yourgithubusername-wip`.
4. Run a test on the `solutions.py` file in this directory to make sure testing works as expected: `python3 -m unittest solution.py`
5. Add your code to the solution file to make the puzzle function work as expected (solve all test cases).
6. Navigate to [GitHub](https://github.com/codeconnector/CodingDojo), and submit your pull request.
7. One of the CodingDojo maintainers will help you get your PR merged.
