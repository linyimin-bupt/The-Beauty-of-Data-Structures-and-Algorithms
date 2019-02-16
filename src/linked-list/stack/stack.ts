export interface Stack<T> {
  size ()       : number
  push (data: T): boolean
  pop  ()       : T | null
}