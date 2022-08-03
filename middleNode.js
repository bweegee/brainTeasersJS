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
const middleNode = (head) => {
  let length = 0
  let node = head
  while (node) {
    node = node.next
    length += 1
  }
  let mid = Math.ceil(length / 2)
  if (length % 2 === 0) mid += 1
  for (let i = 1; i < mid; i++) {
    head = head.next
  }
  return head
}
