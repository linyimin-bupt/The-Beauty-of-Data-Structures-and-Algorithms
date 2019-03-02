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