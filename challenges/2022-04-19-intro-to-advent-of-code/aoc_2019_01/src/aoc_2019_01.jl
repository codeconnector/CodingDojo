module aoc_2019_01

ingest(path) = [parse(Int, l) for l in readlines(path)]

function calculate_fuel_cost(mass)
    return (mass ÷ 3) - 2
end

function calculate_fuel_cost_recursive(mass)
    fuel = (mass ÷ 3) - 2
    fuel > 0 || return 0
    return fuel + calculate_fuel_cost_recursive(fuel)
end

function solve(path, calculator)
    input_values = ingest(path)
    return sum(calculator(m) for m in input_values)
end

solve_part_one(path) = solve(path, calculate_fuel_cost)
solve_part_two(path) = solve(path, calculate_fuel_cost_recursive)

end # module
