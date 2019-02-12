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
  
  get list (): SinglyLinkedList {
    return this._list
  }
  get size  (): number {
    return this._size
  }
  
  get count (): number {
    return this._count
  }
  
  /**
   * - 如果LRU缓存已满,则删除尾节点,然后在链表头部插入新节点
   * - 如果LRU缓存未满,则直接在链表头部插入新节点
   * - 如果元素已存在,直接设为最新的访问节点
   * @param data 
   */
  public set (data: any) {
    if (this._count >= this._size || this._list.find(data)) {
      this._list.deleteTail()
      this._count--
    }
    this._list.insert(data)
    this._count++
  }
  
  /**
   * 返回访问的元素
   * 并将访问的元素设为最新访问元素,移到链表头部
   * @param data 
   */
  public get (data: any): any {
    const node = this._list.find(data)
    if (!node) {
      return undefined
    }
    data = node.data
    this._list.delete(data)
    this._list.insert(data)
    return node.data
  }
}