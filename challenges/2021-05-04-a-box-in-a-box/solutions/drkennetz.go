package main

type coords [4]int
type Rectangle struct {
	leftEdge int
	rightEdge int
	topEdge int
	bottomEdge int
}

func (R Rectangle) Construct(c coords) Rectangle {
	R.leftEdge = c[0]
	R.rightEdge = c[0] + c[2]
	R.topEdge = c[1]
	R.bottomEdge = c[1] + c[3]
	return R
}

func (R Rectangle) overlaps(r Rectangle) bool {
	return R.leftEdge <= r.leftEdge &&
		R.rightEdge >= r.rightEdge &&
		R.bottomEdge >= r.bottomEdge &&
		R.topEdge <= r.bottomEdge
}

// Overlaps compares to rectangles to see if they overlap
func Overlaps(r1, r2 Rectangle) bool {
	return r1.overlaps(r2) || r2.overlaps(r1)
}
