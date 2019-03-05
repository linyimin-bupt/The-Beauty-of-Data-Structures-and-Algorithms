export const BSGetLastElement = function (data: number[], target: number): number {
  let left  = 0
  let right = data.length - 1
  
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (data[mid] > target) {
      right = mid - 1
    } else if (data[mid] < target) {
      left = mid + 1
    } else {
      // data[mid] === target时需要进行相应的处理, 不能直接返回
      // mid对应最后一个元素
      if (mid === data.length - 1 || data[mid + 1] !== target) {
        return mid
      } else {
        left = mid + 1
      }
    }
  }
  return -1
}