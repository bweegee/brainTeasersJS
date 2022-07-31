/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  return nums.reduce((prev, next, index) => {
    if (!prev.length) {
      prev.push(next)
      return prev
    }
    prev.push(prev[index - 1] + next)
    return prev
  }, [])
}
