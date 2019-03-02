export const mergeSort = function<T> (data: T[]): T[] {
  __mergeSort (data, 0, data.length - 1)
  return data
}

function merge<T> (data: T[], left: number, mid: number, right: number) {
  const temp = new Array<T> (right - left + 1)
  let l = left
  let r = mid + 1
  let i = 0
  while (l <= mid && r <= right) {
    if (data[l] < data[r]) {
      temp[i++] = data[l++]
      
    } else {
      temp[i++] = data[r++]
    }
  }
  while (l <= mid) {
    temp[i++] = data[l++]
  }
  
  while (r <= right) {
    temp[i++] = data[r++]
  }
  for (let i = left; i <= right; i++ ) {
    data[i] = temp[i - left]
  }
}

function __mergeSort<T> (data: T[], left: number, right: number) {
  if (left >= right) {
    return
  }
  const mid = Math.floor ((left + right) / 2)
  __mergeSort (data, left, mid)
  __mergeSort (data, mid + 1, right)
  merge (data, left, mid, right) 
}