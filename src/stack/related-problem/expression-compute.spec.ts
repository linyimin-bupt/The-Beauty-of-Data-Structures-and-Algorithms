import  test          from 'blue-tape'
import { computeExp } from './expression-compute'

test ('expression compute', async t => {
  const expression = '1 + 3 / 3'
  const result = computeExp (expression)
  
  t.equal (result, 2, '1 + 3 / 3 = 2')
})

test ('expression compute', async t => {
  const expression = '1 + 6 / 3'
  const result = computeExp (expression)
  
  t.equal (result, 3, '1+6/3')
})

test ('expression compute', async t => {
  const expression = '34 + 13 * 9 + 44 - 12 / 3'
  const result = computeExp (expression)
  
  t.equal (result, 191, '34 + 13 * 9 + 44 - 12 / 3')
})

test ('expression compute', async t => {
  const expression = '34.1 + 13 * 9 + 44 - 12 / 3'
  const result = computeExp (expression)
  
  t.equal (result, 191.1, '34.1 + 13 * 9 + 44 - 12 / 3')
})

test ('expression compute', async t => {
  const expression = '(34 - 14) * 9 + 44 - 12 / 3'
  const result = computeExp (expression)
  
  t.equal (result, 220, '(34 - 14) * 9 + 44 - 12 / 3')
})