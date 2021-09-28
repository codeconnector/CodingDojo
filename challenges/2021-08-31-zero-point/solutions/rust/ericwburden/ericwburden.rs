//------------------------------------------------------------------------------------- 
// Here we set up the LinkedList struct and parts
//------------------------------------------------------------------------------------- 
#[derive(Debug)]
pub struct Node<T> {
    value: T,
    next: Link<T>,
}

type Link<T> = Option<Box<Node<T>>>;

#[derive(Debug)]
pub struct LinkedList<T> {
    head: Link<T>,
}

impl<T> LinkedList<T> {
    pub fn new() -> Self {
        LinkedList { head: None }
    }

    pub fn from(values: Vec<T>) -> Self {
        let mut out = Self::new();
        for value in values {
            out.push_value(value);
        }
        out
    }
    
    pub fn iter<'a>(&'a self) -> LinkedListIter<'a, T> {
        LinkedListIter { next: self.head.as_deref() }
    }
}

// Don't fret too much over this one, it's memory management and not that interesting
impl<T> Drop for LinkedList<T> {
    fn drop(&mut self) {
        let mut cur_link = self.head.take();
        while let Some(mut boxed_node) = cur_link {
            cur_link = boxed_node.next.take();
        }
    }
}


//------------------------------------------------------------------------------------- 
// Here we create a PushValue trait and implement it for the LinkedList and Links
//------------------------------------------------------------------------------------- 
pub trait PushValue<T> {
    //! This trait allows for pushing values onto the end of the Linked List
    fn push_value(&mut self, value: T);
}

/// The `Link`s do all the heavy lifting. If a `Link` is `None`, then it replaces
/// itself with a Link containing the pushed value. If the `Link` is already populated,
/// then it pushes the value to it's `next` Link.
impl<T> PushValue<T> for Link<T> {
    fn push_value(&mut self, value: T) {
        if let Some(n) = self {
            n.next.push_value(value);
        } else {
            let new_node = Box::new(Node { value, next: None });
            *self = Some(new_node);
        }
    }
}

/// The LinkedList struct just passes the value to its `head`, and thence on down the
/// chain of Links. If 'head' is missing, use the value as a new `head`.
impl<T> PushValue<T> for LinkedList<T> {
    fn push_value(&mut self, value: T) {
        if self.head.is_none() {
            let new_node = Box::new(Node { value, next: None });
            self.head = Some(new_node);
        } else {
            self.head.push_value(value);
        }
    }
}


//------------------------------------------------------------------------------------- 
// Let's also implement a trait that allows us to push `Link`s to the Linked List,
// to facilitate moving `Link`s around directly
//------------------------------------------------------------------------------------- 

pub trait PushLink<T> {
    fn push_link(&mut self, link: Link<T>);
}

impl<T> PushLink<T> for Link<T> {
    fn push_link(&mut self, link: Link<T>) {
        if let Some(node) = self {
            node.next.push_link(link);
        } else {
            *self = link;
        }
    }
}

impl<T> PushLink<T> for LinkedList<T> {
    fn push_link(&mut self, link: Link<T>) {
        if self.head.is_none() {
            self.head = link;
        } else {
            self.head.push_link(link);
        }
    }
}


//------------------------------------------------------------------------------------- 
// Here we implement iteration for our LinkedList (yep, have to do that manually)
//------------------------------------------------------------------------------------- 

pub struct LinkedListIter<'a, T> {
    next: Option<&'a Node<T>>,
}

impl<'a, T> Iterator for LinkedListIter<'a, T> {
    type Item = &'a Node<T>;

    fn next(&mut self) -> Option<Self::Item> {
        self.next.map(|node| {
            self.next = node.next.as_deref();
            node
        })
    }
}


//------------------------------------------------------------------------------------- 
// Finally, we write the actual function to remove zero-sum-subsequences. I'm going to
// add another `impl` for LinkedList here so that our function is a member function
// of the LinkedList struct, because that feels right.
//------------------------------------------------------------------------------------- 

