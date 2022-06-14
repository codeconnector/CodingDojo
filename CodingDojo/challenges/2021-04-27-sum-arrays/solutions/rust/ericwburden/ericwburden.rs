/// This enum basically serves as a wrapper for either single or multiply 
/// nested values
#[derive(Debug)]
pub enum NestedValue<T> {
    Single(T),
    Multiple(NestedVec<T>)
}

/// Creates a new type that is a wrapper around a Vec of NestedValue<T>
#[derive(Debug)]
pub struct NestedVec<T>(Vec<NestedValue<T>>);

/// Functions for NestedVec<T>
impl<T: Nest<T>> NestedVec<T> {
    #[allow(clippy::new_without_default)]
    pub fn new() -> Self {
        let v: Vec<NestedValue<T>> = Vec::new();
        NestedVec(v)
    }

    /// Starts a NestedVec from a NestedValue
    pub fn from(value: NestedValue<T>) -> Self {
        match value {
            NestedValue::Single(t) => NestedVec(vec![t.nest()]),
            NestedValue::Multiple(t) => t
        }
    }

    /// Push an already nested value to this NestedVec
    pub fn push(&mut self, value: NestedValue<T>) {
        self.0.push(value)
    }

    /// Convenience function, because 1.nest() looks weird
    pub fn nest_push(&mut self, value: T) {
        let nested_value = value.nest();
        self.0.push(nested_value)
    }

    /// Flatten this NestedVec into a regular Vector
    pub fn flatten(self) -> Vec<T> {
        let mut output = Vec::new();
        for item in self.0.into_iter() {
            match item {
                NestedValue::Single(t) => output.push(t),
                NestedValue::Multiple(t) => output.extend(t.flatten()),
            }
        }
        output
    }
}


/// This trait is used to add a `.nest()` method to a variety of generic types
pub trait Nest<T> {
    fn nest(self) -> NestedValue<T>;
}

impl<T> Nest<T> for T {
    fn nest(self) -> NestedValue<T> {
        NestedValue::Single(self)
    }
}

impl<T> Nest<T> for NestedVec<T> {
    fn nest(self) -> NestedValue<T> {
        NestedValue::Multiple(self)
    }
}

impl<T> Nest<T> for Vec<NestedValue<T>> {
    fn nest(self) -> NestedValue<T> {
        NestedValue::Multiple(NestedVec(self))
    }
}

impl<T: Nest<T>> Nest<T> for Vec<T> {
    fn nest(self) -> NestedValue<T> {
        let v: Vec<_> = self.into_iter().map(|x| x.nest()).collect();
        NestedValue::Multiple(NestedVec(v))
    }
}


/// All of that type and interface defining for this method...
pub fn sum_of_array<T: Nest<T> + std::iter::Sum>(input: NestedVec<T>) -> T {
    input.flatten().into_iter().sum()
}



#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_one_dimensional_list() {
        let mut input: NestedVec<u32> = NestedVec::new();
        input.push(vec![1, 2, 3, 4, 5].nest());
        assert_eq!(sum_of_array(input), 15);
    }

    #[test]
    fn test_two_dimensional_list() {
        let mut input: NestedVec<u32> = NestedVec::new();
        input.nest_push(1);
        input.nest_push(2);
        input.push(vec![1, 2, 3].nest());
        input.nest_push(4);
        input.nest_push(5);
        assert_eq!(sum_of_array(input), 18);
    }

    #[test]
    fn test_n_dimensional_list() {
        let mut input: NestedVec<u32> = NestedVec::new();
        input.nest_push(1);

        let mut sub_array = NestedVec::from(vec![1, 2].nest());
        let sub_sub_array = vec![3, 4].nest();
        sub_array.push(sub_sub_array);
        sub_array.nest_push(5);
        input.push(sub_array.nest());

        let sub_array = NestedVec::from(vec![6, 7].nest());
        input.push(sub_array.nest());
        // All of the preceding just produces [1,[1,2,[3,4],5],[6,7]]
        // Could probably write a macro to make it nice

        assert_eq!(sum_of_array(input), 29);
    }
}
