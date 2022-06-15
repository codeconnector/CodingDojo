# Three Number Sort

You're given an array of integers and another array of three distinct integers. The first array is guaranteed to only contain integers that are in the second array. The second array represents a desired order for the integers in the first array. For example, a second array of `[x,y,z]` represents a desired order of `[x, x, ..., x, y, y, ..., y, y, z, z, ..., z]` in the first array. 
Write a function that sorts the first array according to the desired order in the second array.

## Business Rules/Errata
 - The function must perform this in place (IE it should mutate the input array), and should use constant space.
 - The desired order won't necessarily be ascending or descending
 - The first array won't necessarily contain all three integers found in the second array, it may only contain one or two.
 - The first array is guaranteed to only contain integers in the second array - it just doesn't have to be all of them.
 - This should run in O(N) time and O(1) space.

## Examples
```
array = [1, 0, 0, -1, -1, 0, 1, 1]
order = [0, 1, -1]
three_number_sort(array, order) -> [0, 0, 0, 1, 1, 1, -1, -1]
```

## Tackling This Challenge
1. Make sure you've got the required software on your machine: [.NET Core 3.0+](https://dotnet.microsoft.com/download) and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. The challenge will be live-coded in our weekly Tusday meetup.
4. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
5. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- .NET Core 3.0+
