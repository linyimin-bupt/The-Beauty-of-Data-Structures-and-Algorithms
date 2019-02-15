import test                     from 'blue-tape'
import { mergeList            } from './list-merge'
import { SinglyLinkedList     } from '../singly-linked-list/singly-linked-list'

test ('merge-list', async t => {
  const list1 = new SinglyLinkedList ()
  const list2 = new SinglyLinkedList ()
  
  list1.insert(9)
  list1.insert(7)
  list1.insert(5)
  list1.insert(3)
  list1.insert(1)
  
  list2.insert(8)
  list2.insert(6)  
  list2.insert(4)  
  list2.insert(2)  
  
  const merge = mergeList(list1, list2)
  const result = merge.show()
  
  t.equal('9 8 7 6 5 4 3 2 1 ', result)
})