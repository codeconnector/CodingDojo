const Position = Tuple{Int,Int}
const FindClosestResult = Union{Position,Nothing}

"Calculate the manhattan distance between two `Position`s"
manhattan_distance(a::Position, b::Position) = abs.(a .- b) |> sum

"""
    closest_coin(goblin::Position, coins::Set{Position})::FindClosestResult

Given a `Position` representing the goblin and a list of `Position`s 
representing the coins that have not yet been collected, return the coin
nearest to the goblin's current position. If more than one coin is nearest
the goblin, return `nothing`.
"""
function closest_coin(goblin::Position, coins::Set{Position})::FindClosestResult
    found_coin   = nothing      # The nearest coin found so far
    found_times  = 0            # How many times the current closest coin has been found
    min_distance = typemax(Int) # Distance to the nearest coin found so far

    for coin in coins
        distance = manhattan_distance(goblin, coin)

        # We've seen this distance before...
        if distance == min_distance
            found_times += 1
        end

        # The new closest coin
        if distance < min_distance
            found_coin = coin
            found_times = 1
            min_distance = distance
        end
    end

    return found_times > 1 ? nothing : found_coin
end

"""
    path(goblin::Position, coins::Vector{Position})

Given a `Position` representing the goblin and a list of `Position`s
representing coins, return a list of `Position`s, in order, that represent
the path taken by the goblin from nearest coin to nearest coin. Returns an
empty list if the goblin ever finds itself stuck between two equidistant coins.
"""
function path(goblin::Position, coins::Vector{Position})
    found_path    = []
    coin_set      = Set(coins)
    curr_position = goblin

    while !isempty(coin_set)
        curr_position = closest_coin(curr_position, coin_set)
        isnothing(curr_position) && return []
        push!(found_path, curr_position)
        delete!(coin_set, curr_position)
    end
    
    return found_path
end


#=------------------------------------------------------------------------------
| Test Cases
------------------------------------------------------------------------------=#

using Test

@testset "Should find a path when positions are negative" begin
    goblin = (1, 1)
    coins  = [(1, 2), (-5, -5), (1, 3)]
    @test path(goblin, coins) == [(1, 2), (1, 3), (-5, -5)]
end

@testset "Should find a path when positions are large numbers" begin
    goblin = (34, 51)
    coins  = [(1050, -34), (-8809080, 2), (-46788, -67683)]
    @test path(goblin, coins) == [(1050, -34), (-46788, -67683), (-8809080, 2)]
end

@testset "Should find a path when positions are all positive" begin
    goblin = (0, 2)
    coins  = [(0, 4), (1, 0), (2, 0), (3, 2), (2, 4)]
    @test path(goblin, coins) == [(0, 4), (2, 4), (3, 2), (2, 0), (1, 0)]
end

@testset "Should return an empty list when the goblin freaks out." begin
    goblin = (100, 100)
    coins  = [(99, 100), (101, 100), (100, 99), (100, 101)]
    @test path(goblin, coins) == []
end
