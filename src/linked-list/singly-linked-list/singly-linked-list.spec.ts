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
  t.equal(4, link.find(3)!.next!.data, 'find')
  t.equal(4, link.findIndex(1), 'findIndex')
  
  t.equal('6 3 4 5 1 2 ', link.show(), 'show')
  link.delete(3)
  t.equal('6 4 5 1 2 ', link.show(), 'delete')  
  t.equal(5, link.size, 'size')  
  
  link.deleteTail()
  t.equal('6 4 5 1 ', link.show(), 'deleteTail')
})