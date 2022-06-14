use std::collections::{HashMap, HashSet, VecDeque};
use std::hash::Hash;

//--------------------------------------------------------------------------------------
//--IsAdjacentTo: A trait used to determine whether two elements of the same type should
//--be considered 'linked' in our graph structures.
//--------------------------------------------------------------------------------------

trait IsAdjacentTo {
    fn is_adjacent_to(&self, other: &Self) -> bool;
}

impl IsAdjacentTo for &str {
    /// A string is adjacent to another string if they have only one letter different
    fn is_adjacent_to(&self, other: &Self) -> bool {
        if self.len() != other.len() { return false; }
        let differing_letters: u8 = self.chars()
            .zip(other.chars())
            .map(|(a, b)| if a == b { 0 } else { 1 })
            .sum();
        differing_letters <= 1
    }
}

impl IsAdjacentTo for i32 {
    /// An i32 is adjacent to another i32 if the absolute difference between the two is
    /// less than 5
    fn is_adjacent_to(&self, other: &Self) -> bool {
        (self - other).abs() < 5
    }
}

//--------------------------------------------------------------------------------------
//--AdjacencyMatrix: A data structure that can be used to represent a graph. 
//--The adjacency matrix is a 2D vector, with one row and column per node in
//--the graph. A 'true' in a space indicates that the node in that row is 
//--connected to the node in that column. This means that there are two possible
//--spaces on the matrix to represent a connection, which can be used to indicate
//--directed connections, i.e. A -> B, but not B -> A. This would look like 
//--A[row]xB[col] == true && B[row]xA[col] == false.
//--For more info on adjacency matrices, see
//--https://www.sciencedirect.com/topics/computer-science/adjacency-matrix.
//--------------------------------------------------------------------------------------

struct AdjacencyMatrix<T> {
    items: Vec<T>,                      // The items to be linked in the matrix
    item_indices: HashMap<T, usize>,    // Conveniently maps items to row/col indices
    matrix: Vec<Vec<bool>>,             // Map of the links between items
}

impl<T: Eq + Clone + Hash + IsAdjacentTo> AdjacencyMatrix<T> {
    fn from(items: &[T]) -> Self {
        let items = items.to_vec();
        let mut item_indices = HashMap::with_capacity(items.len());
        for (idx, item) in items.iter().enumerate() {
            item_indices.insert(item.clone(), idx); 
        }

        let mut matrix = vec![vec![false; items.len()]; items.len()];
        for (row_node, row_idx) in item_indices.iter() {
            for (col_node, col_idx) in item_indices.iter() {
                matrix[*row_idx][*col_idx] = row_node.is_adjacent_to(col_node);
            }
        }

        AdjacencyMatrix { items, item_indices, matrix }
    }

    /// Shorthand for fetching the index of an item
    fn index_of(&self, item: &T) -> Option<usize> {
        self.item_indices.get(item).copied()
    }

    /// Calculate the shortest path from `start` to `end` through the adjacency matrix.
    /// In cases where there is more than one shortest path, will return the first one
    /// found. If no path exists, return None.
    fn shortest_path(&self, start: &T, end: &T) -> Option<Vec<T>> {
        let (start_idx, end_idx) = match (self.index_of(start), self.index_of(end)) {
            (Some(s), Some(e)) => (s, e),
            _ => return None,
        };
        let mut visited = vec![false; self.items.len()];
        let mut deque = VecDeque::new();
        deque.push_back((start_idx, vec![start_idx]));

        while let Some((node_idx, path)) = deque.pop_front() {
            if node_idx == end_idx {
                return Some(path.iter().map(|i| self.items[*i].clone()).collect());
            }

            for (col_idx, is_adjacent) in self.matrix[node_idx].iter().enumerate() {
                if visited[col_idx] { continue; }
                if *is_adjacent {
                    visited[col_idx] = true;
                    let mut path_to_here = path.clone();
                    path_to_here.push(col_idx);
                    deque.push_back((col_idx, path_to_here));
                }
            }
        }
        None
    }

}

//--------------------------------------------------------------------------------------
//--AdjacencyList: Another data structure that can be used to represent a graph.
//--An adjacency list consists of a HashMap, with one key per item in the graph, and
//--values that represent the other items in the graph that the key item is linked
//--to. For more information on adjacency lists (sometimes called adjacency set lists),
//--see https://en.wikipedia.org/wiki/Adjacency_list
//--------------------------------------------------------------------------------------

struct AdjacencyList<T>(HashMap<T, Vec<T>>);

impl<T: Clone + Eq + Hash + IsAdjacentTo> AdjacencyList<T> {
    fn from(items: &[T]) -> Self {
        let mut adjacency_list = HashMap::new();
        for item in items.iter() {
            let mut adjacent_items = Vec::new();
            for other_item in items.iter() {
                if item.is_adjacent_to(other_item) { adjacent_items.push(other_item.clone()); }
            }
            adjacency_list.insert(item.clone(), adjacent_items);
        }
        AdjacencyList(adjacency_list)
    }

    /// Calculate the shortest path from `start` to `end` through the adjacency matrix.
    /// In cases where there is more than one shortest path, will return the first one
    /// found. If no path exists, return None. Basically the same algorithm as for the
    /// adjacency matrix, just re-tooled for an adjacency list.
    fn shortest_path(&self, start: &T, end: &T) -> Option<Vec<T>> {
        if !self.0.contains_key(start) || !self.0.contains_key(end) { return None; }
        let mut visited = HashSet::new();
        let mut deque = VecDeque::new();
        deque.push_back((start, vec![start.clone()]));

        while let Some((node, path)) = deque.pop_front() {
            if node == end { return Some(path); }

            for neighbor in self.0.get(node).unwrap().iter() {
                if visited.contains(neighbor) { continue; }
                visited.insert(neighbor);
                let mut path_to_here = path.clone();
                path_to_here.push(neighbor.clone());
                deque.push_back((neighbor, path_to_here));
            }
        }
        None

    }
}


