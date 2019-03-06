import test                       from 'blue-tape'
import { findMedianSortedArrays } from './leetcode-4'

test ('find median sorted arrays', async t => {
  const arr1 = [1, 3]
  const arr2 = [2]
  const result = findMedianSortedArrays (arr1, arr2)
  const EXPECTED = 2
  t.equal (result, EXPECTED, 'find median sorted arrays')
})

test ('find median sorted arrays', async t => {
  const arr1 = [1, 2]
  const arr2 = [3, 4]
  const result = findMedianSortedArrays (arr1, arr2)
  const EXPECTED = 2.5
  t.equal (result, EXPECTED, 'find median sorted arrays')
})