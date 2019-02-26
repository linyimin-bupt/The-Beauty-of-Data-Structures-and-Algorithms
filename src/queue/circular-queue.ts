import { Queue } from './queue'

/**
 * 循环队列的实现:
 * 普通顺序队列,在大量的出队入队之后,需要进行相应的数据搬移,存在一定的性能问题
 * 使用循环队列之后,将不存在数据的搬移问题
 */

export class CircularQueue<T> implements Queue<T> {
  private data: T[]
  private _size: number
  private _count: number
  private head: number
  private tail: number
  
  constructor (size: number) {
    this._size  = size
    this._count = 0
    this.head   = 0
    this.data   = new Array<T> (this._size)
    this.tail   = 0
  }
  
  get size (): number {
    return this._size
  }
  
  get count (): number {
    return this._count
  }
  
  public enqueue (data: T): boolean {
    // 队列已满
    if ((this.tail + 1) % this._size === this.head) {
      return false
    }
    this.data[this.tail] = data
    this.tail = (this.tail + 1) % this._size
    this._count++
    return false
  }
  
  public dequeue (): T | null {
    if (this.head === this.tail) {
      return null
    }
    this._count--
    const data = this.data[this.head]
    this.head = (this.head + 1) % this._size
    return data
  }
}