/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  const stack = []
  let remainder = 0
  let list = new ListNode()
  const mainList = list
  while (l1 || l2 || remainder) {
    const l1Node = l1?.val || 0
    const l2Node = l2?.val || 0
    let sum = l1Node + l2Node + remainder
    if (sum > 9) {
      remainder = 1
      sum = sum % 10
    } else {
      remainder = 0
    }
    const currentNode = new ListNode(sum)
    list.next = currentNode
    list = currentNode
    l1 = l1?.next
    l2 = l2?.next
  }
  return mainList.next
}
