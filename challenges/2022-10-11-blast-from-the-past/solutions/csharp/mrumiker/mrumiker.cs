using Xunit;
using System;
using System.Collections.Generic;
using System.Linq;

public class BlastfromthePast
{
  public int[] FindThreeLargestNums(int[] input)

  {
    var inputLength = input.Length;
    if (inputLength < 3) return new int[] { };

    var output = new int[3];
    Array.Copy(input, output, 3); // copy the first three numbers in our array into our output array
    Array.Sort(output);
    for (int i = 3; i < inputLength; i++)
    {
      var currentNum = input[i];
      var currentLow = output[0];
      if (currentNum > currentLow)
      {
        output[0] = currentNum;
        Array.Sort(output);
      }
    }

    return output;

  }
}