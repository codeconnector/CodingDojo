# Pragmatic Pipes

A group of houses is connected to the main water plant by means of a set of pipes. A house can either be connected by a set of pipes extending directly to the plant, or indirectly by a pipe to a nearby house which is otherwise connected.

For example, here is a possible configuration, where A, B, and C are houses, S represents the 'source' (the plant), and arrows represent pipes:

A <--> B <--> C <--> S (plant)

Each pipe has an associated cost, which the utility company would like to minimize. Given an UNdirected graph of pipe connections, return the lowest cost configuration of pipes such that each house has access to water.

In the following setup, for example, we can remove all but the pipes from plant to A, plant to B, and B to C, for a total cost of 16.

```
pipes = [
    'S': [['A', 1], ['B', 5], ['C', 20]],
    'A': [['C', 15]],
    'B': [['C', 10]],
    'C': [[]]
]
```

Write a program that can take in a pipe graph like the one given above and return a pipe graph that represents the lowest cost configuration.

## Business Rules/Errata

- Due to the verbose nature of Rust, this challenge comes with some structs and methods already implemented. This is purely to help keep the meetup in our alloted time slot. When solving this challenge in another language,
you are not required to use all the structures provided.
- Regardless of language, you should create a `PipeGraph` class or struct and implement a `minimum_spanning_tree()` method that takes a node in the graph as an argument and returns a `PipeGraph` that satisfies the problem requirements listed above.
- The plant, or 'source' of water, will be labeled 'S', all other houses will be labeled with a single uppercase letter.
- The cost of pipe between houses (or the a house and the plant) will always be greater than or equal to zero.
- Your input will always consist of an array of four integers. These integers do not all need to be positive.
- The input represents an UNdirected graph. That is, in the example above, water may flow from 'A' to 'C' or from 'C' to 'A'. Water may never flow into 'S', which is the source.
- It is possible to have cycles in the `PipeGraph` (for example, A <---> B <---> C <---> A).

## Example

```
pipes = [
    'S': [['A', 1], ['B', 5], ['C', 20]],
    'A': [['C', 15]],
    'B': [['C', 10]],
    'C': [[]]
]
pipe_graph = PipeGraph::from(pipes)
minimized = pipe_graph.minimum_spanning_tree('S')

// minimized = [
//     'S': [['A', 1], ['B', 5]],
//     'B': [['C', 10]],
// ]

minimized.total_cost() // 16
```

## Tackling This Challenge
1. Make sure you've got the required software on your machine: Rust 1.54+ and a text editor.
1. The challenge will be live-coded in our weekly Tusday meetup in the `solution/src/lib.rs` file.
1. Run the tests to check your solution by navigating to `solution/` and running `cargo test`.
1. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- Rust 1.54+
