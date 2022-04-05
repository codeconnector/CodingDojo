public class ThreeNumberSort
{
  public int[] SortArray(int[] input, (int, int, int) threes)
  {
    var FirstCount = 0;
    var SecondCount = 0;
    var ThirdCount = 0;

    (var FirstNum, var SecondNum, var ThirdNum) = threes;

    for (var i = 0; i < input.Length; i++)
    {
      var Num = input[i];
      if (Num == FirstNum)
      {
        if (i > FirstCount)
        {
          input[FirstCount] = FirstNum;

          if (SecondCount > 0)
          {
            input[FirstCount + SecondCount] = SecondNum;
          }

          if (ThirdCount > 0)
          {
            input[i] = ThirdNum;
          }
        }
        FirstCount++;
      }
      else if (Num == SecondNum)
      {
        if (i > FirstCount + SecondCount)
        {
          input[FirstCount + SecondCount] = SecondNum;
          input[i] = ThirdNum;
        }
        SecondCount++;
      }
      else
      {
        ThirdCount++;
      }
    }
    return input;
  }
