using DataStructures: Deque

#=------------------------------------------------------------------------------
This section contains the `Tile` data structure, `TileCircle` data structure,
and functions that operate on these data structures. The `TileCircle` provides
and interface to an underlying double-ended queue and represents the circle
of tiles placed during a game. Tiles are placed in skip-wise fashion, that is, 
each tile is placed between the tiles 1 and 2 spaces clockwise from the last
placed tile.
------------------------------------------------------------------------------=#

"""
A `Tile` is a data structure containing the value of the tile and
the ID of the player who played it.
"""
struct Tile
    number::Int
    played_by::Int
end

"""
TileCircle only contains a double-ended queue, a data structure with efficent
push/pop operations on both ends. I'm wrapping the deque in a data structure
so I can specialize functions for it. 
"""
struct TileCircle
    inner::Deque{Tile}
end
TileCircle() = TileCircle(Deque{Tile}()) # Default empty constructor

"""
    rotate!(circle::TileCircle)

Rotate the entire circle counter-clockwise by one 'tick', which has the effect
of moving the insertion point for new values forward by one.
"""
function rotate!(circle::TileCircle)
    isempty(circle.inner) && return
    push!(circle.inner, popfirst!(circle.inner))
end

"""
    push!(circle::TileCircle, tile::Tile)

Specialization of the base `push!()` function for a `TileCircle`, always inserts
new values after skipping the next clockwise value.
"""
function Base.push!(circle::TileCircle, tile::Tile)
    rotate!(circle)
    push!(circle.inner, tile)
end

"Dispatches for methods on the inner double-ended queue."
Base.isempty((; inner)::TileCircle) = isempty(inner)
Base.length((; inner)::TileCircle)  = length(inner)

"""
    next_tile(circle::TileCircle)

Returns the next tile in sequence from the current position.
"""
function next_tile(circle::TileCircle)
    isempty(circle) && error("This `TileCircle` is empty!")
    return first(circle.inner)
end

"""
    rotate_to!(circle::TileCircle)

Rotate the circle until the next tile is the tile whose value matches `n`. 
"""
function rotate_to!(circle::TileCircle, n::Int=0)
    0 <= n < length(circle) || error("There's no `$n` tile in this `TileCircle`!")
    while next_tile(circle).number != n
        rotate!(circle)
    end
end

"""
    collect(circle::TileCircle)

Collect the contents of the circle into a Vector, with tiles ordered by 
position (i.e., tile `0` in the first position, tile `1` in the second
position, etc.).
"""
function Base.collect(circle::TileCircle)
    new_copy = deepcopy(circle)
    isempty(circle) || rotate_to!(new_copy)
    return collect(new_copy.inner)
end



#=------------------------------------------------------------------------------
This section contains the `TileGame` data structure and functions that operate
on that data structure. The `TileGame` models and provides an interface for
an ongoing game, tracking the circle of tiles laid, the number of players,
and the number of tiles played and remaining. Functions are provided for 
playing one or all rounds of the game and calculating the scores given the
current state of the game.
------------------------------------------------------------------------------=#

"""
A `TileGame` represents the current state of an ongoing game, including
the circle of tiles, the number of players, the number of tiles played,
and the number of tiles left to be played.
"""
mutable struct TileGame
    circle::TileCircle
    players::Int
    played::Int
    remaining::Int
end

"""
    TileGame(players::Int, tiles::Int)

Constructor that takes a number of players and number of tiles, creating
a `TileGame`.
"""
function TileGame(players::Int, tiles::Int)
    circle = TileCircle()
    return TileGame(circle, players, 0, tiles)
end

"""
    play_round!(game::TileGame)

Given a `TileGame`, play a single round, laying the next tile into the
circle and updating the number of tiles played and the number of tiles
remaining.
"""
function play_round!(game::TileGame)
    game.remaining <= 0 && return
    tile = Tile(game.played, game.played % game.players)
    push!(game.circle, tile)
    game.played += 1
    game.remaining -= 1
end

"""
    play_all!(game::TileGame)

Given a `TileGame`, play all the remaining rounds, updating the game to 
its final state with all tiles in the circle and none remaining to be played.
"""
function play_all!(game::TileGame)
    while game.remaining > 0
        play_round!(game)
    end
end

"""
    scores((; circle, players)::TileGame)

Calculate and return the list of scores for each player given the current
state of a `TileGame`. Returns a list of scores, in order by player ID.
"""
function scores((; circle, players)::TileGame)
    score_list = Dict() 
    for (idx, tile) in enumerate(collect(circle))
        (; number, played_by) = tile
        position      = idx - 1
        current_score = get!(score_list, played_by, 0)
        score_list[played_by] = current_score + (number * position)
    end
    return score_list
end



#=------------------------------------------------------------------------------
This section contains the function to complete the puzzle, demonstrating 
the ergonomics of the previously implemented data structures.
------------------------------------------------------------------------------=#

"""
    game_winning_score(players::Int, tiles::Int)

Given the number of players and tiles, return the highest score at the
end of the game.
"""
function game_winning_score(players::Int, tiles::Int)
    game = TileGame(players, tiles)
    play_all!(game)                                 # 1, Lay all the tiles
    scorecard = scores(game)                        # 2. Determine player scores
    return reduce(max, values(scorecard), init = 0) # 3. Return maximum score
end



#=------------------------------------------------------------------------------
This section contains the tests to verify the operation of the main function,
proving puzzle completion.
------------------------------------------------------------------------------=#

using Test

@testset "Should return zero when there are no tiles." begin
    @test game_winning_score(5, 0) == 0
end

@testset "Should return high score for a one-player game" begin
    @test game_winning_score(1, 10) == 211
end

@testset "Should return high score for a two-player game" begin
    @test game_winning_score(2, 15) == 424
end

@testset "Should return high score for a many-player game" begin
    @test game_winning_score(100, 5000) == 314997735
end