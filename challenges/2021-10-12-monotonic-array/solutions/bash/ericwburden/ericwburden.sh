# # Monotonic Array
# 
# Write a function that takes in an array of integers and returns a Boolean
# representing whether the array is monotonic. An array is said to be monotonic if its
# elements, from left to right, are entirely non-increasing or entirely non-decreasing
# (don't worry, I'll make this very clear with examples!)
# 
# Arrays containing only the same element are also said to be monotonic because they
# are both entirely non-increasing and entirely non-decreasing.
# 
# Non-increasing elements aren't necessarily exclusively decreasing; they simply don't
# increase. Similarly, non-decreasing elements aren't necessarily exclusively
# increasing; they simply don't decrease. 
# 
# Note that empty arrays and arrays of one element are monotonic.
# 
# ## Business Rules/Errata
# 
# - Your function should accept an input array and return a Boolean if the array is
#   monotonic. The input array can be any length -- including 0!
# - An array of length 0 or 1 is said to be monotonic.
# - Subsequent numbers that are equal do not change the description of an array. For
#   example, `[1, 2, 3, 3]` is an increasing monotonic array because the numbers are
#   never decreasing.
# - Arrays containing only the exact same element multiple times (IE duplicates) are
#   monotonic.
# - If an array is monotonic, the function should return `True`, otherwise it should
#   return `False`.
# - Bonus: You should be able to determine if an array is monotonic from a **single**
#   pass through the array, one iteration through the array should be sufficient in the
#   optimal solution.
# - Bonus: The optimal solution also uses constant space - no intermediate data
#   structures are required.
# - Optimal: O(N) time | O(1) space - where N is the length of the array
# 
# ## Examples
# 
# ```
# is_monotonic([]) // True
# is_monotonic([1]) // True
# is_monotonic([1, 2]) // True
# is_monotonic([2, 2, 2, 2]) // True
# is_monotonic([-5, -4, -3, -2, -1, 0, 1]) // True
# is_monotonic([2, 1, 2, 3, 4, 5]) // False
# is_monotonic([1, 1, 0, 0, -1, -1, -2, -2]) // True
# is_monotonic([5, 4, 3, 3, 3, 2, 1]) // True
# ```

#!/bin/bash

#--------------------------------------------------------------------------------------- 
#-- Script to identify monotonic arrays. Exit with an error code for 'FALSE', exit
#-- normally for 'TRUE'. This script expects input in the form of space-separated
#-- integers
#--------------------------------------------------------------------------------------- 

LAST_N=$1   # Initialize as the first number given
INCREASE=0; DECREASE=0 # Start both at 0

# For each value in the input, validate that it is a number. 
# If the number is greater than the last number, mark an increase
# If the number is smaller than the last number, mark a decrease
for N in "$@"; do
    ! [[ $N =~ ^-?[0-9]+$ ]] && echo "'$N' is not a number!" && exit 1
    (( $N > $LAST_N )) && INCREASE=1
    (( $N < $LAST_N )) && DECREASE=1
    LAST_N=$N
done

# If both an increase and decrease are found, exit with an error code.
[ $INCREASE == 1 ] && [ $DECREASE == 1 ] && exit 1

exit 0  # Exit with a success code
