import { Node } from '../singly-linked-list/singly-linked-list'

/**
 * 如果有环,返回快慢指针相遇的节点
 * 若无环,则返回null
 * @param list 
 */
export const isCycling = function (list: Node | null): Node | null{
  /**
   * 链表为空或只存在一个节点
   */
  if (!list || !list.next) {
    return null
  }
  let slow = list
  let fast = list
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next!
    if (slow === fast) {
      return slow
    }
  }
  return null
}

export const cycleEntranceNode = function (list: Node): Node | null {
  let node = isCycling (list)
  if (!node) {
    return null
  }
  let slow = list
  while (slow != node) {
    node = node!.next
    slow = slow.next!
  }
  return slow
}