use std::iter::zip;

#[allow(dead_code)]
fn hidden_digits(s: &str) -> String {
    let time_in = s
        .chars()
        .filter(|c| *c != ':')
        .map(|c| c.to_digit(10))
        .collect::<Vec<_>>();
    let mut max_vals = vec![2, 3, 5, 9];
    if let Some(h) = time_in[1] {
        if h > 3 { max_vals[0] = 1; }
    }
    if let Some(h) = time_in[0] {
        if h < 2 { max_vals[1] = 9; }
    }

    let out: Vec<_> = zip(time_in, max_vals)
        .map(|(a, b)| a.unwrap_or(b))
        .collect();
    format!("{}{}:{}{}", out[0], out[1], out[2], out[3])
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_tests() {
        assert_eq!(hidden_digits("2?:?0"), String::from("23:50"));
        assert_eq!(hidden_digits("0?:3?"), String::from("09:39"));
        assert_eq!(hidden_digits("?7:?1"), String::from("17:51"));
        assert_eq!(hidden_digits("1?:22"), String::from("19:22"));
        assert_eq!(hidden_digits("00:00"), String::from("00:00"));
        assert_eq!(hidden_digits("??:??"), String::from("23:59"));
    }
}
