public class divyanshAg03{
    static int SumOfSquares(int n)
    {
        if (n <= 3)    //base cases (ex:if n = 2 i.e. 1^2+1^2 = 2)
        return n;

        int res = n;

        for (int i = 1; i<= n; i++)
        {
            int temp = i * i;
            if (temp > n)
            {
                break;
            }
            else
            {
                res = Math.min(res, 1 + SumOfSquares(n - temp));
            }
        }
        return res;
    }

    public static void main(String[] args) 
    {   //running tests
        System.out.println(SumOfSquares(8));
        System.out.println(SumOfSquares(12));
        System.out.println(SumOfSquares(9));
    }
}