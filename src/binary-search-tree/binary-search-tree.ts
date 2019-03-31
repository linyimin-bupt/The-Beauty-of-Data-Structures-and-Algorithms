
class Node {
  public data : number
  public left : Node | null
  public right: Node | null
  
  constructor (data: number) {
    this.data  = data
    this.left  = null
    this.right = null
  }
}
export class BST {
  public  root : Node | null
  private _size: number
  
  constructor () {
    this.root = null
    this._size = 0  
  }
  
  get size (): number {
    return this._size
  }
  
  public isEmpty (): boolean {
    return this._size === 0
  }
  
  public insert (data: number) {
    const node = new Node(data)
    this._size++
    if (!this.root) {
      this.root = node 
      return
    }
    let p = this.root
    while (p != null) {
      if (p.data <= data) {
        if (p.right === null) {
          p.right = node
          return
        }
        p = p.right
      } else {
        if (p.left === null) {
          p.left = node
          return
        }
        p = p.left
      }
    }
  }
  
  public find (data: number): Node | null {
    let p = this.root
    while (p != null) {
      if (data === p.data) {
        return p
      }
      if (data > p.data) {
        p = p.right
      } else {
        p = p.left
      }
    }
    
    return null
  }
  
  public remove (data: number) {
    if (! this.root) {
      return
    }
    let target: Node | null  = this.root  // 表示要删除的节点
    let pTarget: Node | null = null       // 表示要删除节点的父节点
    while (target != null && target.data != data) {
      pTarget = target
      if (target.data < data) {
        target = target.right
      } else {
        target = target.left
      }
    }
    // 删除的节点不存在
    if (!target) {
      return
    }
    this._size--
    // 如果要删除的节点存在左右两个孩子节点
    if (target.left && target.right) {
      // 找到要删除节点右子树的最小值
      pTarget = target
      let targetMin  = target.right
      while (targetMin.left !== null) {
        pTarget = targetMin
        targetMin  = targetMin.left
      }
      // 替换值
      target.data    = targetMin.data
      
      target = targetMin
    }
    let child: Node | null = null
    // 要删除的节点只有左节点
    if (target.left) {
      child = target.left
    } else if (target.right) {
      child = target.right
    }
    
    // 要删除的节点是跟节点
    if (pTarget === null) {
      this.root = child
    } else if (pTarget.left === target){
      pTarget.left = child
    } else {
      pTarget.right = child
    }
  }
  
  // 二叉树的高度
  public height (node: Node | null): number {
    if (node === null) {
      return 0
    }
    return Math.max(this.height(node.left), this.height(node.right)) + 1
  }
  public pre (node: Node | null) {
    if (node === null) {
      return
    }
    this.pre(node.left)
    console.log(node.data)
    this.pre(node.right)
  }
}