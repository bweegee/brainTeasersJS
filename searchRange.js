/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let min = -1
  let max = -1

  const findNode = (i = 0) => {
    if (nums[i] == null) return
    if (nums[i] === target) {
      if (min === -1 || i < min) min = i
      if (i > max) max = i
    }

    const left = 2 * i + 1
    const right = 2 * i + 2

    findNode(left)
    findNode(right)
  }

  findNode()
  return [min, max]
}

// binary search solution
const searchRange = (nums, target) => {
  let left = 0
  let right = nums.length
  let mid
  const result = [-1, -1]
  if (!nums.length) return result
  while (left < right) {
    mid = parseInt((left + right) / 2)
    if (nums[mid] >= target) right = mid
    else left = mid + 1
  }
  if (nums[left] === target) result[0] = left
  left = 0
  right = nums.length
  while (left < right) {
    mid = parseInt((left + right) / 2)
    if (nums[mid] <= target) left = mid + 1
    else right = mid
  }
  if (nums[right - 1] === target) result[1] = right - 1
  return result
}
