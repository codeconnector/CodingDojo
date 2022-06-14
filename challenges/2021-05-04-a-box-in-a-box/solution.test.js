const { Rectangle, rectanglesOverlap } = require('./solution');

test('Two rectangles that do not overlap', () => {
    var rectangle1 = new Rectangle(1, 4, 3, 3);
    var rectangle2 = new Rectangle(0, 3, 2, 1);
    expect(rectanglesOverlap(rectangle1, rectangle2)).toBe(false);
});

test('Two rectangles that DO overlap', () => {
    var rectangle1 = new Rectangle(1, 4, 3, 3);
    var rectangle2 = new Rectangle(0, 3, 4, 4);
    expect(rectanglesOverlap(rectangle1, rectangle2)).toBe(true);
});

test('Two rectangles that partially overlap', () => {
    var rectangle1 = new Rectangle(1, 4, 3, 3);
    var rectangle2 = new Rectangle(0, 3, 3, 3);
    expect(rectanglesOverlap(rectangle1, rectangle2)).toBe(false);
});

