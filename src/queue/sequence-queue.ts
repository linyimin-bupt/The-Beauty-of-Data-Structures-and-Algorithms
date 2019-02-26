import { Queue } from './queue'

export class SequenceQueue<T> implements Queue<T> {
  private data: T[]
  private _size: number
  private _count: number
  private head: number
  private tail: number
  
  constructor (size: number) {
    this._size = size
    this._count = 0
    this.head = 0
    this.tail = 0
    
    this.data = new Array<T>(this._size)
  }
  
  get size (): number {
    return this._size
  }
  
  get count (): number {
    return this._count
  }
  
  /**
   * 批量移动数据
   * @param data 
   */
  public enqueue (data: T): boolean {
    // 队列已满, 不能插入新的数据
    if (this._count === this._size) {
      return false
    }
    // 需要批量移动数据
    if (this.tail === this._size) {
      for (let i = this.head; i < this.tail; i++) {
        this.data[i - this.head] = this.data[i]
      }
      this.head = 0
      this.tail = this.tail - this.head
    }
    this.data[this.tail] = data
    this.tail++
    this._count++
    return true
  }
  
  public dequeue (): T | null {
    if (this._count === 0) {
      return null
    }
    this._count--
    return this.data[this.head ++]
  }
}