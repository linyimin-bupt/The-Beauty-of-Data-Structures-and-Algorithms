import test     from 'blue-tape'
import { sqrt } from './compute-square-root'

test ('sqrt', async t => {
  const result = sqrt (4)
  const EXPECTED = 2
  t.equal (result, EXPECTED)
})

test ('sqrt', async t => {
  const result = sqrt (3).toString ().slice (0, 8)
  const EXPECTED = '1.732050'
  t.equal (result, EXPECTED)
})