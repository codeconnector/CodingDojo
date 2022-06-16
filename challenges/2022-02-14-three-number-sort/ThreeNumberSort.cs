using System.Collections.Generic;
using Xunit;

public class ThreeNumberSort
{
  public int[] SortArray(int[] input, (int, int, int) threes)
  {
      // Insert your solution code here

      //key is the number, the value is the count
      var threeMap = new Dictionary<int, int>()
      {
         {  threes.Item1, 0 }, //1
         {  threes.Item2, 0 },
         {  threes.Item3, 0 },
      };

      for (int i = 0; i < input.Length; i++)
      {
         //input[i] //3
         var current = input[i];
         if (current == threes.Item1)
         {
            var item1Index = threeMap[threes.Item1];
            var item2Index = threeMap[threes.Item2];
            input[item1Index] = current;
            if (item2Index > item1Index)
            {
               input[item1Index + item2Index] = threes.Item2;
            }
            if (item1Index + item2Index != i)
            {
               input[i] = threes.Item3;
            }
            if (i > 0 && input[i - 1] == threes.Item2)
            {
               if (item1Index + item2Index == i)
               {
                  input[i - 1] = input[i] = threes.Item2;
               }
               else
               {
                  input[i - 1] = threes.Item1;
                  input[i] = threes.Item2;
               }
            }
         }
         else if (current == threes.Item2)
         {
            var item1Index = threeMap[threes.Item1];
            var item2Index = threeMap[threes.Item2];
            input[item1Index + item2Index] = current;
            if (item1Index + item2Index != i)
            {
               input[i] = threes.Item3;
            }
         }
         else 
         {

         }
         threeMap[current] += 1;
      }

    return input;
  }

  [Fact]
  public void SortsArrayWithAllThreeNumbers()
  {
    var input = new int[] { 3, 2, 3, 1, 2, 2, 1, 3, 2 };
    var threes = (1, 2, 3);
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
    var threes = (1, 2, 3);
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
    var threes = (1, 2, 3);
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
    var threes = (1, 2, 3);
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
    var threes = (3, 2, 1);
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
    var threes = (2, 3, 1);
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
    var threes = (2, 3, 1);
    var actual = SortArray(input, threes);
    var expected = new int[] { 1, 1, 1, 1 };
    for (var i = 0; i < actual.Length; i++)
    {
      Assert.Equal(actual[i], expected[i]);
    }
  }
  
  [Fact]
  public void SortsAnotherInterestingArray()
  {
    var input = new int[] { 1, 3, 2, 1 };
    var threes = (1, 2, 3);
    var actual = SortArray(input, threes);
    var expected = new int[] { 1, 1, 2, 3 };
    for (var i = 0; i < actual.Length; i++)
    {
      Assert.Equal(actual[i], expected[i]);
    }
  }
}
