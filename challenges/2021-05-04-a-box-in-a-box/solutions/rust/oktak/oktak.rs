// # A Box in a Box (2021-05-04-a-box-in-a-box)

// Given a pair of rectangles, determine whether one of the rectangles is completely contained within the other rectangle. You will be given each rectangles top-left coordinate in an x/y plane, the rectangle's width, and the rectangle's height. One rectangle is "completely contained" by a rectangle that completely covers it, if viewed from above the plane. This puzzle should be solved using an Object-Oriented approach.

// ## Business Rules/Errata

// - ***Data Structure Required: Rectangle*** You should produce and compare `Rectangle` objects in your solution, not the raw rectangle measurements.
// - The rectangle dimensions will be given in an array, in the format [(top left x coordinate), (top left y coordinate), (width), (height)].
// - Your function should take two Rectangle objects as arguments.
// - The units of width and height are irrelevant and can be ignored.
// - **The coordinate system for this challenge is 2-dimensional, with x increasing from left to right, and y increasing from top to bottom.**
// - Your final result should include a function that, given two sets of rectangle dimensions, returns a boolean value,
// - Your function should return `false` if the two rectangles only partially overlap.


// [(top left x coordinate), (top left y coordinate), (width), (height)]
pub struct Rectangle {
    x0: i32,
    y0: i32,
    w: i32,
    h: i32,
}

impl Rectangle {
    fn new(b: &[i32; 4]) -> Rectangle {
        Rectangle {
            x0: b[0],
            y0: b[1],
            w: b[2],
            h: b[3],
        }
    }
}

pub fn determine_within(box1: &Rectangle, box2: &Rectangle) -> bool {
    if box1.w <= 0 || box1.h <= 0 || box2.w <= 0 || box2.h <= 0 {
        // Rectangle should be rejected, and return `false`
        false
    } else if box2.x0 < box1.x0 {
        false
    } else if box2.y0 < box1.y0 {
        false
    } else if box2.x0 + box2.w > box1.x0 + box1.w {
        false
    } else if box2.y0 + box2.h > box1.y0 + box1.h {
        false
    } else {
        true
    }
}

pub fn overlaps(b1: &[i32; 4], b2: &[i32; 4]) -> bool {
    let box1 = Rectangle::new(b1);
    let box2 = Rectangle::new(b2);

    return determine_within(&box1, &box2) || determine_within(&box2, &box1)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_one() {
        // It is inside the box1
        let box1 = &[12, 16, 45, 35];
        let box2 = &[10, 15, 50, 40];

        assert_eq!(overlaps(&box1, &box2), true);
    }

    #[test]
    fn test_two() {
        // Two box are overlapped
        let box1 = &[10, 15, 50, 40];
        let box2 = &[10, 15, 50, 40];

        assert_eq!(overlaps(&box1, &box2), true);
    }

    #[test]
    fn test_three() {
        // It is partly outside the box1
        let box1 = &[10, 15, 50, 40];
        let box2 = &[5, 10, 50, 40];

        assert_eq!(overlaps(&box1, &box2), false);
    }

    #[test]
    fn test_four() {
        // It is completely outside the box1
        let box1 = &[10, 15, 50, 40];
        let box2 = &[100, 150, 50, 40];

        assert_eq!(overlaps(&box1, &box2), false);
    }

    /// //
    /// Rectangle should be rejected, and return `false`
    /// //
    #[test]
    fn test_five() {
        // Zero size rectangle
        let box1 = &[10, 15, 50, 40];
        let box2 = &[0, 0, 0, 0];

        assert_eq!(overlaps(&box1, &box2), false);
    }

    #[test]
    fn test_six() {
        // Negative dimension
        let box1 = &[10, 15, 50, 40];
        let box2 = &[12, 16, -30, -20];

        assert_eq!(overlaps(&box1, &box2), false);
    }
}
