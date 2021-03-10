/*
Given an integer array nums, return the maximum difference between two
successive elements in its sorted form. If the array contains less than two
elements, return 0.
*/

const maximumGap = (nums) => {
  const sorted = nums.sort((a,b) => a - b)
  let max = 0
  if (sorted.length >= 2) {
    for (let i = 0; i < nums.length - 1; i++) {
      const diff = sorted[i + 1] - sorted[i]
      if (diff > max) {
          max = diff
      }
    }
  }
  return max
}
