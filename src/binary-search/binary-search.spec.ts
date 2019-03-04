import test               from 'blue-tape'
import { generateArray  } from '../sort/util'
import { bianrySearch   } from './binary-search'

test ('binary search', async t => {
  const arr = generateArray (100000, 0)
  const result = bianrySearch (arr, 1000)
  
  const EXPECTED = 1000
  
  t.equal (result, EXPECTED, 'binary search')
})

test ('binary search', async t => {
  const arr = generateArray (100000, 0)
  const result = bianrySearch (arr, 1000000)
  
  const EXPECTED = -1
  
  t.equal (result, EXPECTED, 'binary search')
})