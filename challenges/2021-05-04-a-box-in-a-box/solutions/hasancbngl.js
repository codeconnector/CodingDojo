// # A Box in a Box
// 
// Given a pair of rectangles, determine whether one of the rectangles is completely
// contained within the other rectangle. You will be given each rectangles top-left
// coordinate in an x/y plane, the rectangle's width, and the rectangle's height. One
// rectangle is "completely contained" by a rectangle that completely covers it, if
// viewed from above the plane. This puzzle should be solved using an Object-Oriented
// approach.
// 
// ## Business Rules/Errata
// 
// - ***Data Structure Required: Rectangle*** You should produce and compare
//   `Rectangle` objects in your solution, not the raw rectangle measurements.
// - The rectangle dimensions will be given in an array, in the format [(top left x
//   coordinate), (top left y coordinate), (width), (height)].
// - The units of width and height are irrelevant and can be ignored.
// - **The coordinate system for this challenge is 2-dimensional, with x increasing
//   from left to right, and y increasing from top to bottom.**
// - Your final result should include a function that, given two sets of rectangle
//   dimensions, returns a boolean value,
// - Your function should return `false` if the two rectangles only partially overlap.


class Rectangle {
  constructor(topLeftX, topLeftY, width, height) {
    this.leftEdge = topLeftX;
    this.rightEdge = width + topLeftX;
    this.topEdge = topLeftY;
    this.bottomEdge = height + topLeftY;
  }

  overlaps(rectangle) {
    return this.leftEdge <= rectangle.leftEdge &&
      this.rightEdge >= rectangle.rightEdge &&
      this.bottomEdge >= rectangle.bottomEdge &&
      this.topEdge <= rectangle.bottomEdge;
  }
}

function rectanglesOverlap(rectangle1, rectangle2) {
  // Put your code here to make this fuction work
  return rectangle1.overlaps(rectangle2) || rectangle2.overlaps(rectangle1);
}

exports.rectanglesOverlap = rectanglesOverlap;
exports.Rectangle = Rectangle;

