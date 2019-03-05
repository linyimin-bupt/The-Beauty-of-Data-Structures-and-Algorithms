// 查找第一个大于等于给定值的元素
export const BSGetFirstEgElement = function (data: number[], target: number): number {
  let left = 0
  let right = data.length - 1
  while (left <= right) {
    const mid = left + ((right  - left) >> 1)
    if (data[mid] >= target) {
      // 第一个元素
      if (mid === 0 || data[mid - 1] < target) {
        return mid
      }
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}