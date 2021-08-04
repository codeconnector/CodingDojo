module tracingtriangle # --------------------------------------------------------------

export longest_path

function longest_path(tree, row=1, col=1)
    row == length(tree) && return tree[row][col]

    left = longest_path(tree, row + 1, col)
    right = longest_path(tree, row + 1, col + 1)
    return max(left, right) + tree[row][col]
end

end # module tracingtriangle


module test # -------------------------------------------------------------------------

using Test
using ..tracingtriangle

@testset "Sample Test" begin
    input_one = [[1], [2, 3], [1, 5, 1]]
    @test longest_path(input_one) == 9

    input_two = [[6], [4, 4], [1, 2, 1], [5, 4, 3, 2]]
    @test longest_path(input_two) == 16

    input_three = [[5]]
    @test longest_path(input_three) == 5

    input_four = [[1], [1, 1], [1, 1, 1], [2, 1, 1, 1]]
    @test longest_path(input_four) == 5

    input_five = [[0], [0, 0], [0, 0, 0]]
    @test longest_path(input_five) == 0
end

end # module test
