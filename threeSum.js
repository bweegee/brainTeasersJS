/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const results = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) {
        right -= 1
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left += 1
      } else {
        results.push([nums[i], nums[left], nums[right]])
        left += 1
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1
        }
      }
    }
    prev = nums[i]
  }
  return results
}
