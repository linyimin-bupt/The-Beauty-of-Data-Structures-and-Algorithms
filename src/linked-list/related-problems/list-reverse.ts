import { SinglyLinkedList, Node } from '../singly-linked-list/singly-linked-list'

/**
 * 单链表翻转
 */
export const reverse = function (list: SinglyLinkedList) {
  let p = list.head.next
  // 如果链表为空或只含有一个元素直接返回
  if (!p || !p.next) {
    return
  }
  let q = p.next
  p.next = null
  list.tail = p
  while (q && q.next) {
    let r = q.next
    q.next = p
    p = q
    q = r
  }
  q.next        = p
  list.head.next = q!
}