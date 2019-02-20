import test              from 'blue-tape'
import { SequenceStack } from './sequence-stack'

test ('size', async t => {
  const stack = new SequenceStack<number> (10)
  
  t.equal (10, stack.size)
})

test ('size', async t => {
  const stack = new SequenceStack<number> (10)
  
  t.equal (10, stack.size)
})

test ('count', async t => {
  const stack = new SequenceStack<number> (10)
  
  t.equal (0, stack.count)
})

test ('push', async t => {
  const stack = new SequenceStack<number> (10)
  stack.push (10)
  stack.push (8)
  t.equal (2, stack.count, 'size')  
  const result = stack.pop()
  t.equal (1, stack.count, 'size')    
  t.equal (8, result, 'push and pop')
})

test ('push', async t => {
  const stack = new SequenceStack<number> (2)
  stack.push (10)
  stack.push (8)
  const result = stack.push (6)
  t.equal (false, result, 'size')  
  const data = stack.pop()
  t.equal (1, stack.count, 'size')    
  t.equal (8, data, 'push and pop')
})
