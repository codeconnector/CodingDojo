public class Solution
{
  public static int[] MoveToEnd(int[] arr, int SpecialNum)
  {

    var StartIndex = 0;
    var EndIndex = FindEnd(arr.Length - 1); //the FindEnd function will set EndIndex to the last position containing a number that is not == SpecialNum

    while (StartIndex < EndIndex)
    {
      if (arr[StartIndex] == SpecialNum)//if we find a SpecialNum...
      {
        arr[StartIndex] = arr[EndIndex];
        arr[EndIndex] = SpecialNum;//switch the current instance of SpecialNum with the final non-special number in arr
        EndIndex = FindEnd(EndIndex); // run FindEnd to move EndIndex to the left until we reach the new final non-special number
      }
      StartIndex++;//always move StartIndex one to the right to continue the search
    }//if there is still daylight between StartIndex and EndIndex, keep going through the array!

    return arr;

    int FindEnd(int CurrentIndex)//returns the index of the last non-special number in the array
    {
      while (CurrentIndex > 0 && arr[CurrentIndex] == SpecialNum)//currentIndex > 0 prevents out of range exception if array contains all specialNums or is empty
      {
        CurrentIndex--;
      }
      return CurrentIndex;
    }
  }
}