/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    mid = Math.floor((right + left) / 2)
    if (nums[left] === target) return left
    if (nums[mid] === target) return mid
    if (nums[right] === target) return right

    // check if left sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] < target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    // check if right sorted
    if (nums[right] >= nums[mid]) {
      if (nums[mid] < target && target < nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}
