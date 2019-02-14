import test                     from 'blue-tape'
import { findIntermediateNode } from './intermediate-node'
import { SinglyLinkedList     } from '../singly-linked-list/singly-linked-list'

test ('findIntermediateNode', async t => {
  const list: SinglyLinkedList = new SinglyLinkedList()
  list.insert(6)
  list.insert(4)
  list.insert(3)
  list.insert(1)
  list.insert(5)
  list.insert(2)
  
  let mid = findIntermediateNode (list)!.data
  t.equal(mid, 1)
  
  list.delete(6)
  
  mid = findIntermediateNode(list)!.data
  t.equal(mid, 1)
  
})