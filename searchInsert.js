/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let left = 0
  let right = nums.length

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (target === nums[mid]) return mid
    if (target < nums[mid]) right = mid
    if (target > nums[mid]) left = mid + 1
  }
  return left
}
