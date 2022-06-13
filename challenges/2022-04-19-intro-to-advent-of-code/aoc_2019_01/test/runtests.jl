using Test;
using aoc_2019_01;

@testset "Should correctly calculate part one per-module cost" begin
    calculate = aoc_2019_01.calculate_fuel_cost

    example_one   = calculate(12)
    @test example_one   == 2

    example_two   = calculate(14)
    @test example_two   == 2

    example_three = calculate(1969)
    @test example_three == 654

    example_four  = calculate(100756)
    @test example_four  == 33583
end

@testset "Should correctly solve part one" begin
    solve  = aoc_2019_01.solve_part_one
    answer = solve("../src/input.txt")
    @test answer == 3_393_938
end

@testset "Should correctly calculate part two per-module cost" begin
    calculate = aoc_2019_01.calculate_fuel_cost_recursive

    example_one   = calculate(14)
    @test example_one   == 2

    example_two   = calculate(1969)
    @test example_two   == 966

    example_three = calculate(100_756)
    @test example_three == 50_346
end

@testset "Should correctly solve part two" begin
    solve  = aoc_2019_01.solve_part_two
    answer = solve("../src/input.txt")
    @test answer == 5_088_037
end
