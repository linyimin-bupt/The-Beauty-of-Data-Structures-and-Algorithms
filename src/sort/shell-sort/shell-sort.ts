export const shellSort = function<T> (data: T[]): T[] {
  let h = 1
  while (h <= (data.length / 3)) {
    h = 3 * h + 1
  }
  
  while (h >= 1) {
    for (let i = h; i < data.length; i++) {
      let j = i
      const value = data[j]
      for (; j >= h; j -= h) {
        if (data[j - h] > value) {
          data[j] = data[j - h]
        } else {
          break
        }
      }
      data[j] = value
    }
    h = Math.floor (h / 3)
  }
  return data
}