import test                         from 'blue-tape'
import { generateArray, isSorted  } from '../util'
import {
  insertionSort,
  insertionSortOptimization            
                                  } from './insertion-sort'
test ('insertion sort', async t => {
  const arr = generateArray (100000, 10000)
  console.time('insertion sort')
  insertionSort (arr)
  console.timeEnd('insertion sort')
  
  const result = isSorted (arr)
  
  const EXPECTED = true
  t.equal (result, EXPECTED)
})

test ('insertion sort optimization', async t => {
  const arr = generateArray (100000, 10000)
  console.time('insertion sort')
  insertionSortOptimization (arr)
  console.timeEnd('insertion sort')
  
  const result = isSorted (arr)
  
  const EXPECTED = true
  t.equal (result, EXPECTED)
})