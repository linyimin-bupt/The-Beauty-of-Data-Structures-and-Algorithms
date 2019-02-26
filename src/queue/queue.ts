export interface Queue<T> {
  enqueue (data: T): boolean
  dequeue (): T | null
}