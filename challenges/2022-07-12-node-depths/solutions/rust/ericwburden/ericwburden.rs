// Type alias for `BTreeNode`s that are nested in another struct, since
// Rust requires us to be super explicit about the types. In this case,
// a `BTreeNode<T>` is a node with a value of type `T`, a `Box<...>` 
// is a wrapper type that puts the inner object on the heap so it can be
// referenced by other scopes that don't own the data, and an `Option<...>`
// indicates a type may be missing, so it's either a `Some<value>` or a 
// `None`. It's basically a replacement for `null`, just more explicit.
type ChildNode<T> = Option<Box<BTreeNode<T>>>;

/// A basic node in our binary tree, containing a value of some generic type
/// `T` and a left and right child node.
#[derive(Debug)]
#[allow(dead_code)]
pub struct BTreeNode<T> {
    value: T, // Never used
    left: ChildNode<T>,
    right: ChildNode<T>,
}

impl<T> BTreeNode<T> {
    /// Create a new `BTreeNode<T>` from some value of type `T` (aka, it doesn't matter
    /// what type).
    pub fn from(value: T) -> Self {
        Self { value, left: None, right: None }
    }

    /// Adds a node as the left child node
    pub fn set_left(mut self, left: BTreeNode<T>) -> Self {
        self.left = Some(Box::new(left));
        self
    }

    /// Adds a node as the right child node
    pub fn set_right(mut self, right: BTreeNode<T>) -> Self {
        self.right = Some(Box::new(right));
        self
    }
}


/// A struct representing a binary tree, which is just a wrapper around a `root`
/// `ChildNode<T>`. This is done so functions can be added to a `BTree<T>` without
/// needing to support those functions on an individual node.
#[derive(Debug)]
pub struct BTree<T> {
    root: ChildNode<T>
}

impl<T> BTree<T> {
    /// Create a new `BTree<T>` from a `BTreeNode<T>`
    pub fn from(node: BTreeNode<T>) -> Self {
        Self { root: Some(Box::new(node)) }
    }

    /// Produces an iterator (`BTreeDepthFirstIter<'a, T>`) over the nodes in a
    /// `BTree<T>`. This moves the functionality for walking through the tree nodes
    /// to a separate data structure.
    pub fn depth_first_iter<'a>(&'a self) -> BTreeDepthFirstIter<'a, T> {
        let stack = match &self.root {
            Some(x) => vec![(x, 0)],
            None => Vec::new(),
        };
        BTreeDepthFirstIter { stack }
    }
}

/// An iterator (depth-first, pre-order) over the nodes in a `BTree<T>`. All the 
/// weird `&'a` symbols just indicate the fact that the references to nodes returned
/// from this iterator should remain valid for as long as the `BTree<T>` the iterator
/// was created from remains in scope. This is some Rust stuff that makes sure you 
/// can't try to read data from a `BTree<T>` whose underlying memory has been freed
/// and potentially given over to some other process or part of your program.
pub struct BTreeDepthFirstIter<'a, T> {
    stack: Vec<(&'a Box<BTreeNode<T>>, usize)>
}

impl<'a, T> Iterator for BTreeDepthFirstIter<'a, T> {
    type Item = (&'a Box<BTreeNode<T>>, usize);

    /// The depth-first search is implemented here. The iterator maintains a stack
    /// of references to nodes with their depth, and keeps adding valeus to the stack
    /// and returning values from the stack so long as there are nodes that haven't
    /// been returned yet. Once the stack is empty, this function returns `None` to
    /// indicate that the iterator is done.
    fn next(&mut self) -> Option<Self::Item> {
        if self.stack.is_empty() { return None; }

        // Safe because stack is checked for items above
        let (node, depth) = self.stack.pop().unwrap();
        if let Some(right) = &node.right {
            self.stack.push((right, depth + 1));
        }
        if let Some(left) = &node.left { 
            self.stack.push((left, depth + 1)); 
        }
        Some((node, depth))
    }
}

/// With most of the logic for traversing the binary tree implemented for the 
/// `BTreeDepthFirstIter<'a, T>`, this function becomes very simple.
pub fn node_depths<T>(root: &BTree<T>) -> usize {
    // For each (node, depth) pair in the tree, sum the depths and return the total
    root.depth_first_iter().map(|(_, d)| d).sum::<usize>()
}

/// The iterator-based design allows us to flexibly implement other functionality,
/// though. Summing all the node values is super simple now as well.
pub fn node_sums<Usize>(root: &BTree<usize>) -> usize {
    // For each (node, depth) pair in the tree, sum the values of the nodes and return
    root.depth_first_iter().map(|(n, _)| n.value).sum::<usize>()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let new_node
            = BTreeNode::from(1)
            .set_left(
                BTreeNode::from(2)
                .set_left(
                    BTreeNode::from(4)
                    .set_left(BTreeNode::from(8))
                    .set_right(BTreeNode::from(9))
                )
                .set_right(BTreeNode::from(5))
            )
            .set_right(
                BTreeNode::from(3)
                .set_left(BTreeNode::from(6))
                .set_right(BTreeNode::from(7))
            );
        let tree = BTree::from(new_node);
        assert_eq!(node_depths(&tree), 16);
        assert_eq!(node_sums::<usize>(&tree), 45);
    }
}
