/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  const reversed = new ListNode(0)
  let iterator = reversed
  const dfs = (node) => {
    if (!node) return
    dfs(node.next)
    iterator.next = new ListNode(node.val)
    iterator = iterator.next
  }
  dfs(head)
  return reversed.next
}
