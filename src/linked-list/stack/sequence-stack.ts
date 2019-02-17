import { Stack } from './stack'

export class SequenceStack<T> implements Stack<T> {
  private _data: T[]
  private _size: number
  private _count: number
  constructor (size: number) {
    this._size = size
    this._count = 0
    this._data = new Array<T>(size)
  }
  
  get size (): number {
    return this._size
  }
  
  get count (): number {
    return this._count
  }
  
  public push (data: T): boolean {
    if (this._count >= this._size) {
      return false
    }
    this._data[this._count++] = data
    return true
  }
  
  public pop (): T | null {
    if (this._count > 0) {
      const data = this._data[--this._count]
      return data
    }
    return null
  }
}