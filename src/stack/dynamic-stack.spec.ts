import test             from 'blue-tape'
import { DynamicStack } from './dynamic-stack'

test ('size()', async t => {
  let stack = new DynamicStack (1)
  t.equal(1, stack.size)
  
  stack = new DynamicStack (2)
  t.equal(2, stack.size)
  
  stack = new DynamicStack (5)
  t.equal(5, stack.size)
  
  stack = new DynamicStack (1000)
  t.equal(1000, stack.size)
})

test ('count()', async t => {
  let stack = new DynamicStack<number> (1)
  t.equal(0, stack.count)
  
  stack.push(1)
  
  t.equal(1, stack.count)
  
  stack.push(5)
  t.equal(2, stack.count, 'count')
  t.equal(2, stack.size, 'dynamic')

})

test ('count()', async t => {
  let stack = new DynamicStack<number> (1)
  t.equal(0, stack.count)
  
  stack.push(1)
  stack.push(5)
  stack.push(3)
  stack.push(7)
  stack.push(9)
  
  t.equal(5, stack.count, 'count')
  
  t.equal(9, stack.pop(), 'pop')
  t.equal(7, stack.pop(), 'pop')
  t.equal(3, stack.pop(), 'pop')
  t.equal(5, stack.pop(), 'pop')
  t.equal(1, stack.pop(), 'pop')
  t.equal(null, stack.pop(), 'pop')
  
  t.equal(8, stack.size, 'size')
  t.equal(0, stack.count, 'count')

})

test ('top ()', async t => {
  let stack = new DynamicStack<number> (1)
  t.equal(0, stack.count)
  
  stack.push(1)
  
  t.equal(1, stack.count)
  
  t.equal (1, stack.top(), 'top')
  
  t.equal(1, stack.count)
  
  stack.push(5)
  t.equal(5, stack.top(), 'top')
  t.equal(2, stack.count)
})
