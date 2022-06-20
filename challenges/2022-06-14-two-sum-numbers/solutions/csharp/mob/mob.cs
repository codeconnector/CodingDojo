using Xunit;
using System.Collections.Generic;

public class TwoSumNumbers
{
  public bool DoesItSum(int sum, int[] numbers)
  {
    var hashset = new HashSet<int>();
    for (int i = 0; i < numbers.Length; i++)
    {
      var x = sum - numbers[i];
      if (hashset.Contains(x))
      {
        return true;
      }
      hashset.Add(numbers[i]);
    }
    return false;
  }
}