using Test;
using julia;

@testset "Sample Test" begin
    @test topplebyforce(".L.R....L") == "LL.RRRLLL"
    @test topplebyforce("L.......R") == "L.......R"
    @test topplebyforce("R........") == "RRRRRRRRR"
    @test topplebyforce("........L") == "LLLLLLLLL"
    @test topplebyforce("RLRLRLRLR") == "RLRLRLRLR"
    @test topplebyforce("R..L.R..L") == "RRLL.RRLL"
    @test topplebyforce("...L.R...") == "LLLL.RRRR"
    @test topplebyforce("R.......L") == "RRRR.LLLL"

    @test topplebyboundary(".L.R....L") == "LL.RRRLLL"
    @test topplebyboundary("L.......R") == "L.......R"
    @test topplebyboundary("R........") == "RRRRRRRRR"
    @test topplebyboundary("........L") == "LLLLLLLLL"
    @test topplebyboundary("RLRLRLRLR") == "RLRLRLRLR"
    @test topplebyboundary("R..L.R..L") == "RRLL.RRLL"
    @test topplebyboundary("...L.R...") == "LLLL.RRRR"
    @test topplebyboundary("R.......L") == "RRRR.LLLL"
end
