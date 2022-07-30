/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const results = []
  const n = nums.length
  const dfs = (arr, nodes) => {
    if (nodes.length === n) {
      results.push([...nodes])
      return
    }
    for (let i = 0; i < arr.length; i++) {
      dfs([...arr.slice(0, i), ...arr.slice(i + 1)], [...nodes, arr[i]])
    }
    return
  }
  dfs(nums, [])
  return results
}
