/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const count = map.get(nums[i]) + 1
      map.set(nums[i], count)
    } else {
      map.set(nums[i], 1)
    }
  }
  const sortedMap = [...map.entries()].sort((a, b) => a[1] - b[1])
  const results = sortedMap.slice(-k).map((entry) => entry[0])
  console.log({ sortedMap, results })
  return results
}

/*
 * Runtime: 97 ms, faster than 80.31% of JavaScript online submissions for Top K Frequent Elements.
 * Memory Usage: 45.3 MB, less than 64.86% of JavaScript online submissions for Top K Frequent Elements.
*/
