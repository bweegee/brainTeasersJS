/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  const map = new Map()
  let index = 0

  while (!map.has(head)) {
    if (!head) return head
    map.set(head, index)
    index += 1
    head = head.next
  }
  return head
}
