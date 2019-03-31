import test from 'blue-tape'
import { BST } from './binary-search-tree'

const bst = new BST()

test ('insert()', async t => {  
  t.equal (bst.size, 0, 'size = 0')
  bst.insert (12)
  t.equal (bst.size, 1, 'size = 1')
  bst.insert (1)
  bst.insert (10)
  bst.insert (8)
  bst.insert (6)
  bst.insert (3)
  bst.insert (5)
  t.equal (bst.size, 7, 'size = 7')  
})

test ('find()', async t => {
  t.equal (null, bst.find(2))
  t.equal (10, bst.find(1)!.right!.data)
  t.equal (null, bst.find(1)!.left)
  t.equal (8, bst.find(10)!.left!.data)
  t.equal (null, bst.find(10)!.right)
  t.equal (null, bst.find(5)!.left)
  t.equal (null, bst.find(5)!.right)
})

test ('remove()', async t => {
  bst.remove(12)
  t.equal (null, bst.find(12))
  
  t.equal (10, bst.find(1)!.right!.data)
  t.equal (null, bst.find(1)!.left)
  t.equal (8, bst.find(10)!.left!.data)
  t.equal (null, bst.find(10)!.right)
  t.equal (null, bst.find(5)!.left)
  t.equal (null, bst.find(5)!.right)
  
  t.equal (bst.size, 6)
  
  bst.remove(1)
  bst.remove(10)
  bst.remove(8)
  bst.remove(6)
  bst.remove(3)
  bst.remove(5)
  
  bst.insert(13)
  bst.insert(10)
  bst.insert(16)
  bst.insert(9)
  bst.insert(11)

  t.equal (bst.size, 5)
  
  bst.remove (13)
  t.equal (bst.find(13), null)
  t.equal (bst.root!.data, 16)
  t.equal (null, bst.find(9)!.left)
  t.equal (null, bst.find(9)!.right)
  
  bst.remove(10)
  
  t.equal(null, bst.find(11)!.right)
  t.equal(9, bst.find(11)!.left!.data)
})