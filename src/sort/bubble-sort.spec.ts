import test           from 'blue-tape'
import { bubbleSort } from './bubble-sort'
import { generateArray, isSorted } from './util'

test ('bubble sort', async t => {
  const arr = [1, 3, 8, 2, 5, 9, 0]
  console.time('sort')
  const result = bubbleSort (arr)
  console.timeEnd('sort')
  
  const EXPECTED = [0, 1, 2, 3, 5, 8, 9]
  
  t.deepEqual (result, EXPECTED, 'bubble sort')
})

test ('bubble sort', async t => {
  const arr = [0, 1, 2, 3, 5, 8, 9]
  console.time('sort')
  const result = bubbleSort (arr)
  console.timeEnd('sort')
  
  const EXPECTED = [0, 1, 2, 3, 5, 8, 9]
  
  t.deepEqual (result, EXPECTED, 'bubble sort')
})

test ('bubble sort', async t => {
  const arr = generateArray (10000, 5000)
  console.time('sort')
  bubbleSort (arr)
  console.timeEnd('sort')
  
  const result = isSorted (arr) 
  
  const EXPECTED = true
  
  t.deepEqual (result, EXPECTED, 'bubble sort')
})

test ('bubble sort', async t => {
  const arr = generateArray (10000)
  console.time('sort')
  bubbleSort (arr)
  console.timeEnd('sort')
  
  const result = isSorted (arr) 
  
  const EXPECTED = true
  
  t.deepEqual (result, EXPECTED, 'bubble sort')
})
