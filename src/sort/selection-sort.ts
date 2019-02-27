import { swap } from './util'

export const selectionSort = function<T> (data: T[]): T[] {
  
  for (let i = 0; i < data.length; i++) {
    let min = i
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[min]) {
        min = j
      }
    }
    swap (data, i, min)
  }
  return data
}

