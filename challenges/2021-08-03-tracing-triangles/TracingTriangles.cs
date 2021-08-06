using Xunit;

public class TracingTriangles
{
    public int LongestPath(int[][] triangle)
    {
        // Insert your solution code here
        return 0;
    }

    [Fact]
    public void Test_case_one_()
    {
        int[][] input = new int[][] {new[] {1}, new[] {2, 3}, new[] {1, 5, 1}};
        Assert.Equal(9, LongestPath(input));
    }

    [Fact]
    public void Test_case_two_()
    {
        int[][] input = new int[][] {new[] {6}, new[] {4, 4}, new[] {1, 2, 1}, new[] {5, 4, 3, 2}};
        Assert.Equal(16, LongestPath(input));
    }

    [Fact]
    public void Test_case_three_()
    {
        int[][] input = new int[][] {new[] {5}};
        Assert.Equal(5, LongestPath(input));
    }

    [Fact]
    public void Test_case_four_()
    {
        int[][] input = new int[][] {new[] {1}, new[] {1, 1}, new[] {1, 1, 1}, new[] {2, 1, 1, 1}};
        Assert.Equal(5, LongestPath(input));
    }

    [Fact]
    public void Test_case_five_()
    {
        int[][] input = new int[][] {new[] {0}, new[] {0, 0}, new[] {0, 0, 0}};
        Assert.Equal(0, LongestPath(input));
    }
}
