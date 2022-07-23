/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    if (nums[mid] === 0) {
      const m = nums[mid]
      const l = nums[low]
      nums[low] = m
      nums[mid] = l
      mid++
      low++
    } else if (nums[mid] === 1) {
      mid++
    } else if (nums[mid] === 2) {
      const h = nums[high]
      const m = nums[mid]
      nums[mid] = h
      nums[high] = m
      high--
    }
  }
}
