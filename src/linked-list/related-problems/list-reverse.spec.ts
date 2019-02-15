import test                 from 'blue-tape'
import { reverse }          from './list-reverse'
import { SinglyLinkedList } from '../singly-linked-list/singly-linked-list'

test ('list-reverse', async t => {
  const list = new SinglyLinkedList()
  reverse(list)
  let result = list.show()
  t.equal('', result, 'a null list')
  list .insert(6)
  list .insert(3)
  list .insert(2)
  list .insert(5)
  list .insert(4)
  list .insert(1)
  result = list.show()
  t.equal(result, '1 4 5 2 3 6 ')
  
  reverse (list)
  result = list.show()
  t.equal(result, '6 3 2 5 4 1 ')
})

test ('list-reverse', async t => {
  const list = new SinglyLinkedList()
  list .insert(6)
  reverse (list)
  let result = list.show()
  t.equal(result, '6 ', 'just a element')
})