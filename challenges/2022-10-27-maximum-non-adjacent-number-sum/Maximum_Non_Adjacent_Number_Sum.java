import java.util.*;

public class Maximum_Non_Adjacent_Number_Sum {
    public static void main(String[] args) {
        int[] arr = {75, 105, 120, 75, 90, 135};
        int[] dp = new int[arr.length + 1];
        Arrays.fill(dp, -1);
        System.out.println(maxNonAdjacentSum(arr, 0, dp));
    }

    public static int maxNonAdjacentSum(int[] arr, int ind, int[] dp) {
        if (ind >= arr.length) {
            return 0;
        }
        if (dp[ind] != -1) {
            return dp[ind];
        }
        int taken = arr[ind] + maxNonAdjacentSum(arr, ind + 2, dp);
        int notTaken = 0 + maxNonAdjacentSum(arr, ind + 1, dp);
        return dp[ind] = Math.max(taken, notTaken);
    }
}
