package rectangle

import "testing"

type rectangleTestcase struct {
    description string
    r1 rectangleData
    r2 rectangleData
    ok bool
}

var testCases = []rectangleTestcase{
    {
        description: "Two rectangles that do not overlap",
        r1: rectangleData{1, 4, 3, 3},
        r2: rectangleData{0, 3, 2, 1},
        ok: false,
    },
    {
        description: "Two rectangles that DO overlap",
        r1: rectangleData{1, 4, 3, 3},
        r2: rectangleData{0, 3, 4, 4},
        ok: true,
    },
    {
        description: "Two rectangles that partially overlap",
        r1: rectangleData{1, 4, 3, 3},
        r2: rectangleData{0, 3, 3, 3},
        ok: false,
    },

}

func TestOverlaps(t *testing.T) {
    for _, test := range testCases {
        r1 := CreateRectangle(test.r1)
        r2 := CreateRectangle(test.r2)
        if res := Overlaps(r1, r2); res != test.ok {
            t.Error("FAIL: ", test.description, " Got: ", res, " Expected: ", test.ok)
        } else {
            t.Log("SUCCESS: ", test.description)
        }
    }

}

