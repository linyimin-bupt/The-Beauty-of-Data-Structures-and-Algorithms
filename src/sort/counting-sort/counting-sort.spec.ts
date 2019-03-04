import test               from 'blue-tape'
import { 
  generateArray,
  isSorted,
  generateRangeArray,
                        } from '../util'
import { countingSort   } from './counting-sort'
import { quickSort      } from '../quick-sort/quick-sort'

test ('counting sort', async t => {
  const arr = generateArray (1000, 100)
  console.time()
  countingSort (arr)
  console.timeEnd()
  const result= isSorted (arr)
  
  const EXPECTED = true
  
  t.equal (result, EXPECTED, 'counting sort')
})

test ('counting sort', async t => {
  const arr = generateRangeArray (1000000, 20, 100, 50000)
  console.time()
  countingSort (arr)
  console.timeEnd()
  const result= isSorted (arr)
  
  const EXPECTED = true
  
  t.equal (result, EXPECTED, 'counting sort')
})

test ('counting sort', async t => {
  const arr = generateRangeArray (1000000, 20, 100, 50000)
  console.time()
  quickSort (arr)
  console.timeEnd()
  const result= isSorted (arr)
  
  const EXPECTED = true
  
  t.equal (result, EXPECTED, 'quick sort')
})