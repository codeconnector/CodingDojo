using Xunit;

namespace MoveToEndChallenge.Tests;

public class ChallengeTests
{
  [Fact]
  public void ReturnEmptyArray()
  {
    var input = new int[0];
    var result = Solution.MoveToEnd(input, 0);
    var len = result.Length;

    Assert.Equal(0, len);
  }

  [Fact]
  public void AlreadySorted()
  {
    var input = new int[] { 2, 1, 1, 1 };
    var result = Solution.MoveToEnd(input, 1);

    for (var i = 1; i < 4; i++)
    {
      Assert.Equal(1, result[i]);
    }

    Assert.Equal(2, result[0]);

  }

  [Fact]
  public void MoveSingleValue()
  {
    var input = new int[] { 1, 2, 2, 2, 2, 2, 2 };
    var result = Solution.MoveToEnd(input, 1);

    for (var i = 0; i < 6; i++)
    {
      Assert.Equal(2, result[i]);
    }

    Assert.Equal(1, result[6]);

  }

  [Fact]
  public void MoveMultipleValues()
  {
    var input = new int[] { 2, 1, 2, 2, 2, 3, 4, 2 };
    var result = Solution.MoveToEnd(input, 2);

    for (var i = 3; i < 8; i++)
    {
      Assert.Equal(2, result[i]);
    }


  }

  [Fact]
  public void NumberNotInArray()
  {
    var input = new int[] { 1, 2, 4, 5, 6 };
    var result = Solution.MoveToEnd(input, 3);

    for (var i = 0; i < 5; i++)
    {
      Assert.Equal(input[i], result[i]);
    }

  }

  [Fact]
  public void AllNumbersToBeMoved()
  {
    var input = new int[] { 3, 3, 3 };
    var result = Solution.MoveToEnd(input, 3);

    for (var i = 0; i < 3; i++)
    {
      Assert.Equal(3, result[i]);
    }

  }
}