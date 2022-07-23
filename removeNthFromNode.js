/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode()
  dummy.next = head
  const result = dummy
  let tail = head

  let count = 0
  while (count < n) {
    tail = tail.next
    count++
  }

  let prev = dummy
  let remove = head
  while (tail) {
    tail = tail.next
    prev = prev.next
    remove = remove.next
  }

  prev.next = remove.next
  return result.next
}