// I'm going to try to explain what's going on here in comments.
impl LinkedList<i32> {
    //! Ok, first thing, notice that this `impl` block is different from the one above
    //! in that I'm using a concrete type <i32> instead of a generic type <T>. That's
    //! because a zero sequence only makes sense when the values are signed integers. I
    //! would not be able to call the `remove_zero_sequences` function on a 
    //! `LinkedList<u32>`, for example.

    pub fn remove_zero_sequences(&mut self) {
        // This `.take()` means I'm removing the first link from the LinkedList and
        // replacing it with None. Now the LinkedList struct is empty and I'm working
        // directly with the first Link. We'll put back the `Link`s that qualify.
        let mut start_link = self.head.take();

        // Similar to the JS solution, while the current working link actually is
        // something, then...
        while let Some(mut start_node) = start_link {
            // Start our total with the value of the current working node `start_node`
            let mut total = start_node.value;

            // Get a mutable reference to the Link immediately followiing `start_node`. 
            // This will either contain a `Node` or be `None`.
            let mut end_link = &mut start_node.next;

            // No need to process on the `end_node` if we found a zero in 
            // `start_node.value`.
            if total != 0 {

                // While the end_node is not None...
                while let Some(end_node) = end_link {
                    total += end_node.value;       // Update the total
                    end_link = &mut end_node.next; // Update the end_link
                    if total == 0 { break; }       // Stop processing if total is zero
                }
            }
            
            // If total is zero, we found a sub-sequence that sums to zero
            if total == 0 {
                // Take ownership of `end_link` and call it the next `start_link`
                start_link = end_link.take();
            } else {
                // If we didn't find a zero sum subsequence, then take ownership of 
                // the Link following `start_node` and call it the next `start_link`.
                // Then convert `start_node` to a Link and push it back to the original
                // `LinkedList`. Each link is really an Option<Box<Node>>, and a Box is
                // just a pointer to a piece of memory on the heap. So, we never
                // *actually* move the `Node`s, we just move the pointers to those
                // nodes from the original LinkedList to the new LinkedList.
                start_link = start_node.next.take();
                self.push_link(Some(start_node));
            }
        }
    }
}


#[cfg(test)]
mod tests {
    use super::*; 

    fn test_linked_list_equality(input: Vec<i32>, expected: Vec<i32>) {
        let mut input_ll = LinkedList::from(input);
        let expected_ll = LinkedList::from(expected);
        input_ll.remove_zero_sequences();
        
        for node_pair in input_ll.iter().zip(expected_ll.iter()) {
            assert_eq!(node_pair.0.value, node_pair.1.value);
        }
        assert_eq!(format!("{:?}", input_ll), format!("{:?}", expected_ll));

    }

    #[test]
    fn test_case_one() {
        test_linked_list_equality(vec![1, 2, -2, 3], vec![1, 3]);
    }

    #[test]
    fn test_case_two() {
        test_linked_list_equality(vec![3, 4, -7, 5, -6, 6], vec![5]);
    }

    #[test]
    fn test_case_three() {
        test_linked_list_equality(vec![1, 0, 1], vec![1, 1]);
    }

    #[test]
    fn test_case_four() {
        test_linked_list_equality(vec![1, 2, 3, 4, -4, -3, 5], vec![1, 2, 5]);
    }

    #[test]
    fn test_case_five() {
        test_linked_list_equality(vec![2, 3, 4, 5, -9], vec![2, 3]);
    }

    #[test]
    fn test_case_six() {
        test_linked_list_equality(vec![1, -1, -2, 3], vec![-2, 3]);
    }

    #[test]
    fn test_case_seven() {
        test_linked_list_equality(vec![1, -10, 5, 4], vec![]);
    }

    #[test]
    fn test_case_eight() {
        test_linked_list_equality(vec![5], vec![5]);
    }
}
