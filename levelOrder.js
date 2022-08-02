/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  const results = []
  const queue = [root]
  while (queue.length) {
    const nodeList = []
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      if (node) {
        nodeList.push(node.val)
        queue.push(...[node.left, node.right])
      }
    }
    if (nodeList.length) results.push(nodeList)
  }
  return results
}
