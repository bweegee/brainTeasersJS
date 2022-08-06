/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  let index = -1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      index = mid
      break
    }
    if (nums[mid] < target) {
      left = mid + 1
    }
    if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return index
}
