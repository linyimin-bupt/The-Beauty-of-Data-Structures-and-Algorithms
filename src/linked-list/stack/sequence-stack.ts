import { Stack } from './stack'

export class SequenceStack implements Stack<number> {
  private _data: number[]
  private _size: number
  private _count: number
  constructor (size: number) {
    this._size = size
    this._count = 0
    this._data = new Array<number>(size).fill(0)
  }
  
  get size (): number {
    return this._size
  }
  
  get count (): number {
    return this._count
  }
  
  public push (data: number): boolean {
    if (this._count >= this._size) {
      return false
    }
    this._data[this._count++] = data
    return true
  }
  
  public pop (): number | null {
    if (this._count > 0) {
      const data = this._data[--this._count]
      return data
    }
    return null
  }
}