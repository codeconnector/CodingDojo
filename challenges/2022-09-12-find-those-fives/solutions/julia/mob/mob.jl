# # Find Those Fives

# Ah, children are truly a gift! Except, of course, when your extremely spoiled nephew 
# is having a fifth birthday party, his parents are pushovers, and this little monster 
# has a _very_ specific request for his "favorite" uncle/aunt. See, a love of numbers 
# runs in the family, and while this apple seems to have fallen from the tree, rolled 
# down the hill a bit, and bumped into multiple roots on the way down, he wants to 
# celebrate this momentous occasion by decorating his house with _every_ number 
# containing the digit `5`. Now, of course, even his doting parents can't provide 
# decorations containing _every_ number, they wouldn't be done in time to make the cake 
# or buy presents. On the other hand, they're somehow willing to decorate with an 
# _arbitrarily large_ set of numbers. In order to plan appropriately, they've requested 
# (begged) you to devise some algorithm for determining how many times the digit `5` 
# appears in a sequence of numbers.

# Being the loving uncle/aunt you are (and secretly being glad this isn't _your_ kid), 
# you agree to write a function that, given a starting and ending number, will return a 
# count of all the times the digit `5` appears.

# ## Business Rules/Errate

# - Your function should take two integers and return a single integer representing the 
#   number of times the digit `5` appears in the range.
# - The range you inspect should be inclusive on both ends, so for the range from 1-5, 
#   you should inspect the numbers [1, 2, 3, 4, 5].
# - Your given range will always have a smaller starting value than ending value.
# - You should be prepared for negative numbers. (Who taught this kid about negative 
#   numbers!?)
# - If a number in the sequence you inspect contains more than one `5`, count each 
#   digit.

function find_those_fives(start::Int, stop::Int)::Int
    fives_from_0_to_start = count_fives_from_0_to_n(start)
    fives_from_0_to_stop  = count_fives_from_0_to_n(stop)

    if start > 0    # Then stop must be > 0 as well
        fives_from_0_to_stop - fives_from_0_to_start + count_fives_in_n(start)
    elseif stop > 0 # If we're here, start <= 0
        fives_from_0_to_stop + fives_from_0_to_start
    else            # start and stop both <= 0
        fives_from_0_to_start - fives_from_0_to_stop + count_fives_in_n(stop)
    end
end

"""
    count_fives_in_n(n::Int)::Int

Return the number of digits in `n` that are `5`.
"""
count_fives_in_n(n::Int)::Int = sum(x == 5 || x == -5 for x in digits(n))

"""
    naive_answer(start::Int, stop::Int)::Int

For each number in the inclusive range from `start` to `stop`, count the number
of digits that are `5` and return the total number. This approach is too inefficient
(slow) to pass the last set of tests, but can be used to validate other approaches.
"""
function naive_answer(start::Int, stop::Int)::Int
    sum(count_fives_in_n(n) for n in start:stop)
end

"""
    count_fives_in_msd(d::UInt, n::UInt, r::UInt)::Int

Given that a number N can be written as (d * 10^n) + r (Example: 456 == (4 * 10^2) + 56),
returns all the times the digit `5` appears in the sequence from 0 to `d * 10^2`. 
This value is calculated according to the following production rules:

- [d <  5]: (d * n * 10^(n-1))
- [d >  5]: (d * n * 10^(n-1)) + 10^n
- [d == 5]: (d * n * 10^(n-1)) + r + 1
"""
function count_fives_in_msd(d::UInt, n::UInt, r::UInt)::Int
    # N = (d * 10^n) + r
    base = n == 0 ? 0 : (d * n * 10^(n-1))

    if d < 5
        base
    elseif d > 5
        base + 10^n
    else
        base + 1 + r
    end
end

"""
    count_fives_from_0_to_n(N::Int)::Int
    count_fives_from_0_to_n(N::UInt)::Int

Repeatedly calculate the number of times the digit `5` appears in all place values
of `N`, returning the total count.
"""
count_fives_from_0_to_n(N::Int) = abs(N) |> UInt |> count_fives_from_0_to_n
function count_fives_from_0_to_n(N::UInt)::Int
    N == 0 && return 0
    max_power = floor(UInt, log10(N))
    total_fives = 0
    remaining = N

    for power in max_power:-1:0
        msd        = remaining ÷ (10^power)
        remaining -= msd * (10^power)
        total_fives += count_fives_in_msd(msd, power, remaining)
    end

    total_fives
end