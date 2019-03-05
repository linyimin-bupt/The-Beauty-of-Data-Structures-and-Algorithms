import test                     from 'blue-tape'
import { circularSortedSearch } from './circular-sorted'

test ('circular sorted array binary search', async t => {
 const arr = [4, 5, 6, 1, 2, 3]
  const result = circularSortedSearch (arr, 7)
  const EXPECTED = -1
  
  t.equal (result, EXPECTED, 'circular sorted array binary search')
})

test ('circular sorted array binary search', async t => {
  const arr = [4, 5, 6, 1, 2, 3]
  const result = circularSortedSearch (arr, 6)
  let EXPECTED = 2
  t.equal (result, EXPECTED, 'circular sorted array binary search')
})

test ('circular sorted array binary search', async t => {
  const arr = [4, 5, 6, 1, 3, 3]
  const result = circularSortedSearch (arr, 6)
  let EXPECTED = 2
  t.equal (result, EXPECTED, 'circular sorted array binary search')
})


