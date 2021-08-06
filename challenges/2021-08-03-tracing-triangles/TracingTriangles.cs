using System;
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
        // Let's plan to collect the length of the longest path to each node in an array
        // shaped like `triangle`, starting with a copy of `triangle`
        int[][] pathWeights = (int[][]) triangle.Clone();
        output.WriteLine($"pathWeights currently contains: {pathWeights}.");

        // Start by iterating over the rows, starting with the second row. We can
        // safely skip the longest path to the first element is the value of the first
        // element.
        for (var row = 1; row < pathWeights.Length; row++)
        {
            output.WriteLine($"Currently checking row: {row}.");
            int rowLen = pathWeights[row].Length;
            
            // For each column, check the parents above to the right and left. The first
            // and last elements in each row will only have one parent, so we need to 
            // account for that to avoid 'Index out of Bounds' errors.
            for (int col = 0; col < rowLen; col++)
            {
                output.WriteLine($"Currently checking column: {col}.");
                int left = col > 0 ? pathWeights[row-1][col-1] : -1;
                int right = col < rowLen - 1 ? pathWeights[row-1][col] : -1;
                
                // Add the larger parent to the current index in `pathWeights`
                pathWeights[row][col] += left > right ? left : right;
            }
        }

        output.WriteLine($"pathWeights after processing: {pathWeights}.");
        
        // Now, the bottom row of `pathWeights` contains the maximum value, just need
        // to identify which one. Note, if `triangle` only had one row, we would have
        // skipped the loops above entirely, and the 'last' row would be the only row.
        int maxWeight = 0;
        int[] lastRow = pathWeights[pathWeights.Length - 1];
        for (int i = 0; i < lastRow.Length; i++)
        {
            if(lastRow[i] > maxWeight){ maxWeight = lastRow[i]; }
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
