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
 * @return {number[]}
 */
const inorderTraversal = function (root, arr = []) {
  if (!root) return arr
  inorderTraversal(root.left, arr)
  arr.push(root.val)
  inorderTraversal(root.right, arr)
  return arr
}
