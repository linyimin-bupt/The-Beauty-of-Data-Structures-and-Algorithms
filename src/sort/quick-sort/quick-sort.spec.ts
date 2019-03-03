import test             from 'blue-tape'
import { 
  generateArray,
  isSorted, 
                      } from '../util'
import { quickSort    } from './quick-sort'

test ('quick sort', async t => {
  const arr = generateArray (100000, 10000)
  
  console.time()
  quickSort(arr)
  console.timeEnd ()
  const result = isSorted (arr)
  const EXPECTED = true
  t.equal (result, EXPECTED, 'quick sort')
})

test ('quick sort', async t => {
  const arr = generateArray (100000, 100)
  
  console.time()
  quickSort(arr)
  console.timeEnd ()
  const result = isSorted (arr)
  const EXPECTED = true
  t.equal (result, EXPECTED, 'quick sort')
})