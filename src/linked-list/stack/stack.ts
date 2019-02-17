export interface Stack<T> {
  push (data: T): boolean
  pop  ()       : T | null
}