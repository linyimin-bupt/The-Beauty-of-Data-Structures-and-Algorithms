import test               from 'blue-tape'
import { SequenceQueue  } from './sequence-queue'

test ('sequence queue', async t => {
  const queue = new SequenceQueue<number> (2)
  t.equal (queue.size, 2, 'size')
  t.equal (queue.count, 0, 'size')
  
  queue.enqueue (2)
  t.equal (queue.count, 1, 'count')
  
  queue.enqueue (3)
  t.equal (queue.count, 2, 'count')
  
  t.equal (queue.enqueue (7), false, 'out of range')
})

test ('sequence queue', async t => {
  const queue = new SequenceQueue<number> (2)
  t.equal (queue.size, 2, 'size')
  t.equal (queue.count, 0, 'size')
  
  queue.enqueue (2)  
  queue.enqueue (3)
  t.equal (queue.dequeue(), 2, 'dequeue')
  t.equal (queue.dequeue(), 3, 'dequeue')
  
  t.equal (queue.dequeue(), null, 'queue is null')
})
