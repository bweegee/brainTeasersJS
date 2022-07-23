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
