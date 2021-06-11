# Square Maze
Given a square (NxN) matrix of '0's and '1's, determine how many ways the matrix can be traversed from the top left element to the bottom right element.

# Business Rules/Errata
- Data Structure Required: 2D Matrix
- Assume the matrix represents a 2-dimensional map.
- You may only move up, down, left, and right in the matrix, not diagonally.
- You may only traverse matrix elements that are '0' (representing an empty space). A '1' represents an impassible barrier.
- The top left and bottom right corner will always be '0'.
- If there is no path from the top left to the bottom right, return 0. Otherwise, return the number of viable paths as an integer.

# Examples
```
input = [[0, 0, 1],
         [0, 0, 1],
         [1, 0, 0]]

```

```
count_paths(input)  => 2
```

In this case, there are two viable paths, starting at the top left:

right, down, down, right

down, right, down, right

# System Requirements
If you're on a mac, ruby is installed. On windows it's possible through a couple of ways. 
[Ruby Installer](https://www.ruby-lang.org/en/documentation/installation/#rubyinstaller)
or [other options](https://www.ruby-lang.org/en/documentation/installation/)


If you want to use `bundler` to install the test runner dependencies, [more info can be found here](https://bundler.io/)


You will need 'rspec' if you want to run the tests. From the project `src/` folder run either:
```
gem install rspec
```

or if you have bundler installed

```
bundle install
```

- Then to run the tests from the `src/` folder, to see the output simply type 
```
rspec spec --format doc
```

- After your tests pass, copy your code into a new file `githubname.ext` in the `solutions/` folder
- Eg: My ruby solution would become a new file `solutions/ruby/parhaml.rb`
