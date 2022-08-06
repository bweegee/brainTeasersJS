/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = (root) => {
  const results = []
  const dfs = (root) => {
    if (!root) return
    results.push(root.val)
    for (const i of root.children) {
      dfs(i)
    }
  }
  dfs(root)
  return results
}
