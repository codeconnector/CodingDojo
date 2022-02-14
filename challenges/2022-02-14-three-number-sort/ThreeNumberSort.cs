using Xunit;
using System.Collections.Generic;
using System.Linq;

public class ThreeNumberSort
{
  // I DON"T KNOW HOW TO INITIALIZE THIS LINE, HELP PLEASE!
  public int SortArray()
  {
	// Insert your solution code here
	return 0;
  }

  [Fact]
  public void Test_case_one_()
  {
    var input = new List<int>() { 3, 2, 3, 1, 2, 2, 1, 3, 2 };
    var threes = new List<int>() { 1, 2, 3};
    var expected = new List<int>() { 1, 1, 2, 2, 2, 2, 3, 3, 3 };
    Assert.Enumerable.SequenceEqual(expected, SortArray(input, threes));
  }

  [Fact]
  public void Test_case_two_()
  {
    var input = new List<int>() { 2, 3, 3, 2, 2, 3 };
    var threes = new List<int>() { 1, 2, 3 };
    var expected = new List<int>() { 2, 2, 2, 3, 3, 3 };
    Assert.Enumerable.SequenceEqual(expected, SortArray(input, threes));
  }

  [Fact]
  public void Test_case_three_()
  {
    var input = new List<int>() { 1, 2, 1, 1, 2, 1 };
    var threes = new List<int>() { 1, 2, 3 };
    var expected = new List<int>() { 1, 1, 1, 1, 2, 2 };
    Assert.Enumerable.SequenceEqual(expected, SortArray(input, threes));
  }

  [Fact]
  public void Test_case_four_()
  {
    var input = new List<int>() { 3, 1, 1, 3 };
    var threes = new List<int>() { 1, 2, 3};
    var expected = new List<int>() { 1, 1, 3, 3 };
    Assert.Enumerable.SequenceEqual(expected, SortArray(input, threes));
  }

  [Fact]
  public void Test_case_five_()
  {
    var input = new List<int>() { 3, 1, 1, 3 };
    var threes = new List<int>() { 3, 2, 1};
    var expected = new List<int>() { 3, 3, 1, 1 };
    Assert.Enumerable.SequenceEqual(expected, SortArray(input, threes));
  }

  [Fact]
  public void Test_case_six_()
  {
    var input = new List<int>() { 1, 2, 1, 1, 2, 1 };
    var threes = new List<int>() { 2, 3, 1 };
    var expected = new List<int>() { 2, 2, 1, 1, 1, 1 };
    Assert.Enumerable.SequenceEqual(expected, SortArray(input, threes));
  }

  [Fact]
  public void Test_case_six_()
  {
    var input = new List<int>() { 1, 1, 1, 1 };
    var threes = new List<int>() { 2, 3, 1 };
    var expected = new List<int>() { 1, 1, 1, 1 };
    Assert.Enumerable.SequenceEqual(expected, SortArray(input, threes));
  }
}
