export const quickSort = function<T> (data: T[]): T[] {
  __quickSort(data, 0, data.length - 1)
  return data
}

function __quickSort<T> (data: T[], left: number, right: number) {
  if (left >= right) {
    return
  }
  const pivot = partition (data, left, right)
  __quickSort (data, left, pivot - 1)
  __quickSort (data, pivot + 1, right)
}

function partition<T> (data: T[], left: number, right: number): number {
  const pivot = data[right]
  let i = left
  for (let j = i; j < right; j++) {
    if (data [j] < pivot) {
      swap (data, i, j)
      i++
    }
  }
  swap (data, i, right)
  return i
}

function swap<T> (data: T[], i: number, j: number) {
  const temp = data[i]
  data [i]   = data[j]
  data [j]   = temp
}