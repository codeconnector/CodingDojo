using Xunit;

public class ThreeNumberSort
{
  public int[] SortArray(int[] input, int[] threes)
  {
    // Insert your solution code here
    return input;
  }

  [Fact]
  public void SortsArrayWithAllThreeNumbers()
  {
    var input = new int[] { 3, 2, 3, 1, 2, 2, 1, 3, 2 };
    var threes = new int[] { 1, 2, 3 };
    var actual = SortArray(input, threes);
    var expected = new int[] { 1, 1, 2, 2, 2, 2, 3, 3, 3 };
    Assert.Equal(actual.Length, expected.Length);
    for (var i = 0; i < actual.Length; i++)
    {
      Assert.Equal(actual[i], expected[i]);
    }
  }

  [Fact]
  public void SortsArrayWithFirstNumberMissing()
  {
    var input = new int[] { 2, 3, 3, 2, 2, 3 };
    var threes = new int[] { 1, 2, 3 };
    var actual = SortArray(input, threes);
    var expected = new int[] { 2, 2, 2, 3, 3, 3 };
    for (var i = 0; i < actual.Length; i++)
    {
      Assert.Equal(actual[i], expected[i]);
    }
  }

  [Fact]
  public void SortsArrayWithLastNumberMissing()
  {
    var input = new int[] { 1, 2, 1, 1, 2, 1 };
    var threes = new int[] { 1, 2, 3 };
    var actual = SortArray(input, threes);
    var expected = new int[] { 1, 1, 1, 1, 2, 2 };
    for (var i = 0; i < actual.Length; i++)
    {
      Assert.Equal(actual[i], expected[i]);
    }
  }

  [Fact]
  public void SortsArrayWithMiddleNumberMissing()
  {
    var input = new int[] { 3, 1, 1, 3 };
    var threes = new int[] { 1, 2, 3 };
    var actual = SortArray(input, threes);
    var expected = new int[] { 1, 1, 3, 3 };
    for (var i = 0; i < actual.Length; i++)
    {
      Assert.Equal(actual[i], expected[i]);
    }
  }

  [Fact]
  public void SortsArrayWithNonSortedTriad()
  {
    var input = new int[] { 3, 1, 1, 3, 2 };
    var threes = new int[] { 3, 2, 1 };
    var actual = SortArray(input, threes);
    var expected = new int[] { 3, 3, 2, 1, 1 };
    for (var i = 0; i < actual.Length; i++)
    {
      Assert.Equal(actual[i], expected[i]);
    }
  }

  [Fact]
  public void SortsArrayWithNonSortedTriadAndMissingNumber()
  {
    var input = new int[] { 1, 2, 1, 1, 2, 1 };
    var threes = new int[] { 2, 3, 1 };
    var actual = SortArray(input, threes);
    var expected = new int[] { 2, 2, 1, 1, 1, 1 };
    for (var i = 0; i < actual.Length; i++)
    {
      Assert.Equal(actual[i], expected[i]);
    }
  }

  [Fact]
  public void SortsArrayWithOnlyOneNumberPresent()
  {
    var input = new int[] { 1, 1, 1, 1 };
    var threes = new int[] { 2, 3, 1 };
    var actual = SortArray(input, threes);
    var expected = new int[] { 1, 1, 1, 1 };
    for (var i = 0; i < actual.Length; i++)
    {
      Assert.Equal(actual[i], expected[i]);
    }
  }
}
