import test           from 'blue-tape'
import { 
  generateArray,
  isSorted,
                    } from '../util'
import { mergeSort  } from './merge-sort-iterator'

test ('merge sort implements with iterator', async t => {
  const arr = generateArray (100000, 10000)
  console.time('merge sort implements with iterator')
  mergeSort (arr)
  console.timeEnd ('merge sort implements with iterator')
  
  const result = isSorted (arr)
  const EXPECTED = true
  t.equal (result, EXPECTED, 'merge sort implements with iterator')
})