//--------------------------------------------------------------------------------------
//--NodeGraph: Basically just a convenient interface to the different data structures.
//--If no other data structure is initiated, will calculate the shortest distance using
//--the algorithm discussed during the meetup.
//--------------------------------------------------------------------------------------

#[allow(dead_code)]
struct NodeGraph<T> {
    nodes: Vec<T>,
    adjacency_matrix: Option<AdjacencyMatrix<T>>,
    adjacency_list: Option<AdjacencyList<T>>,
}

#[allow(dead_code)]
impl<T: Hash + Eq + Clone + IsAdjacentTo> NodeGraph<T> {
    fn new(nodes: &[T]) -> Self {
        let nodes = nodes.to_vec();
        NodeGraph { nodes, adjacency_matrix: None, adjacency_list: None }
    }

    fn build_adjacency_matrix(&mut self) -> &mut Self {
        self.adjacency_matrix = Some(AdjacencyMatrix::from(&self.nodes));
        self
    }

    fn build_adjacency_list(&mut self) -> &mut Self {
        self.adjacency_list = Some(AdjacencyList::from(&self.nodes));
        self
    }

    /// Dispatches the shortest path algorithm based on which data structure is 
    /// available
    fn shortest_path(&self, start: &T, end: &T) -> Option<Vec<T>> {
        if let Some(adjacency_list) = &self.adjacency_list {
            return adjacency_list.shortest_path(start, end);
        }
        if let Some(adjacency_matrix) = &self.adjacency_matrix {
            return adjacency_matrix.shortest_path(start, end);
        }
        self.shortest_path_default(start, end)
    }

    fn shortest_path_default(&self, start: &T, end: &T) -> Option<Vec<T>> {
        if !self.nodes.contains(start) || !self.nodes.contains(end) { return None; }
        let mut visited = vec![false; self.nodes.len()];
        let mut deque = VecDeque::new();
        deque.push_back((start, vec![start.clone()]));

        while let Some((node, path)) = deque.pop_front() {
            if node == end { return Some(path); }
            
            for (idx, other_node) in self.nodes.iter().enumerate() {
                if visited[idx] { continue; }
                if node.is_adjacent_to(other_node) {
                    visited[idx] = true;
                    let mut path_to_here = path.clone();
                    path_to_here.push(other_node.clone());
                    deque.push_back((other_node, path_to_here));
                }
            }
        }
        None
    }
}


//--------------------------------------------------------------------------------------
//--Tests!
//--------------------------------------------------------------------------------------
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_find_shortest_path_when_there_is_only_one_step() {
        let words = ["cat", "car"];
        let result = NodeGraph::new(&words)
            .build_adjacency_matrix()
            .shortest_path(&"cat", &"car");
        let expected = Some(vec!["cat", "car"]);
        assert_eq!(result, expected);
    }

    #[test]
    fn should_find_shortest_path_through_multiple_steps() {
        let words = ["dog", "dop", "dot", "cop", "cap", "car", "cat"];
        let result = NodeGraph::new(&words)
            .build_adjacency_matrix()
            .shortest_path(&"dog", &"cat");
        let expected = Some(vec!["dog", "dop", "cop", "cap", "cat"]);
        assert_eq!(result, expected);
    }

    #[test]
    fn should_return_non_when_no_path_exists() {
        let words = ["bears", "truck", "frond", "crank", "drops", "blame", "share"];
        let result = NodeGraph::new(&words)
            .build_adjacency_matrix()
            .shortest_path(&"bears", &"share");
        let expected = None;
        assert_eq!(result, expected);
    }

    #[test]
    fn should_find_shortest_path_of_multiple_possible_paths() {
        let words = ["food", "frod", "frog", "grog", "guog", "gung", "dung", "fond", "fund", "fung"];
        let result = NodeGraph::new(&words)
            .build_adjacency_matrix()
            .shortest_path(&"food", &"dung");
        let expected = Some(vec!["food", "fond", "fund", "fung", "dung"]);
        assert_eq!(result, expected);
    }

    #[test]
    fn should_find_shortest_path_with_cycles_in_the_graph() {
        let words = ["tot", "tod", "tid", "tim", "tom", "kim", "kid"];
        let result = NodeGraph::new(&words)
            .build_adjacency_matrix()
            .shortest_path(&"tot", &"kid");
        let expected = Some(vec!["tot", "tod", "tid", "kid"]);
        assert_eq!(result, expected);
    }

    #[test]
    fn should_find_shortest_path_with_other_data_types() {
        let numbers = [1, 8, 15, 40, 42, 12, 18, 37, 21, 30, 25];
        let result = NodeGraph::new(&numbers)
            .build_adjacency_matrix()
            .shortest_path(&8, &21);
        let expected = Some(vec![8, 12, 15, 18, 21]);
        assert_eq!(result, expected);
    }

    #[test]
    fn should_find_shortest_path_using_multiple_data_structures() {
        let words = ["dog", "dop", "dot", "cop", "cap", "car", "cat"];
        let result = NodeGraph::new(&words)
            .build_adjacency_matrix()
            .shortest_path(&"dog", &"cat");
        let expected = Some(vec!["dog", "dop", "cop", "cap", "cat"]);
        assert_eq!(result, expected);

        let result = NodeGraph::new(&words)
            .build_adjacency_list()
            .shortest_path(&"dog", &"cat");
        assert_eq!(result, expected);

        let result = NodeGraph::new(&words).shortest_path(&"dog", &"cat");
        assert_eq!(result, expected);

    }
}

