class divyanshAg03
{

    static int getMinSquares(int n)
    {
        if (n <= 3) //ex: if n = 2, O/P = 1^2 + 1^2 = 2
            return n;
 
        // Create a dynamic programming
        // to store squares
        int dp[] = new int[n + 1];
 
        // getMinSquares table for
        // base case entries
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 3;

        // rest of table using recursion
        for (int i = 4; i <= n; i++)
        {
         
            // max value is i as i can
            // always be represented
            dp[i] = i;
 
            // Going through all smaller numbers to recursively find minimum
            for (int x = 1; x <= Math.ceil(
                              Math.sqrt(i)); x++)
            {
                int temp = x * x;
                if (temp > i)
                    break;
                else
                    dp[i] = Math.min(dp[i], 1
                                  + dp[i - temp]);
            }
        }
        int res = dp[n]; //storing result
 
        return res;
    }
   
    //running tests ...
    public static void main(String args[])
    {
        System.out.println(getMinSquares(13));
        System.out.println(getMinSquares(27));
        System.out.println(getMinSquares(144));
        System.out.println(getMinSquares(84));
        System.out.println(getMinSquares(85));
    }
}