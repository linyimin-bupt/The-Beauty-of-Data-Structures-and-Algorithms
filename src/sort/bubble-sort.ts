import { swap } from './util'

export const bubbleSort = function<T> (data: T[]): T[] {
  for (let i = 0; i < data.length; i++) {
    for (let j = 1 ; j < (data.length - i); j++) {
      if (data[j - 1] > data[j]) {
        swap (data, j - 1, j)
      }
    }
  }
  return data
}
