import { SinglyLinkedList, Node } from '../singly-linked-list/singly-linked-list'

/**
 * 链表的元素个数为奇数时,返回链表的中间节点
 * 链表的元素个数为偶数时,返回链表中间节点的前一个节点
 * @param list 
 */
export const findIntermediateNode = function (list: SinglyLinkedList): Node | null {
  let slow: Node | null, fast: Node | null
  slow = fast = list.head.next
  if (!fast) {
    return null
  }
  while (fast.next && fast.next.next) {
    slow = slow!.next
    fast = fast.next.next
  }
  
  return slow
}