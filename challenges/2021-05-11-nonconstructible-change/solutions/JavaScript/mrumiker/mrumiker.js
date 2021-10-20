function minImpossibleCoins(arr) {

  let sum = 1;

  for (let num of arr) {
    if (num > sum) return sum;
    sum += num;
  } 

  return sum;

}

console.log(minImpossibleCoins([1]));//2
console.log(minImpossibleCoins([1, 1, 1, 1, 1]));//6
console.log(minImpossibleCoins([1, 1, 2, 3, 5, 7, 22]));//20
console.log(minImpossibleCoins([1, 1, 4, 5, 6, 7, 9]));//3
console.log(minImpossibleCoins([1, 1, 1, 1, 5, 10, 15, 20, 100]));//55
