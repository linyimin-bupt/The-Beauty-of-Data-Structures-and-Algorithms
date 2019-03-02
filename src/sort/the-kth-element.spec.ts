import test               from 'blue-tape'
import { generateArray  } from './util'
import { getElement     } from './the-kth-element'

test ('get kth element', async t => {
  const arr = generateArray (1000, 100)
  console.time()
  const result = getElement (arr, 10)
  console.timeEnd()
  const EXPECTED = 10 -1
  
  t.equal (result, EXPECTED, 'kth element')
})

test ('get kth element', async t => {
  const arr = generateArray (100000, 1000)
  console.time()
  const result = getElement (arr, 50000)
  console.timeEnd()
  const EXPECTED = 50000 -1
  
  t.equal (result, EXPECTED, 'kth element')
})