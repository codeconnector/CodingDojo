"""
    Base.convert(::Type{Matrix{Char}}, strings::Vector{String})

Converts a `Vector{String}` to a `Matrix{Char}`, where each column contains
the characters from a string in `strings`, truncated to the length of the
shortest string.
"""
function Base.convert(::Type{Matrix{Char}}, strings::Vector{String})
    sorted = sort!(strings, by = length)
    max_length = length(sorted[1])
    return reduce(hcat, collect(s)[1:max_length] for s in strings)
end

"Helper function to identify iterables where all the values are the same"
all_equal(v) = all(x -> x == v[1], v)

"""
    longest_common_prefix(strings::Vector{String})

Given a list of strings, returns a string containing the longest common prefix
among all strings. Returns an empty string if no matching prefix is found.
"""
function longest_common_prefix(strings::Vector{String})
    char_matrix    = convert(Matrix{Char}, strings)
    matching_chars = Iterators.takewhile(all_equal, eachrow(char_matrix))
    return map(x -> first(x), matching_chars) |> join
end


# Tests! -----------------------------------------------------------------------

using Test

@testset "Should return any single letter as-is" begin
    @test longest_common_prefix(["a"]) == "a"
    @test longest_common_prefix(["b"]) == "b"
    @test longest_common_prefix(["z"]) == "z"
end

@testset "Should identify single-letter prefixes" begin
    input = ["apple", "aardvark"]
    @test longest_common_prefix(input) == "a"

    input = ["garbage", "graendal", "gift"]
    @test longest_common_prefix(input) == "g"

    input = ["eagle", "easter", "easy", "egg"]
    @test longest_common_prefix(input) == "e"
end

@testset "Should identify multiple-letter prefixes" begin
    input = ["apple", "apricot"]
    @test longest_common_prefix(input) == "ap"

    input = ["garbage", "garden", "gargantuan"]
    @test longest_common_prefix(input) == "gar"

    input = ["castle", "casting", "castanet", "cast"]
    @test longest_common_prefix(input) == "cast"
end

@testset "Should identify when there is no common prefix" begin
    input = ["apple", "banana"]
    @test longest_common_prefix(input) == ""

    input = ["garbage", "garden", "helicopter"]
    @test longest_common_prefix(input) == ""

    input = ["castle", "antimony", "castanet", "antiquity"]
    @test longest_common_prefix(input) == ""
end

@testset "Should identify repeated instances of a single word" begin
    input = ["apple", "apple"]
    @test longest_common_prefix(input) == "apple"

    input = ["apple", "apple", "apple"]
    @test longest_common_prefix(input) == "apple"
end

@testset "Should work on large inputs" begin
    input = fill("variadic", 10000)
    @test longest_common_prefix(input) == "variadic"

    append!(input, fill("variable", 10000))
    append!(input, fill("variety", 10000))
    @test longest_common_prefix(input) == "vari"

    push!(input, "a")
    @test longest_common_prefix(input) == ""
end
