function longest_binary_run(n) {
  const str = n.toString(2);
  let count = maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      count++;
    } else {
      count = 0;
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
}

console.log(longest_binary_run(156)); // 3
console.log(longest_binary_run(1979)); // 4
console.log(longest_binary_run(2731));  // 2
console.log(longest_binary_run(2185));  // 1
