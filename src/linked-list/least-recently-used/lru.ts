import { SinglyLinkedList } from '../singly-linked-list/singly-linked-list'
export class LRU {
  private _list: SinglyLinkedList
  // 指定缓存的个数
  private _size: number
  // 已经缓存的个数
  private _count: number
  
  constructor (list: SinglyLinkedList, size: number) {
    this._list  = list
    this._size  = size
    this._count = 0
  }
  
  get size  (): number {
    return this._size
  }
  
  get count (): number {
    return this._count
  }
  
  public set (data: any) {
    if (this._count >= this._size) {
      console.log('remove least recently used data')
    }
  }
  
  public get (data: any): any {
    const node = this._list.find(data)
    if (! node) {
      return undefined
    }
    data = 
    return node.data
    
  }
}