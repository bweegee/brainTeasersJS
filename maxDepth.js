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
 * @return {number}
 */
const maxDepth = (root, depth = 1) => {
  if (!root) return
  depth += 1
  const leftDepth = maxDepth(root.left, depth)
  const rightDepth = maxDepth(root.right, depth)
  return Math.max(leftDepth, rightDepth)
}
