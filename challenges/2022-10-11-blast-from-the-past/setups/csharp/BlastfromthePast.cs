// # Find Three Largest Numbers

// Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array. The function should return duplicate integers if necessary.

// ## Business Rules/Errata

// - The input array should have at least three integers. If it does not, you should return an empty array.
// - You may not sort the input array
// - The function should handle duplicate integers; for example `[10, 5, 9, 10, 12]` should return `[10, 10, 12]`
// - Constant space -> you will return a new array of 3 integers, and this will be the only new data structure you create.
// - Linear time -> you should solve this problem by only passing through the array a single time.

// ## Examples

// ```
// findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]) -> [18, 141, 541]
// findThreeLargestNumbers([11, -7, 5]) -> [-7, 5, 11]
// findThreeLargestNumbers([1]) -> []

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
    var expected = new int[] { };
    Assert.True(expected.SequenceEqual(actual));
  }

  [Fact]
  public void TestCaseFour()
  {
    var numbers = new int[] { 10, 5, 9, 10, 12 };
    var actual = FindThreeLargestNums(numbers);
    var expected = new int[] { 10, 10, 12 };
    Assert.True(expected.SequenceEqual(actual));
  }
}