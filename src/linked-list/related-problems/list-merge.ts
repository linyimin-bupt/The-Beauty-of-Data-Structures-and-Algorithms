import { Node, SinglyLinkedList } from '../singly-linked-list/singly-linked-list'

/**
 * 合并两个有序链表,返回合并后链表
 */
export const mergeList = function (list1: SinglyLinkedList, list2: SinglyLinkedList): SinglyLinkedList {
  let p = list1.head.next
  let q = list2.head.next
  /**
   * 如果有链表为空,直接返回
   */
  if (!p || !q) {
    return p ? list1 : list2
  }
  const r = new SinglyLinkedList()
  while (p && q) {
    if (p.data < q.data) {
      r.insert(p.data)
      p = p.next
    } else {
      r.insert(q.data)
      q = q.next
    }
  }
  let tail: Node = new Node(-1)
  while (p) {
    r.insert(p.data)
    tail = p
    p = p.next
  }
  
  while (q) {
    tail = q
    r.insert(q.data)
    q = q.next
  }
  r.tail = tail
  return r
}