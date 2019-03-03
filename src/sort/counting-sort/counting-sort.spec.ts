import test               from 'blue-tape'
import { 
  generateArray,
  isSorted,
                        } from '../util'
import { countingSort   } from './counting-sort'

test ('counting sort', async t => {
  const arr = generateArray (1000, 100)
  console.time()
  countingSort (arr)
  console.timeEnd()
  const result= isSorted (arr)
  
  const EXPECTED = true
  
  t.equal (result, EXPECTED, 'counting sort')
})