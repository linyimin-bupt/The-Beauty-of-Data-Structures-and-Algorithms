
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
  private root : Node | null
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
      if (p.data >= data) {
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
    
  }
}