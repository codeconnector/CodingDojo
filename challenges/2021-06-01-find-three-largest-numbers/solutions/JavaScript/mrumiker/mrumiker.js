function findThreeLargestNumbers(arr) {
  if (arr.length < 3) return null;
  let ans = arr.slice(0, 3),
      min = Math.min(...ans);
  for (let i = 3; i < arr.length; i++) {
    if (arr[i] > min) {
      ans[ans.indexOf(min)] = arr[i];
      min = Math.min(...ans);
    }
  }
  return ans.sort((a, b) => a - b);
}
