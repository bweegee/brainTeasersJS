//TODO room for performance improvement
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const results = []
  const left = []
  const right = []
  for (let i = 0; i < nums.length; i++) {
    if (left[i - 1] === undefined) left.push(nums[i])
    else left.push(nums[i] * left[i - 1])
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (right[0] === undefined) right.unshift(nums[i])
    else right.unshift(nums[i] * right[0])
  }
  for (let i = 0; i < nums.length; i++) {
    const leftVal = left[i - 1] === undefined ? 1 : left[i - 1]
    const rightVal = right[i + 1] === undefined ? 1 : right[i + 1]
    results.push(leftVal * rightVal)
  }
  return results
}
