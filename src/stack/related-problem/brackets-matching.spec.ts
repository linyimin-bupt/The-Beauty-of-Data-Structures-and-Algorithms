import test                 from 'blue-tape'
import { bracketsMatching } from './brackets-matching'

test ('brackets-matching', async t => {
  const brackets = '[[[[[[]'
  
  const result = bracketsMatching (brackets)
  t.equal (result, false, '[[[[[[] is invalid')
  
})

test ('brackets-matching', async t => {
  const brackets = '[]'
  
  const result = bracketsMatching (brackets)
  t.equal (result, true, '[] is valid')
  
})

test ('brackets-matching', async t => {
  const brackets = '[{()()}]'
  
  const result = bracketsMatching (brackets)
  t.equal (result, true, '[{()()}] is valid')
  
})