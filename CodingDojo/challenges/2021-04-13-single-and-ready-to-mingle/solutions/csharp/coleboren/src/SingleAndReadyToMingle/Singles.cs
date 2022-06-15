using System;
using System.Collections.Generic;
using System.Linq;

namespace SingleAndReadyToMingle
{
    public class Singles
    {
        public int[] arrayWithSingles;

        public Singles()
        {
            //No Args Constructor
        }
        public int[] GetSingles(int[] array)
        {
            var arrayList = new List<int>();

            foreach (var number in array)
            {
                bool isReapted = array.Count(x => x == number) > 1;
                if(isReapted == false)
                {
                    arrayList.Add(number);
                }
            }
            arrayList.Sort();
            var result = arrayList.ToArray();
            Console.WriteLine("Input Array: " + "[{0}]", string.Join(", ", array));
            Console.WriteLine("Singles Array: " + "[{0}]", string.Join(", ", result));
            Console.WriteLine("\n");
            return result;
        }
    }
}