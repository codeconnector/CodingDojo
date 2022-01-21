package drkennetz

import (
	"github.com/stretchr/testify/require"
	"testing"
)

func TestCalcTime(t *testing.T) {
	tests := []struct {
		input []Delivery
		result int
	} {
		{[]Delivery{}, 0},
		{[]Delivery{{1, 1642441462, "pickup"}, {1, 1642441463, "dropoff"}}, 1},
		{[]Delivery{{1, 1642441462, "pickup"}, {1, 1642441463, "eaten"}, {1, 1642441464, "dropoff"}}, 3},
		{[]Delivery{{1, 1570320047, "pickup"}, {1, 1570320725, "dropoff"}, {2, 1570321092, "pickup"}, {2, 1570323012, "dropoff"}, {3, 1570321212, "pickup"}, {3, 1570322352, "dropoff"}}, 3738},
		{[]Delivery{{1, 1570320047, "pickup"}, {1, 1570320725, "dropoff"}, {2, 1570321092, "pickup"}, {3, 1570321212, "pickup"}, {3, 1570322352, "dropoff"}, {2, 1570323012, "dropoff"}, {2, 1570322092, "eaten"}}, 4738},
		{[]Delivery{{1, 1570320047, "pickup"}, {1, 1570320725, "dropoff"}, {2, 1570321092, "pickup"}, {3, 1570321212, "pickup"}, {3, 1570321213, "eaten"}, {3, 1570322352, "dropoff"}, {2, 1570323012, "dropoff"}, {2, 1570322092, "eaten"}}, 4739},
		{[]Delivery{{1, 1570320047, "pickup"}, {1, 1570320049, "eaten"}, {1, 1570320048, "eaten"}, {1, 1570320055, "eaten"}, {1, 1570320050, "eaten"}, {1, 1570320725, "dropoff"}, {2, 1570321092, "pickup"}, {3, 1570321212, "pickup"}, {3, 1570321213, "eaten"}, {3, 1570321213, "eaten"}, {3, 1570322352, "dropoff"}, {2, 1570323012, "dropoff"}, {2, 1570322092, "eaten"}}, 4754},
	}

	for _, v := range tests {
		actual := CalcTime(v.input)
		require.Equal(t, actual, v.result)
	}
}
