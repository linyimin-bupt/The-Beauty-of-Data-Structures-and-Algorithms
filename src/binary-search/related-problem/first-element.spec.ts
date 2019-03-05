import test                     from 'blue-tape'
import { 
  generateArray,
  isSorted,
  generateRangeArray,
                              } from '../../sort/util'
import { BSGetFirstElement    } from './first-element'
import { mergeSort            } from '../../sort/merge-sort/merge-sort-iterator'
import { countingSort         } from '../../sort/counting-sort/counting-sort'

test ('binary search get first element', async t => {
  const arr = generateArray (100000, 0)
  mergeSort (arr)
  if (! isSorted (arr)) {
    throw new Error ('binary search only be used in an order array')
  }
  const result = BSGetFirstElement (arr, 100)
  const EXPECTED = 100
  
  t.equal (result, EXPECTED, 'binary search get first element')
})

test ('binary search get first element', async t => {
  const arr = generateRangeArray (1000000, 100, 200)
  countingSort (arr)
  if (! isSorted (arr)) {
    throw new Error ('binary search only be used in an order array')
  }
  const result = BSGetFirstElement (arr, 100)
  let EXPECTED = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 100) {
      EXPECTED = i
      break
    }
  }
  
  t.equal (result, EXPECTED, 'binary search get first element')
})


