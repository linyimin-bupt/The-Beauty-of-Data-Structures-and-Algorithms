class Node {
  data: any
  next: Node | null
  
  constructor (data: any) {
    this.data = data
    this.next = null
  }
}
export class SinglyLinkedList {
  private _head: Node
  private _tail: Node
  private _size: number
  constructor () {
    this._head = new Node(undefined)
    this._tail = this._head 
    this._size = 0
  }
  
  get head (): Node {
    return this._head
  }
  
  get tail (): Node {
    return this._tail
  }
  
  get size (): number {
    return this._size
  }
  
  public isEmpty () {
    // return this._size === 0
    return this._head.next === null
  }
  
  public insert (data: any) {
    const node = new Node(data)
    // 链表为空
    if (!this._head.next) {
      this._head.next = node
      this._tail = node
    } else {
      node.next       = this._head.next
      this._head.next = node
    }
    this._size++
  }
  
  /**
   * 找出值为data的节点
   * @param data 
   */
  public find (data: any): Node | null {
    let p = this._head.next
    while (p != null) {
      if (p.data === data) {
        return p
      }
      p = p.next
    }
    return null
  }
  
  /**
   * 找出值为data的节点所在链表中的索引,如果不存在返回-1
   * @param data 
   */
  public findIndex (data: any): number {
    let index = 0
    let p = this._head.next
    while (p != null) {
      if (p.data === data) {
        return index
      }
      index++
      p = p.next
    }
    return -1
  }
  public delete (data: any) {
    let p = this._head.next
    // 链表中只存在一个节点
    if (p && p.data === data) {
      this._head.next = null
      this._tail = this._head
      this._size--
    } else {
      while (p && p.next) {
        if (p.next.data === data) {
          p.next = p.next.next
          this._size--
          return
        }
        p = p.next
      }
    }
  }
  
  public deleteTail () {
    let p = this._head.next
    if (!p) {
      return
    }
    if (p.next === this._tail) {
      this._head.next = null
      this._tail      = this._head
      this._size--
      return
    }
    while(p && p.next != this._tail) {
      p = p.next
    }
    this._tail = p!
    this._tail.next = null
    this._size--
  }
  
  public show (): string {
    let result = ''
    let p = this._head.next
    while (p != null) {
      result += p.data + ' '
      p       = p.next
    }
    return result
  }
}