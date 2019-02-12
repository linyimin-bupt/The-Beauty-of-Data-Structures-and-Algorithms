import test from 'blue-tape'
import { LRU } from './lru'
import { SinglyLinkedList } from '../singly-linked-list/singly-linked-list'

test ('lru', async t => {
  const list = new SinglyLinkedList ()
  const lru = new LRU (list, 6)
  lru.set(1)
  lru.set(2)
  lru.set(3)
  lru.set(4)
  lru.set(5)
  lru.set(6)
  lru.set(7)
  
  let result = list.show()
  t.equal(result, '7 6 5 4 3 2 ', 'set()')
  
  result = lru.get(2)
  t.equal(result, 2, 'get()')
  
  result = list.show()
  
  t.equal(result, '2 7 6 5 4 3 ', 'get()')
  
})