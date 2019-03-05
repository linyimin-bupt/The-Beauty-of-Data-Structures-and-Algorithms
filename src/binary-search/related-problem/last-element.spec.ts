import test                     from 'blue-tape'
import { 
  generateArray,
  isSorted,
  generateRangeArray,
                              } from '../../sort/util'
import { mergeSort            } from '../../sort/merge-sort/merge-sort-iterator'
import { countingSort         } from '../../sort/counting-sort/counting-sort'
import { BSGetLastElement     } from './last-element'

test ('binary search get last element', async t => {
  const arr = generateArray (100000, 0)
  mergeSort (arr)
  if (! isSorted (arr)) {
    throw new Error ('binary search only be used in an order array')
  }
  const result = BSGetLastElement (arr, 100)
  const EXPECTED = 100
  
  t.equal (result, EXPECTED, 'binary search get last element')
})

test ('binary search get last element', async t => {
  const arr = generateRangeArray (1000000, 100, 200)
  countingSort (arr)
  if (! isSorted (arr)) {
    throw new Error ('binary search only be used in an order array')
  }
  const result = BSGetLastElement (arr, 100)
  let EXPECTED = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 100) {
      EXPECTED = i
      break
    }
  }
  
  t.equal (result, EXPECTED, 'binary search get last element')
})


