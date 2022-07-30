/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const results = []
  const dfs = (s, i, nodes = []) => {
    if (s > target) return
    if (s === target) {
      results.push([...nodes])
      return
    }
    for (let j = i; j < candidates.length; j++) {
      nodes.push(candidates[j])
      const sum = s + candidates[j]
      dfs(sum, j, nodes)
      nodes.pop()
    }
    return
  }
  dfs(0, 0)
  return results
}
