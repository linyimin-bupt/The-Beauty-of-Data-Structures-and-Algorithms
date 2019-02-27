import test                             from 'blue-tape'
import { 
  generateArray,
  isSorted 
                                      } from './util'
import { shellSort                    } from './shell-sort'
import { insertionSortOptimization    } from './insertion-sort'

test ('insertion sort', async t => {
  const arr = generateArray (100000, 10000)
  console.time('insertion sort')
  insertionSortOptimization (arr)
  console.timeEnd('insertion sort')
  const result = isSorted (arr)
  
  t.equal (result, true, 'shell sort')
})

test ('shell sort', async t => {
  const arr = generateArray (100000, 10000)
  console.time('shell sort')
  shellSort (arr)
  console.timeEnd('shell sort')
  const result = isSorted (arr)
  
  t.equal (result, true, 'shell sort')
})