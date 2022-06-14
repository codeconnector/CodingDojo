pub fn can_sum_in_steps(total: usize, steps: usize, addends: &[usize]) -> bool {
    if steps == 0 { return false; }
    if addends.contains(&total) { return true; }

    for addend in addends {
        if addend > &total { continue; }
        if can_sum_in_steps(total - addend, steps - 1, addends) { return true; }
    }
    false
}

pub fn sum_of_squares(n: usize) -> usize {
    let upper_limit = (n as f64).sqrt() as usize;
    let possible_addends: Vec<_> = (1..=upper_limit).map(|x| x*x).collect();

    for step in 1..=upper_limit {
        if can_sum_in_steps(n, step, &possible_addends) { return step; }
    }

    n
}

#[cfg(test)]
mod tests {
    use super::*;

    const TEST_CASES: [(usize, usize); 5] = [
        (13,  2),
        (27,  3),
        (144, 1),
        (84,  3),
        (85,  2)
    ];

    #[test]
    fn it_works() {
        for case in &TEST_CASES {
            assert_eq!(sum_of_squares(case.0), case.1);
        }
    }
}
