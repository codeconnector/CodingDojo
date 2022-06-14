package drkennetz

// FastPeakPicker implements a binary search to find the peak value in the array
func FastPeakPicker(peaks []int) int {
	lower := 0
	upper := len(peaks)-1
	for lower <= upper {
		middle := lower + (upper - lower)/2
		if middle == 0 || middle == len(peaks) - 1 {
			// we've hit the upper or lower bound
			return peaks[middle]
		}
		if peaks[middle] > peaks[middle - 1] && peaks[middle] > peaks[middle + 1] {
			// we found the value we're looking for
			return peaks[middle]
		} else if peaks[middle] > peaks[middle - 1] {
			// we want to use the right half
			lower = middle + 1
		} else {
			// we want to use the left halfis
			upper = middle - 1
		}
	}

	return -1
}

// LinearFastPeakPicker implements a linear search to find the peak value in the array
func LinearFastPeakPicker(peaks []int) int {
	upper := len(peaks) - 1
	for i := 0; i < len(peaks); i++ {
		if i == upper {
			return peaks[i]
		} else if peaks[i] > peaks[i+1] {
			return peaks[i]
		}
	}
	return -1
}