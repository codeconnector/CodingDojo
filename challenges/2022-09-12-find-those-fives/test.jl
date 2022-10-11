using Pkg; Pkg.add("Test")
using Test

include("solution.jl")

@testset "Can count fives in simple cases" begin
    @test find_those_fives(0, 10) == 1
    @test find_those_fives(0, 20) == 2
    @test find_those_fives(0, 54) == 10
end

@testset "Can count fives when duplicates happen" begin
    @test find_those_fives(0, 60)   == 16
    @test find_those_fives(0, 600)  == 220
    @test find_those_fives(0, 7777) == 3358
end

@testset "Can count fives in arbitrary positive ranges" begin
    @test find_those_fives(123, 7777)     == 3336
    @test find_those_fives(50000, 900000) == 530000
    @test find_those_fives(321, 654)      == 168
end

@testset "Can count fives in negative ranges" begin
    @test find_those_fives(-10, 10)    == 2
    @test find_those_fives(-100, 100)  == 40
    @test find_those_fives(-456, 789)  == 352
    @test find_those_fives(-750, -325) == 184
end

@testset "Can count fives in large ranges" begin
    @test find_those_fives(0, 987654321)  == 891625584
    @test find_those_fives(-123456789, 0) == 96029849
    @test find_those_fives(-123456789, 987654321) == 987655433
end