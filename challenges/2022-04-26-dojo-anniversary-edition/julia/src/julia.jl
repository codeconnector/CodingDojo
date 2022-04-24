using Test

const TallPosition  = CartesianIndex
const WidePosition  = NTuple{2,CartesianIndex}
const BlockPosition = Union{TallPosition,WidePosition}

"Compare `WidePosition`s in an order-agnostic way"
function Base.:(==)(left::WidePosition, right::WidePosition)
    same_order = left[1] == right[1] && left[2] == right[2]
    reversed   = left[1] == right[2] && left[2] == right[1]
    return same_order || reversed
end


#=------------------------------------------------------------------------------
| LEVEL ONE
|
| Start by modeling a `Block` and moving it at least one space up, down, left,
| or right. 
| 
| - You'll be given the shell of a `Block` object (or data structure), you'll
|   need to decide what data to store in it to keep track of the block's
|   location.
| - You will need to write the logic for a function (or class method) that will
|   move the block up, down, left, or right (no diagonal movement).
| - The tests will give the block's starting position as a list of the
|   coordinates of the squares the block is sitting on in (`row`, `col`)
|   format. One coordinate will indicate a block standing upright, two
|   coordinates will indicate a block lying on its side.
| - The tests will give directions in the form of a single character: 'U', 'D',
|   'L', or 'R'.
| - The tests will expect a list of the coordinates the block is sitting on, in
|   (`row`, `col`) format. One coordinate for a block standing upright, two
|   coordinates
|   for a block lying on its side.
------------------------------------------------------------------------------=#

struct Block
    # Create fields here, as needed
end

function Block(pos::BlockPosition) 
    # Replace with a real constructor
    Block() 
end


function level_one(block::Block, direction::Char)::BlockPosition
    # This function will be called for tests. Feel free
    # to write other functions to handle the logic for this
    # level, but use this function as your 'main' function.
    missing
end


# LEVEL ONE TESTS --------------------------------------------------------------

@testset "Can move once when the block is tall" begin
    start = CartesianIndex(0, 0)
    left  = (CartesianIndex(0, -2), CartesianIndex(0, -1))
    right = (CartesianIndex(0, 2),  CartesianIndex(0, 1))
    up    = (CartesianIndex(-2, 0), CartesianIndex(-1, 0))
    down  = (CartesianIndex(2, 0),  CartesianIndex(1, 0))

    @test level_one(Block(start), 'L') == left
    @test level_one(Block(start), 'R') == right
    @test level_one(Block(start), 'U') == up
    @test level_one(Block(start), 'D') == down
end

@testset "Can move once when the block is lying horizontally" begin
    start = (CartesianIndex(0, -1), CartesianIndex(0, 0))
    left  = CartesianIndex(0, -2)
    right = CartesianIndex(0, 1)
    up    = (CartesianIndex(-1, -1), CartesianIndex(-1, 0))
    down  = (CartesianIndex(1, -1),  CartesianIndex(1, 0))

    @test level_one(Block(start), 'L') == left
    @test level_one(Block(start), 'R') == right
    @test level_one(Block(start), 'U') == up
    @test level_one(Block(start), 'D') == down
    
end

@testset "Can move once when the block is lying vertically" begin
    start = (CartesianIndex(-1, 0), CartesianIndex(0, 0))
    left  = (CartesianIndex(-1, -1), CartesianIndex(0, -1))
    right = (CartesianIndex(-1, 1), CartesianIndex(0, 1))
    up    = CartesianIndex(-2, 0)
    down  = CartesianIndex(1, 0)

    @test level_one(Block(start), 'L') == left
    @test level_one(Block(start), 'R') == right
    @test level_one(Block(start), 'U') == up
    @test level_one(Block(start), 'D') == down
    
end


#=------------------------------------------------------------------------------
| LEVEL TWO
|
| Time to take that block for a ride. Now, given a list of directions, move
| the block around on an infinite flat grid and return the coordinates
| indicating the final direction.
| 
| - Keep using your Block object (or data structure) from level 1.
| - Now, the tests will give directions as a list of 'U', 'D', 'L', or 'R'
|   characters.
| - The tests will expect a list of the coordinates the block is sitting on
|   after following the list of directions, in (`row`, `col`) format. One
|   coordinate for a block standing upright, two coordinates for a block
|   lying on its side.
------------------------------------------------------------------------------=#

