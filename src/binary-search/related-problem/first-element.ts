export const BSGetFirstElement = function (data: number[], target: number): number {
  let left  = 0
  let right = data.length - 1
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (data[mid] > target) {
      right = mid - 1
    } else if (data[mid] < target) {
      left = mid + 1
    } else {
      // data[mid] === target时需要进行相关的判断处理不能直接返回
      // 已经是第一个
      if (mid === 0 || data[mid - 1] !== target) {
        return mid
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}