package drkennetz

import (
	"github.com/stretchr/testify/require"
	"testing"
)

type Inputs struct {
	Start    string
	End      string
	Words    []string
	Expected []string
}

func TestLimitedLevenshtein(t *testing.T) {
	cases := []Inputs{
		{"food",
			"dung",
			[]string{"frod", "frog", "grog", "guog", "gung", "dung", "fond", "fund", "fung"},
			[]string{"food", "fond", "fund", "fung", "dung"}},
		{"car",
			"cat",
			[]string{"cat"},
			[]string{"car", "cat"}},
		{"dog",
			"cat",
			[]string{"dop", "dot", "cop", "cap", "car", "cat"},
			[]string{"dog", "dop", "cop", "cap", "cat"}},
		{"bears",
			"share",
			[]string{"truck", "frond", "crank", "drops", "blame", "share"},
			nil},
		{"tot",
			"kid",
			[]string{"tod", "tid", "tim", "tom", "kim", "kid"},
			[]string{"tot", "tod", "tid", "kid"}},
	}
	for _, v := range cases {
		require.ElementsMatch(t, v.Expected, LimitedLevenshtein(v.Start, v.End, v.Words))
	}
}