function level_two(block::Block, directions::Vector{Char})::BlockPosition
    # This function will be called for tests. Feel free
    # to write other functions to handle the logic for this
    # level, but use this function as your 'main' function.
    missing
end


# LEVEL TWO TESTS -------------------------------------------------------------

@testset "Can move the block in a small circle" begin
    start      = CartesianIndex(0, 0)
    directions = ['U', 'R', 'D', 'L']
    stop       = (CartesianIndex(-1, 0), CartesianIndex(0, 0))
    @test level_two(Block(start), directions) == stop
end

@testset "Can move the block in a bigger circle" begin
    start      = CartesianIndex(0, 0)
    directions = ['U', 'U', 'L', 'L', 'D', 'D', 'R', 'R']
    stop       = CartesianIndex(0, 0)
    @test level_two(Block(start), directions) == stop
end

@testset "Can move diagonal there and back" begin
    start      = CartesianIndex(0, 0)
    directions = ['D', 'R', 'D', 'R', 'U', 'L', 'U', 'L']
    stop       = (CartesianIndex(0, 0), CartesianIndex(1, 0))
    @test level_two(Block(start), directions) == stop
end

@testset "Can make the block meander around" begin
    start      = CartesianIndex(0, 0)
    directions = ['R', 'U', 'R', 'D', 'R', 'U', 'R', 'D']
    stop       = (CartesianIndex(0, 5), CartesianIndex(0, 6))
    @test level_two(Block(start), directions) == stop
end


#=------------------------------------------------------------------------------
| LEVEL THREE
|
| Now that you can steer your block, it's time to start making it go where
| you want it to go. You may continue to assume an infinite flat grid, but
| now you need to take a coordinate and return the list of directions you
| moved your block to get it there. You should be able to identify a valid
| path from start to target, not necessarily the shortest path.
| 
| - The level 3 tests will give you an initial block location and a target
|   location, as coordinates in the same format used throughout this
|   challenge.
| - In keeping with the game that inspired this challenge, targets will
|   alway be a single coordinate, and your block will need to stand upright
|   on that grid space in order to pass the test.
| - There are infinitely many paths that may be taken, considering the grid
|   is an infinite flat expanse, but remember that the tests will need to
|   run in a  reasonable amount of time.
| - The tests will expect a list of characters representing the directions
|   you moved, 'U', 'D', 'L', or 'R'.
------------------------------------------------------------------------------=#

function level_three(block::Block, target::BlockPosition)::Vector{Char}
    # This function will be called for tests. Feel free
    # to write other functions to handle the logic for this
    # level, but use this function as your 'main' function.
    missing
end


# LEVEL THREE TESTS -----------------------------------------------------------

@testset "Can move the block two spaces" begin
    start  = CartesianIndex(0, 0)
    target = CartesianIndex(-3, 0)
    path   = ['U', 'U']
    @test level_three(Block(start), target) == path
end

@testset "Can move the block one space in a slightly tricky way" begin
    start  = CartesianIndex(0, 0)
    target = CartesianIndex(0, 1)
    path   = level_three(Block(start), target)
    @test level_two(Block(start), path) == target
end

@testset "Can move the block pretty far away" begin
    start  = CartesianIndex(0, 0)
    target = CartesianIndex(100, -123)
    path   = level_three(Block(start), target)
    @test level_two(Block(start), path) == target
end


#=------------------------------------------------------------------------------
| LEVEL FOUR
|
| It's time to strive for efficiency! To accomplish this level, you should
| be able to identify the _shortest_ path from the block's start to the
| target.
| 
| - The inputs and outputs of your function should be the same as for
|   level 3.
| - There may be more than one shortest path to get to the goal, you only
|   need to identify and return _one_ shortest path.
| - The tests will expect a list of characters representing the directions
|   you moved, 'U', 'D', 'L', or 'R'.
------------------------------------------------------------------------------=#

function level_four(block::Block, target::BlockPosition)::Vector{Char}
    # This function will be called for tests. Feel free
    # to write other functions to handle the logic for this
    # level, but use this function as your 'main' function.
    missing
end


