use itertools::Itertools;

pub fn find_crossroads(observations: &[(u64, u64)]) -> Vec<(u64, u64)> {
    let (latitudes, longitudes): (Vec<_>, Vec<_>) = observations.iter()
        .copied()
        .multiunzip();

    let mut result = Vec::new();
    for lat in latitudes.iter().duplicates() {
        for lon in longitudes.iter().duplicates() {
            result.push((*lat, *lon));
        }
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_one() {
        //! Should find no crossroads in an empty input
        let input = vec![];
        let result = find_crossroads(&input);
        let expected = vec![];
        assert_eq!(result, expected);
    }

    #[test]
    fn test_case_two() {
        //! Should find no crossroads in a single coordinate
        let input = vec![(1, 1)];
        let result = find_crossroads(&input);
        let expected = vec![];
        assert_eq!(result, expected);
    }

    #[test]
    fn test_case_three() {
        //! Should find no crossroads in two coordinates with no tunnel
        let input = vec![(1, 1), (2, 2)];
        let result = find_crossroads(&input);
        let expected = vec![];
        assert_eq!(result, expected);
    }

    #[test]
    fn test_case_four() {
        //! Should find the crossroad for two tunnels
        let input = vec![(2, 2), (2, 34), (5, 18), (17, 18)];
        let result = find_crossroads(&input);
        let expected = vec![(2, 18)];
        assert_eq!(result, expected);
    }

    #[test]
    fn test_case_five() {
        //! Should handle tunnels with more than two coordinates
        let input = vec![(2, 2), (2, 34), (5, 18), (17, 18), (11, 1), (11, 6), (11, 29)];
        let result = find_crossroads(&input);
        let expected = vec![(2, 18), (11, 18)];
        assert_eq!(result, expected);
    }

    #[test]
    fn test_case_six() {
        //! Should ignore extra coordinates not in a tunnel
        let input = vec![
            ( 2,  2), ( 2, 34), ( 5, 18), 
            (17, 18), (11,  1), (11,  6), 
            (11, 29), (16, 24), ( 7, 12)
        ];
        let result = find_crossroads(&input);
        let expected = vec![(2, 18), (11, 18)];
        assert_eq!(result, expected);
    }

    #[test]
    fn test_case_seven() {
        //! Should find no crossroads for parallel tunnels
        let input = vec![(2, 2), (2, 34), (5, 18), (5, 22)];
        let result = find_crossroads(&input);
        let expected = vec![];
        assert_eq!(result, expected);
    }
}
