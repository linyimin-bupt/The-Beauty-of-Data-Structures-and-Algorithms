// 查找最后一个小于等于给定值的元素
export const BSGetLastLeElement = function (data: number[], target: number): number {
  let left = 0
  let right = data.length - 1
  while (left <= right) {
    const mid = left + ((right  - left) >> 1)
    if (data[mid] <= target) {
      // 最后一个元素
      if (mid === data.length - 1 || data[mid + 1] > target) {
        return mid
      }
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}