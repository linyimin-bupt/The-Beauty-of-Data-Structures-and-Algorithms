export const insertionSort = function<T> (data: T[]): T[] {
  for (let i = 1; i < data.length; i++) {
    for (let j = i; j > 0; j--) {
      if (data[j] < data[j - 1]) {
        const temp    = data[j - 1]
        data  [j - 1] = data[j]
        data  [j]     = temp
      } else {
        break
      }
    }
  }
  return data
}

export const insertionSortOptimization = function<T> (data: T[]): T[] {
  for (let i = 1; i < data.length; i++) {
    let value = data[i]
    let   j     = i - 1
    for (; j >= 0; j--) {
      if (data[j] > value) {
        data[j + 1] = data[j]
      } else {
        break
      }
    }
    data[j + 1] = value
  }
  return data 
}