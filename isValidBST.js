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
 * @return {boolean}
 */
const isValidBST = (root, max = Infinity, min = -Infinity) => {
  if (root === null) return true

  return (
    root.val < max &&
    root.val > min &&
    isValidBST(root.left, root.val, min) &&
    isValidBST(root.right, max, root.val)
  )
}
