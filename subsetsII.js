/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const results = []
  const subsets = []
  const dfs = (i) => {
    if (i >= nums.length) {
      const copy = [...subsets]
      results.push(copy)
      return
    }
    subsets.push(nums[i])
    dfs(i + 1)

    subsets.pop()
    while (i < nums.length && nums[i] === nums[i + 1]) {
      i++
    }
    dfs(i + 1)
  }
  dfs(0)
  return results
}
