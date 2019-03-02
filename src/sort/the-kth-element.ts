export const getElement = function<T> (data: T[], kth: number): T {
  for (let i =  0; i < kth; i++) {
    let min = i
    for (let j = i; j < data.length; j++) {
      if (data[j] < data[min]) {
        min = j
      }
    }
    swap (data, i, min)
  }  
  return data[kth - 1]
}

function swap<T> (data: T[], i: number, j: number) {
  const temp = data[i]
  data [i]   = data[j]
  data [j]   = temp
}

export const getElementRecursive = function<T> (data: T[], kth: number): T {
  if (kth < 0 || kth > data.length) {
    throw new Error('kth out of range')
  }
  const pivot = quickFind (data, 0, data.length - 1, kth)
  return data[pivot]
}

function quickFind<T> (data: T[], left: number, right: number, kth: number): number {
  const pivot = partition (data, left, right)
  if (pivot + 1 === kth) {
    return pivot
  } else if (pivot + 1 < kth) {
    return quickFind (data, pivot + 1, right, kth)
  }
  return quickFind (data, left, pivot - 1, kth)    
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