# LEVEL FOUR TESTS -------------------------------------------------------------

@testset "The block can find the shortest short path" begin
    start  = CartesianIndex(0, 0)
    target = CartesianIndex(0, -1)
    path   = level_four(Block(start), target)
    @test level_two(Block(start), path) == target
    @test length(path) == 3
end

@testset "The block can find the shortest path down to the right" begin
    start  = CartesianIndex(0, 0)
    target = CartesianIndex(9, 9)
    path   = level_four(Block(start), target)
    @test level_two(Block(start), path) == target
    @test length(path) == 12
end

@testset "The block can find the shortest path up to the left" begin
    start  = CartesianIndex(0, 0)
    target = CartesianIndex(-8, -13)
    path   = level_four(Block(start), target)
    @test level_two(Block(start), path) == target
    @test length(path) == 15
end


#=------------------------------------------------------------------------------
| LEVEL FIVE
|
| Ok, smart guy/gal, you can navigate over an infinite, flat, unobstructed
| expanse, but how well does your block handle when there are obstacles? For
| this (final) level, you'll be given a representation of a finite grid
| containing obstacles, and will need to steer your block around those
| obstacles to the target. You'll also need to keep your block within the
| bounds of the grid.
| 
| - You will need to parse a string into a grid representation. The tests
|   will give a string in the format ".....\n..x..\n.x...\x....\n...x.",
|   where '.' represents an empty space, and 'x' represents an obstacle.
| - Since the grid is now finite, you may assume that every coordinate not
|   explicity included in your grid representation as 'empty' is impassable.
| - You will continue to get a coordinate(s) for your block start and target
|   space.
| - The tests will continue to expect a list of characters representing the
|   directions you moved to get to the target.
------------------------------------------------------------------------------=#

function level_five(block::Block, target::BlockPosition, grid::String)::Vector{Char}
    # This function will be called for tests. Feel free
    # to write other functions to handle the logic for this
    # level, but use this function as your 'main' function.
    missing
end


# LEVEL FIVE TESTS -------------------------------------------------------------

@testset "The block can find the shortest short path with obstacles" begin
    start  = CartesianIndex(4, 5)
    target = CartesianIndex(4, 4)
    grid   = join(["..........",
                   "..........",
                   "...xx.....",
                   "..........",
                   "...xx.....",
                   "..........",
                   "..........",
                   "..........",
                   "..........",
                   ".........."], "\n")
    path   = level_five(Block(start), target)
    @test level_two(Block(start), path) == target
    @test length(path) == 7
end

@testset "The block can find the shortest longer path with obstacles" begin
    start  = CartesianIndex(3, 2)
    target = CartesianIndex(3, 8)
    grid   = join(["..........",
                   "..x.......",
                   "..x...x...",
                   "..x....x..",
                   "..x.......",
                   "..x.......",
                   "..x.......",
                   "..x.......",
                   "..........",
                   ".........."], "\n")
    path   = level_five(Block(start), target)
    @test level_two(Block(start), path) == target
    @test length(path) == 15
end

@testset "The block can find the shortest path with obstacles on a large grid" begin
    start  = CartesianIndex(14, 16)
    target = CartesianIndex(26, 4)
    grid = join(["...............................",
                 "...............................",
                 "...............x...............",
                 "...............x...............",
                 "...xxxxxxxxxxxxx...............",
                 "...............x...............",
                 "...............x...............",
                 "xxxxxxxxxxxxx..x...............",
                 "...............x...............",
                 "...............x...............",
                 "......xxxxxxxxxxxxxxxxxxxx.....",
                 "......x..................x.....",
                 "......x..................x.....",
                 "......x..................x.....",
                 "......x..................x.....",
                 "......x..................x.....",
                 "......x..................x.....",
                 "......x.xxxxxxxxxxxxxxxxxx.....",
                 "......x........................",
                 "......x........................",
                 "....xxxxxxxxxxxxxxxxxxxxxxxxxxx",
                 "...............................",
                 "xxxxxxxxxxxxxxxxxxxxxxxxxxx....",
                 "...............................",
                 "...............................",
                 "...............................",
                 "..............................."], "\n")
    path   = level_five(Block(start), target)
    @test level_two(Block(start), path) == target
    @test length(path) == 118
end

