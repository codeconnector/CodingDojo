package solution

import (
	"fmt"
	"log"
	"testing"
)

func TestTopple(t *testing.T) {
	tables := []struct {
		input string
		result string
	} {
		{".L.R....L", "LL.RRRLLL"},
		{"L.......R", "L.......R"},
		{"R........", "RRRRRRRRR"},
		{"........L", "LLLLLLLLL"},
		{"RLRLRLRLR", "RLRLRLRLR"},
		{"R..L.R..L", "RRLL.RRLL"},
		{"...L.R...", "LLLL.RRRR"},
		{"R.......L", "RRRR.LLLL"},
	}

	for idx, table := range tables {
		actual := Topple(table.input)
		if actual != table.result {
			log.Fatalln("Test ", idx+1, " FAIL: Expected: ", table.result, "GOT: ", actual)
		} else {
			fmt.Println("SUCCESS!")
		}
	}
}

func BenchmarkTopple(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Topple(".L.R....L")
	}
}