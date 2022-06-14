// # Move Element to End
// 
// You're given an array of integers and an integer. Write a function that moves all
// instances of that integer in the array to the end of the array and returns the
// array. The potential difficulty of this challenge lies in achieving the optimal time
// and space complexity, so they will be a rule requirement.

fn stable_partition<T: PartialEq>(arr: &mut [T], to_move: T) {
    let (mut p1, mut p2) = (0, 0);

    while p2 < arr.len() {
        // Any time p1 == p2 (like on the first loop), move p2
        // forward and go to the next loop. Same thing if p2 points
        // to an item that matches `to_move`.
        if p1 == p2 || arr[p2] == to_move {
            p2 += 1;
            continue; 
        } 

        // Any time p1 points to a item matching `to_move` (and p2 does not
        // since we've made it this far in the loop), swap the items at p1 and
        // p2, then move p1 forward.
        if arr[p1] == to_move {
            arr.swap(p1, p2);
            p1 += 1;
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*; 
    
    #[test]
    fn should_handle_empty_array() {
        let mut input = Vec::new();
        stable_partition(&mut input, 0);
        assert!(input.is_empty());
    }

    #[test]
    /// When all instances of `to_move` are already at the end of the slice,
    /// then everything should be left as-is
    fn should_not_modify_partitioned_input() {
        let mut input = [2, 1, 1, 1];
        let copy = input;
        stable_partition(&mut input, 1);
        assert_eq!(input, copy);
    }

    #[test]
    fn should_not_modify_input_if_to_move_missing() {
        let mut input = [1, 2, 4, 5, 6];
        let copy = input;
        stable_partition(&mut input, 3);
        assert_eq!(input, copy);
    }

    #[test]
    fn should_return_input_if_all_to_move() {
        let mut input = [3, 3, 3];
        let copy = input;
        stable_partition(&mut input, 3);
        assert_eq!(input, copy)
    }

    #[test]
    fn should_move_a_single_value() {
        let mut input = [1, 2, 2, 2, 2, 2, 2];
        stable_partition(&mut input, 1);
        input.iter().take(6).for_each(|i| assert_eq!(*i, 2));
        assert_eq!(input[6], 1);
    }

    #[test]
    fn should_move_multiple_values() {
        let mut input = [2, 1, 2, 2, 2, 3, 4, 2];
        stable_partition(&mut input, 2);
        input.iter().skip(3).for_each(|i| assert_eq!(*i, 2));
    }
}
