import { Stack } from './stack'

export class DynamicStack<T> implements Stack<T> {
  private data: T[]
  private _size: number
  private _count: number
  private top: number
  
  constructor (size: number) {
    this._size  = size
    this._count = 0
    this.top    = 0
    this.data = new Array<T>(size)
  }
  
  get size (): number {
    return this._size
  }
  
  get count (): number {
    return this._count
  }
  
  public push (data: T):  boolean {
    if (this._count === this._size) {
      this._size *= 2
      const temp = new Array<T>(this._size * 2)
      for (let i = 0; i < this.data.length; i++) {
        temp[i] = this.data[i]
      }
      
      this.data = temp
    }
    this.data[this.top] = data
    this.top++
    this._count++
    return true
  }
  
  public pop (): T | null {
    if (this.top > 0) {
      this._count--
      return this.data[--this.top]
    }
    return null
  }
}