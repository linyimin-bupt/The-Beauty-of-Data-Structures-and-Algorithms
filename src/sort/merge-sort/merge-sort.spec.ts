import test           from 'blue-tape'
import { 
  generateArray,
  isSorted,
                    } from '../util'
import { mergeSort  } from './merge-sort'

test ('merge sort', async t => {
  const arr = generateArray (100000, 10000)
  console.time('merge sort')
  mergeSort (arr)
  console.timeEnd ('merge sort')
  
  const result = isSorted (arr)
  const EXPECTED = true
  t.equal (result, EXPECTED, 'merge sort')
})