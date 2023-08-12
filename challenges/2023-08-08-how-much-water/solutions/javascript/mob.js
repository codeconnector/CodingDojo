// How Much Water?
//
// You are given a list of integers, where each value represents the height of
// a vertical bar that can be placed perpendicular to the x-axis and the index
// of each value represents it's position on the x-axis. Using this list, find
// the maximum amount of water that can be contained by any two bars together
// with the x-axis. For example, given the list `[1, 8, 2, 6, 2, 5, 4, 8, 3, 
// ]`, the maximum amount of water that can be contained is `49`.\

// function maximumWater(barHeights) {
//   let maxArea = 0;

//   for (let i = 0; i < barHeights.length - 1; i++) {
//     for (let j = i + 1; j < barHeights.length; j++) {
//       // distance between bars * shortest bar of two
//       let dist = j - i
//       let shortest = Math.min(barHeights[i], barHeights[j])
//       let temp = dist * shortest

//       if (temp > maxArea) {
//         maxArea = temp
//       }
//     }
//   }
//   return maxArea
// }

// function maximumWater(barHeights) {
//   let maxArea = 0;
//   let leftPointer = 0
//   let rightPointer = barHeights.length - 1

//   while (leftPointer < rightPointer) { 
//     let dist = rightPointer - leftPointer
//     let shortest = Math.min(barHeights[leftPointer], barHeights[rightPointer])
//     let temp = dist * shortest
//     if (temp > maxArea) {
//       maxArea = temp;
//     }
//     // move the pointers
//     if (barHeights[leftPointer] > barHeights[rightPointer]) {
//       rightPointer -= 1
//     } else {
//       leftPointer += 1
//     }
//   }
//   return maxArea
// }

function maximumWater(barHeights, left = 0, right = barHeights.length - 1) {
  if (left == right) return 0;

  let dist = right - left
  let shortest = Math.min(barHeights[left], barHeights[right])
  let temp = dist * shortest

  if (barHeights[left] > barHeights[right]) {
    return Math.max(temp,  maximumWater(barHeights, left, right-1))
  } else {
    return Math.max(temp,  maximumWater(barHeights, left+1,right))
  }
}

module.exports = { maximumWater };
