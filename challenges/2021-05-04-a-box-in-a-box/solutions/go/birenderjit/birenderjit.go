/*Package rectangle is the implementation of the Box in a Box challenge
*
*  Given a pair of rectangles, determine whether one of the rectangles is completely
* contained within the other rectangle. You will be given each rectangles top-left
* coordinate in an x/y plane, the rectangle's width, and the rectangle's height.
* One rectangle is "completely contained" by a rectangle that completely covers it,
* if viewed from above the plane. This puzzle should be solved using an
* Object-Oriented approach.
*
*
*  ** Business Rules/Errata
*
*  - ***Data Structure Required: Rectangle*** You should produce and compare
* `Rectangle` objects in your solution, not the raw rectangle measurements.
*  - The rectangle dimensions will be given in an array, in the format
*  [(top left x coordinate), (top left y coordinate), (width), (height)].
*  - Your function should take two Rectangle objects as arguments.
*  - The units of width and height are irrelevant and can be ignored.
*  - **The coordinate system for this challenge is 2-dimensional, with x increasing
*  from left to right, and y increasing from top to bottom.**
*  - Your final result should include a function that, given two sets of rectangle
*  dimensions, returns a boolean value,
*  - Your function should return `false` if the two rectangles only partially overlap.
*/
package rectangle

type rectangleData [4]int

//Rectangle represents the rectangle type
type Rectangle struct {
    leftEdge int
    rightEdge int
    topEdge int
    bottomEdge int
}

//CreateRectangle is a factory function that creates a new rectangle type
func CreateRectangle(rd rectangleData) Rectangle {
    return Rectangle{
        leftEdge:   rd[0],
        rightEdge:  rd[0] + rd[2],
        topEdge:    rd[1],
        bottomEdge: rd[1] + rd[3],
    }
}

func (R Rectangle) contains(r Rectangle)  bool{
    return R.leftEdge <= r.leftEdge &&
        R.rightEdge >= r.rightEdge &&
        R.topEdge <= r.topEdge &&
        R.bottomEdge >= r.bottomEdge
}

//Overlaps uses contains function to
func Overlaps(r1, r2 Rectangle)  bool{
    return r1.contains(r2) || r2.contains(r1)
}
