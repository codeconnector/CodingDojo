# # Find Three Largest Numbers
# 
# Write a function that takes in an array of at least three integers and, without 
# sorting the input array, returns a sorted array of the three largest integers in
# the input array. The function should return duplicate integers if necessary. 
# 
# ## Business Rules/Errata
# 
# - The input array should have at least three integers. If it does not, you should
#   return a null value.
# - You may not sort the input array
# - The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]`
#   should return `[10, 10, 12]`
# - Constant space -> you will return a new array of 3 integers, and this will be the
#   only new data structure you create.
# - Linear time -> you should solve this problem by only passing through the array a
#   single time.

const MaybeVector{T} = Union{Nothing,Vector{T}}

function find_three_largest_numbers(arr::Vector{Int})::MaybeVector{Int}
    nothing
end

# Tests ------------------------------------------------------------------------

using Pkg; Pkg.add("Test"); using Test

@testset "Test case one" begin
    input    = [141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7]
    result   = find_three_largest_numbers(input)
    expected = [18, 141, 541]
    @test all(result .== expected)
end

@testset "Test case two" begin
    input    = [11, -7, 5, -7]
    result   = find_three_largest_numbers(input)
    expected = [-7, 5, 11]
    @test all(result .== expected)
end

@testset "Test case three" begin
    input    = [1]
    result   = find_three_largest_numbers(input)
    @test isnothing(result)
end
