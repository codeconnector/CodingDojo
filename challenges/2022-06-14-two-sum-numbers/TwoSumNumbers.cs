using Xunit;

public class TwoSumNumbers
{
  public bool DoesItSum(int sum, int[] numbers)
  {
    // Insert your solution code here
    return false;
  }

  [Fact]
  public void FindsNormalTrue()
  {
    var sum = 17;
    var numbers = new int[] { 10, 15, 3, 7 };
    var expected = true;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }

  [Fact]
  public void FindsNormalFalse()
  {
    var sum = 17;
    var numbers = new int[] { 10, 15, 3, 8 };
    var expected = false;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }

  [Fact]
  public void FindsAnotherNormalFalse()
  {
    var sum = 16;
    var numbers = new int[] { 10, 15, 8, 7 };
    var expected = false;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }

  [Fact]
  public void FindsTrueWhenBothNumbersEqual()
  {
    var sum = 16;
    var numbers = new int[] { 10, 15, 8, 8 };
    var expected = true;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }

  [Fact]
  public void FindsFalseWhenArrayEmpty()
  {
    var sum = 32;
    var numbers = new int[] { };
    var expected = false;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }

  [Fact]
  public void FindsFalseWhenArrayHasLengthOne()
  {
    var sum = 32;
    var numbers = new int[] { 32 };
    var expected = false;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }

  [Fact]
  public void FindsTrueWhenOneNumIsZero()
  {
    var sum = 32;
    var numbers = new int[] { 32, 0 };
    var expected = true;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }

  [Fact]
  public void FindsFalseWhenSumHasWrongSign()
  {
    var sum = -32;
    var numbers = new int[] { 32, 0 };
    var expected = false;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }

  [Fact]
  public void FindsTrueWhenSumIsNegative()
  {
    var sum = -32;
    var numbers = new int[] { 32, -64 };
    var expected = true;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }
  
  [Fact]
  public void FindsFalseWhenHalfOfSumAppearsOnce()
  {
    var sum = 10;
    var numbers = new int[] { 11, 8, 5, 52 };
    var expected = false;
    var actual = DoesItSum(sum, numbers);
    Assert.Equal(expected, actual);
  }
}
