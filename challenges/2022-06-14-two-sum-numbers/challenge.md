# Two Number Sum

## Description

Given a list of `numbers` and a number `sum`, return whether any two numbers from the list add up to `sum`.

## Business Rules/Errata

- Numbers may be positive or negative integers, or 0.
- The list of numbers may contain fewer than two numbers, in which case your function should return `False`.
- **Bonus Challenge**: Identify the efficiency (time and memory) of your solution. Can you do better?

## Examples

```
two_number_sum(17, [10, 15, 3, 7])  // true
two_number_sum(17, [10, 15, 3, 8])  // false
two_number_sum(16, [10, 15, 8, 7])  // false
two_number_sum(16, [10, 15, 8, 8])  // true
two_number_sum(32, [])              // false
two_number_sum(32, [32])            // false
two_number_sum(32, [32, 0])         // true
two_number_sum(-32, [32, 0])        // false
two_number_sum(-32, [32, -64])      // true
```

## Tackling This Challenge
1. Make sure you've got the required software on your machine: [.NET Core 3.0+](https://dotnet.microsoft.com/download) and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. The challenge will be live-coded in our monthly Tuesday meetup.
4. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
5. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- .NET Core 3.0+
