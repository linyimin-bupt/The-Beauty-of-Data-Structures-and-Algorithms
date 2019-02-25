import { Stack } from './stack'

export class DynamicStack<T> implements Stack<T> {
  private data: T[]
  private _size: number
  private _count: number
  private _top: number
  
  constructor (size: number = 16) {
    this._size  = size
    this._count = 0
    this._top    = 0
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
    this.data[this._top] = data
    this._top++
    this._count++
    return true
  }
  
  public pop (): T | null {
    if (this._top > 0) {
      this._count--
      return this.data[--this._top]
    }
    return null
  }
  
  public top (): T | null {
    if (this._top > 0) {
      return this.data[this._top - 1]
    }
    return null
  }
}