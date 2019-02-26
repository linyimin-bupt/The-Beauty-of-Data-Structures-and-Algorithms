import test               from 'blue-tape'
import { CircularQueue  } from './circular-queue'

test ('circular queue', async t => {
  const queue = new CircularQueue (2)
  
  t.equal (queue.size, 2, 'size')
  t.equal (queue.count, 0, 'count')
})

test ('circular queue', async t => {
  const queue = new CircularQueue (3)
  
  queue.enqueue (3)
  queue.enqueue (6)
  t.equal (queue.enqueue (3),false,  'out of range')
  t.equal (2, queue.count, 'enqueue')
})

test ('circular queue', async t => {
  const queue = new CircularQueue (3)
  
  queue.enqueue (3)
  queue.enqueue (6)
  t.equal (queue.dequeue (), 3,  'dequeue')
  t.equal (queue.dequeue (), 6,  'dequeue')
  t.equal (queue.dequeue (), null,  'queue is null')
  t.equal (0, queue.count, 'count is 0')
})