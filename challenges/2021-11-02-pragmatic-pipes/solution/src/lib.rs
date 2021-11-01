// A group of houses is connected to the main water plant by means of a set of pipes.
// A house can either be connected by a set of pipes extending directly to the plant, or
// indirectly by a pipe to a nearby house which is otherwise connected.
//
// For example, here is a possible configuration, where A, B, and C are houses, S 
// represents the 'source' (the plant), and arrows represent pipes:
//
// A <--> B <--> C <--> S (plant)
//
// Each pipe has an associated cost, which the utility company would like to minimize.
// Given an undirected graph of pipe connections, return the lowest cost configuration
// of pipes such that each house has access to water.
//
// In the following setup, for example, we can remove all but the pipes from plant to A,
// plant to B, and B to C, for a total cost of 16.
//
// pipes = {
//     'S': {'A': 1, 'B': 5, 'C': 20},
//     'A': {'C': 15},
//     'B': {'C': 10},
//     'C': {}
// }

//! This challenge setup is a bit more involved that the usual Coding Dojo challenge. In
//! an effort to keep the meetup time down to an hour, and due to the fairly verbose
//! nature of Rust code, this challenge setup includes a number of convenience structs
//! and methods on those structs. There are several functions defined that have not been
//! implemented, containing the `todo!()` macro. Filling in these functions is the goal
//! of the challenge. When completing this challenge in another language, you may use
//! as much or as little of the surrounding setup as you need/want.

// You can take these imports as hints about what types of data structures and traits
// are necessary to complete this challenge. You may add more or choose not to use the
// imports listed.
use std::cmp::Reverse;
use std::collections::{BinaryHeap, HashMap, HashSet};
use std::convert::From;

/// Represents a node in the graph of pipe connections, wrapping the label for 
/// each house or the utility plant ('S'). 
#[derive(Debug, Hash, PartialEq, Eq, PartialOrd, Ord, Clone, Copy)]
struct Node(char);

impl From<char> for Node {
    fn from(value: char) -> Node {
        todo!()
    }
}

/// Represents the graph of pipe connections. Each key in the outer HashMap corresponds
/// to a Node label, whose value is a HashMap of other connected Nodes. The inner
/// HashMaps contain the cost of pipe between the outer Node and the inner Node. This
/// type may be read as HashMap<`Start Node`, HashMap<`End Node`, `Pipe Cost`>>
#[derive(Debug)]
struct PipeGraph(HashMap<Node, HashMap<Node, usize>>);

/// Generate an empty PipeGraph
impl Default for PipeGraph {
    fn default() -> Self {
        PipeGraph(HashMap::new())
    }
}

/// Convert from the input format into a PipeGraph
impl From<&Vec<(char, Vec<(char, usize)>)>> for PipeGraph {
    fn from(value: &Vec<(char, Vec<(char, usize)>)>) -> Self {
        todo!()
    }
}

impl PipeGraph {
    /// Add an edge to the PipeGraph, indicating a connection between the `start` and
    /// `end` nodes, and the cost of the pipe between them. 
    fn insert_edge(&mut self, start: &Node, end: &Node, cost: usize) {
        self.0.entry(*start).or_default().insert(*end, cost);
    }

    /// Returns the cost of pipe between two Nodes in the PipeGraph. There are three
    /// cases to account for:
    /// - If `start` and `end` are the same Node, return 0
    /// - If `start` and `end` are connected, return the cost of the pipe between them
    /// - Otherwise (not connected, one or the other Node not in the PipeGraph) 
    ///   return usize::MAX to indicate an absurdly large cost between the two.
    fn get_edge_cost(&self, start: &Node, end: &Node) -> usize {
        if start == end { return 0; }
        let maybe_cost = self
            .0
            .get(start)
            .map(|destinations| destinations.get(end))
            .flatten();
        if let Some(cost) = maybe_cost {
            return *cost;
        }
        usize::MAX
    }

    /// Return references to the destination Nodes connected to the given Node
    fn get_neighbors(&self, node: &Node) -> Vec<&Node> {
        if let Some(neighbor_map) = self.0.get(node) {
            return neighbor_map.keys().collect();
        }
        Vec::new()
    }

    /// Indicate if the PipeGraph contains a connection between `start` and `end` Nodes
    fn has_edge(&self, start: &Node, end: &Node) -> bool {
        self.0
            .get(start)
            .map(|destinations| destinations.get(end))
            .flatten()
            .is_some()
    }

    /// Calculate the total cost of pipe in the PipeGraph
    fn total_cost(&self) -> usize {
        self.0.values().flat_map(|d| d.values()).sum()
    }

