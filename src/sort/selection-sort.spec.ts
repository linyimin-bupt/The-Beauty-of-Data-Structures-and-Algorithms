import test               from 'blue-tape'
import { 
  generateArray,
  isSorted
                        } from './util'
import { selectionSort  } from './selection-sort'

test ('selection sort', async t => {
  const arr = generateArray (10000, 100)
  
  console.time()
  selectionSort (arr)
  console.timeEnd()
  
  const result = isSorted (arr)
  
  t.equal (result, true, 'selection sort')
})