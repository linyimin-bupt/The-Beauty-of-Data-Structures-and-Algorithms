export const mergeSort = function <T> (data: T[]): T[] {
  for (let size = 1; size < data.length; size = size * 2) {
    for (let i = 0; i < data.length; i += 2 * size) {
      const left  = i
      const mid   = i + size
      const right = i + size + size -1
      if (mid >= data.length) {
        break
      }
      merge(data, left, mid, (data.length - 1 > right ? right : data.length - 1))
    }
  }
  return data
}

function merge<T> (data: T[], left: number, mid: number, right: number) {
  const temp = new Array<T> (right - left + 1)
  let l    = left
  let r    = mid
  let   i    = 0
  while (l < mid && r <= right) {
    if (data[l] <= data[r]) {
      temp[i++] = data[l++]
    } else {
      temp[i++] = data[r++]
    }
  }
  
  while (l < mid) {
    temp[i++] = data[l++]
  }
  while (r <= right) {
    temp[i++] = data[r++]
  }
  
  for (let i = left; i <= right; i++) {
    data[i] = temp[i - left]
  }
}