    /// Identify and return a PipeGraph that represents a subset of the current
    /// PipeGraph that covers the entire service area at minimal cost.
    fn minimum_spanning_tree(&self, node: Node) -> PipeGraph {
        todo!()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_find_minimum_cost_for_simplest_map() {
        let pipes = vec![
            ('S', vec![]),
        ];
        let pipe_graph = PipeGraph::from(&pipes);
        let result = pipe_graph.minimum_spanning_tree(Node::from('S'));

        assert_eq!(result.total_cost(), 0);
    }

    #[test]
    fn should_find_minimum_cost_for_example() {
        let pipes = vec![
            ('S', vec![('A', 1), ('B', 5), ('C', 20)]),
            ('A', vec![('C', 15)]),
            ('B', vec![('C', 10)]),
            ('C', vec![]),
        ];
        let pipe_graph = PipeGraph::from(&pipes);
        let result = pipe_graph.minimum_spanning_tree(Node::from('S'));

        assert!(result.has_edge(&Node::from('S'), &Node::from('A')));
        assert!(result.has_edge(&Node::from('S'), &Node::from('B')));
        assert!(!result.has_edge(&Node::from('S'), &Node::from('C')));
        assert!(!result.has_edge(&Node::from('A'), &Node::from('C')));
        assert!(result.has_edge(&Node::from('B'), &Node::from('C')));
        assert_eq!(result.total_cost(), 16);
    }

    #[test]
    fn should_find_minimum_cost_for_example_with_cycles() {
        let pipes = vec![
            ('S', vec![('A', 1),  ('B', 5), ('C', 20)]),
            ('A', vec![('C', 15), ('S', 1)]),
            ('B', vec![('C', 10)]),
            ('C', vec![('B', 10)]),
        ];
        let pipe_graph = PipeGraph::from(&pipes);
        let result = pipe_graph.minimum_spanning_tree(Node::from('S'));

        assert!(result.has_edge(&Node::from('S'), &Node::from('A')));
        assert!(result.has_edge(&Node::from('S'), &Node::from('B')));
        assert!(!result.has_edge(&Node::from('S'), &Node::from('C')));
        assert!(!result.has_edge(&Node::from('A'), &Node::from('C')));
        assert!(result.has_edge(&Node::from('B'), &Node::from('C')));
        assert_eq!(result.total_cost(), 16);
    }

    #[test]
    fn should_find_minimum_cost_for_irreducible_graph() {
        let pipes = vec![
            ('S', vec![('A', 1), ('B', 5)]),
            ('A', vec![]),
            ('B', vec![('C', 10)]),
        ];
        let pipe_graph = PipeGraph::from(&pipes);
        let result = pipe_graph.minimum_spanning_tree(Node::from('S'));

        assert!(result.has_edge(&Node::from('S'), &Node::from('A')));
        assert!(result.has_edge(&Node::from('S'), &Node::from('B')));
        assert!(!result.has_edge(&Node::from('S'), &Node::from('C')));
        assert!(!result.has_edge(&Node::from('A'), &Node::from('C')));
        assert!(result.has_edge(&Node::from('B'), &Node::from('C')));
        assert_eq!(result.total_cost(), 16);
    }

    #[test]
    fn should_find_minimum_cost_for_large_graph() {
        let pipes = vec![
            ('S', vec![('A', 1),  ('B', 5), ('C', 20)]),
            ('A', vec![('C', 15), ('D', 5), ('E', 10)]),
            ('B', vec![('C', 10), ('E', 100), ('F', 100)]),
            ('C', vec![('G', 10), ('H', 100), ('I', 100)]),
            ('D', vec![('E', 1),  ('F', 1),   ('G', 500)]),
            ('E', vec![('G', 10), ('H', 500)]),
            ('F', vec![('I', 5)]),
            ('G', vec![('H', 50), ('I', 1)]),
            ('H', vec![('I', 30)]),
            ('I', vec![]),
        ];
        let pipe_graph = PipeGraph::from(&pipes);
        let result = pipe_graph.minimum_spanning_tree(Node::from('S'));

        assert!(result.has_edge(&Node::from('A'), &Node::from('D')));
        assert!(result.has_edge(&Node::from('B'), &Node::from('C')));
        assert!(result.has_edge(&Node::from('D'), &Node::from('E')));
        assert!(result.has_edge(&Node::from('D'), &Node::from('F')));
        assert!(result.has_edge(&Node::from('E'), &Node::from('G')));
        assert!(result.has_edge(&Node::from('F'), &Node::from('I')));
        assert!(result.has_edge(&Node::from('G'), &Node::from('H')));

        assert!(!result.has_edge(&Node::from('S'), &Node::from('C')));
        assert!(!result.has_edge(&Node::from('A'), &Node::from('C')));
        assert!(!result.has_edge(&Node::from('A'), &Node::from('E')));
        assert!(!result.has_edge(&Node::from('B'), &Node::from('E')));
        assert!(!result.has_edge(&Node::from('B'), &Node::from('F')));
        assert!(!result.has_edge(&Node::from('C'), &Node::from('G')));
        assert!(!result.has_edge(&Node::from('C'), &Node::from('H')));
        assert!(!result.has_edge(&Node::from('C'), &Node::from('I')));
        assert!(!result.has_edge(&Node::from('D'), &Node::from('G')));
        assert!(!result.has_edge(&Node::from('E'), &Node::from('H')));
        assert!(!result.has_edge(&Node::from('G'), &Node::from('I')));
        assert!(result.0.get(&Node::from('I')).is_none());

        assert_eq!(result.total_cost(), 88);
    }
}
