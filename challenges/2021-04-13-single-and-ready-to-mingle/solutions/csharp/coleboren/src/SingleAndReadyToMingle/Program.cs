// using static Singles;

namespace SingleAndReadyToMingle
{
    class Program
    {
        static void Main(string[] args)
        {
            var MyArray1 = new int[] {2, 4, 6, 8, 10, 2, 6, 10};
            var singlesArray1 = new Singles();
            singlesArray1.GetSingles(MyArray1);

            var MyArray2 = new int[] {1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9};
            var singlesArray2 = new Singles();
            singlesArray2.GetSingles(MyArray2);
        }
    }
}
