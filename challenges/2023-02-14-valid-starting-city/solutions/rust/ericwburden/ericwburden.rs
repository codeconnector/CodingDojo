/// Imagine you have a set of cities that are laid out in a circle, connected by a
/// circular road that runs clockwise. Each city has a gas station that provides
/// gallons of fuel, and each city is some distance away from the next city.
/// You have a car that can drive some number of miles per gallon of fuel, and you
/// goal is to pick a starting city such that you can fill up your car with that city
/// s fuel, drive to the next city, refill up your car with that city's fuel, drive to
/// the next city, and so on until you return back to the starting city with 0 or more
/// gallons of fuel left.
/// This city is called a valid starting city, and it's guaranteed that there will
/// always be exactly one valid starting city.
/// For the actual problem, you'll be given an array of distances such that city i is
/// distance [i] away form city i+1. Since the cities are connected via a circular roa
/// , the last city is connected to the first city. In other words, the last distance
/// in the distances array is equal to the distance from the last city to the first
/// city. You ll also be given an array of fuel available at each city, where fuel[i]
/// is equal to the fuel available at city i. The total amount of fuel available (from
/// all cities combined) is exactly enough to travel to all cities. Your fuel tank
/// always starts out empty, and you're given a positive integer value for the number
/// of miles that your car can travel per gallon of fuel (miles per gallon, or MPG).
/// You can assume that you will always be given at least two cities.
pub fn valid_starting_city(distances: &[i64], fuel: &[i64], mpg: i64) -> Option<usize> {
    fuel.iter()
        .map(|gallons| mpg * gallons)
        .zip(distances)
        .scan(0, |fuel_remaining, (fuel_available, distance)| {
            // Modified cumulative sum. If the cumulative sum ever drops below zero,
            // restart the accumulation. This provides the maximum cumulative value
            // at each index, starting from the beginning.
            let carry = std::cmp::max(0, *fuel_remaining);
            *fuel_remaining = carry + fuel_available - distance;
            Some(*fuel_remaining)
        })
        .enumerate()
        .fold(None, |acc, (idx, val)| match (acc, val >= 0) {
            // Checking for the last positive value that follows a negative
            // value. If the accumulator is empty (None) and the value is positive,
            // then set the accumulator to the given index. If the accumulator is
            // not empty and a negative value is encountered, reset it to None.
            // Otherwise, keep passing forward the last index of a positive value
            // preceded by a negative value.
            (None, true) => Some(idx),
            (Some(_), false) => None,
            (_, _) => acc,
        })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_example() {
        let dist = &[5, 25, 15, 10, 15];
        let fuel = &[1, 2, 1, 0, 3];
        let mpg = 10;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(4));
    }

    #[test]
    fn test_close_nums() {
        let dist = &[10, 20, 10, 15, 5, 15, 25];
        let fuel = &[0, 2, 1, 0, 0, 1, 1];
        let mpg = 20;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(1));
    }

    #[test]
    fn test_large_outlier() {
        let dist = &[30, 25, 5, 100, 40];
        let fuel = &[3, 2, 1, 0, 4];
        let mpg = 20;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(4));
    }

    #[test]
    fn test_1g() {
        let dist = &[1, 3, 10, 6, 7, 7, 2, 4];
        let fuel = &[1, 1, 1, 1, 1, 1, 1, 1];
        let mpg = 5;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(6));
    }

    #[test]
    fn test_small_set() {
        let dist = &[5, 2, 3];
        let fuel = &[1, 0, 1];
        let mpg = 5;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(2));
    }

    #[test]
    fn test_min_array_size() {
        let dist = &[4, 6];
        let fuel = &[1, 9];
        let mpg = 1;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(1));
    }

    #[test]
    fn test_big_spread() {
        let dist = &[30, 40, 10, 10, 17, 13, 50, 30, 10, 40];
        let fuel = &[1, 2, 0, 1, 1, 0, 3, 1, 0, 1];
        let mpg = 25;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(1));
    }

    #[test]
    fn test_first_index() {
        let dist = &[30, 40, 10, 10, 17, 13, 50, 30, 10, 40];
        let fuel = &[10, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let mpg = 25;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(0));
    }

    #[test]
    fn test_last_index() {
        let dist = &[15, 20, 25, 30, 35, 5];
        let fuel = &[0, 3, 0, 0, 1, 1];
        let mpg = 26;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(5));
    }

    #[test]
    fn test_same_distances() {
        let dist = &[10, 10, 10, 10];
        let fuel = &[1, 2, 3, 4];
        let mpg = 4;
        assert_eq!(valid_starting_city(dist, fuel, mpg), Some(2));
    }
}
