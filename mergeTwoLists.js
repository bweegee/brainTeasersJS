/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  const merged = new ListNode(0)
  let iterator = merged
  while (list1 && list2) {
    if (list1.val < list2.val) {
      iterator.next = new ListNode(list1.val)
      list1 = list1.next
      iterator = iterator.next
    } else {
      iterator.next = new ListNode(list2.val)
      list2 = list2.next
      iterator = iterator.next
    }
  }
  if (list1) iterator.next = list1
  else iterator.next = list2
  return merged.next
}
