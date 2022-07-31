/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  const results = []
  const nodes = []
  candidates.sort()
  const dfs = (index, target) => {
    console.log({ nodes, index, target })
    if (target === 0) {
      results.push([...nodes])
      return
    }
    if (target < 0) return

    let prev
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] === prev) continue
      nodes.push(candidates[i])
      dfs(i + 1, target - candidates[i])

      nodes.pop()
      prev = candidates[i]
    }
  }
  dfs(0, target)
  return results
}
