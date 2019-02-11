import test                 from 'blue-tape'
import { SinglyLinkedList } from './singly-linked-list'

test('singly-linked-list', async t => {
  const link = new SinglyLinkedList()  
  link.insert(2)
  link.insert(1)
  link.insert(5)
  link.insert(4)
  link.insert(3)
  link.insert(6)
  
  t.equal(6, link.size, 'size')
  t.equal(6, link.find(3)!.next!.data, 'find')
  t.equal(4, link.findIndex(3), 'findIndex')
  
  t.equal('2 1 5 4 3 6 ', link.show(), 'show')
  link.delete(3)
  t.equal('2 1 5 4 6 ', link.show(), 'show')  
  t.equal(5, link.size, 'size')  
})