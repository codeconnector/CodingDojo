using Xunit;
using System;
using System.Collections.Generic;
using System.Linq;

public class BlastfromthePast
{
  public int[] FindThreeLargestNums(int[] input)
  {
    // Insert your solution code here
    return new int[] { };
  }

  [Fact]
  public void TestCaseOne()
  {
    var numbers = new int[] { 141, 2, 17, -7, -17, -27, 18, 541, 8, 7, 7 };
    var actual = FindThreeLargestNums(numbers);
    var expected = new int[] { 18, 141, 541 };
    Assert.True(expected.SequenceEqual(actual));
  }

  [Fact]
  public void TestCaseTwo()
  {
    var numbers = new int[] { 11, -7, 5, -7 };
    var actual = FindThreeLargestNums(numbers);
    var expected = new int[] { -7, 5, 11 };
    Assert.True(expected.SequenceEqual(actual));
  }

  [Fact]
  public void TestCaseThree()
  {
    var numbers = new int[] { 1 };
    var actual = FindThreeLargestNums(numbers);
    var expected = new int[] { 1 };
    Assert.True(expected.SequenceEqual(actual));
  }
}