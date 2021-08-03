using Xunit;
using Xunit.Abstractions;

public class TracingTriangles
{
    private readonly ITestOutputHelper output;

    public TracingTriangles(ITestOutputHelper output)
    {
        this.output = output;
    }

    public int LongestPath(int[][] triangle)
    {
        // Insert your solution code here
        //1. first we have a way to establish what is a child
        int []max = new int [triangle.Length];
        output.WriteLine($"Length of Triangle is {triangle.Length}.");
        output.WriteLine($"Current Length of max: {max.Length}.");

        //2. first element has to have length of 1
        for (var i = 0; i < triangle.Length; i++)
        {
            output.WriteLine($"Current position of triangle[i]: {triangle[i].ToString()}.");
            //3. index + 1 determines the length of the next row at the index
            for (int j = 0; j < triangle[i+1].Length - 1; j++)
            {
                output.WriteLine($"Current position of triangle[i][j]: {triangle[i][j]}.");
                if(triangle[i][j] < triangle[i][j+1]){
                    max[j] += triangle[i][j+1];
                }else
                {
                    max[j] += triangle[i][j];
                }
            }
        }
        //4. returns the weight of the maximum weight path
        int maxWeight = 0;
        for (int i = 0; i < max.Length; i++)
        {
            if(max[i] > maxWeight){
                maxWeight = max[i];
            }
        }
        output.WriteLine($"Calculated maxWeight: {maxWeight}.");
        return maxWeight;
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
