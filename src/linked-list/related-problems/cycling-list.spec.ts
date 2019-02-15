import test from 'blue-tape'
import { isCycling } from './cycling-list'
import { Node } from '../singly-linked-list/singly-linked-list'

test ('isCycling', async t => {
  let head = null
  t.equal(null, isCycling(head), 'an empty list')
})

test ('isCycling', async t => {
  let head = new Node (6)
  t.equal(null, isCycling(head), 'just one element')
})


test ('isCycling', async t => {
  let   head      = new Node (6)
  const enter     = new Node (4)
  head.next       = enter
  enter.next      = new Node (2)
  enter.next.next = enter
  t.equal(2, isCycling(head)!.data, 'a cycling list')
})