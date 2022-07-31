/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let total = nums.reduce((acc, curr) => acc + curr, 0)
  let left = 0
  let right = total
  for (let i = 0; i < nums.length; i++) {
    left += nums[i - 1] || 0
    right = total - (left + nums[i])
    if (left === right) return i
  }
  return -1
}
