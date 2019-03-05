export const circularSortedSearch = function (data: number[], target: number): number {
  let left  = 0
  let right = data.length - 1
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (data[mid] === target) {
      return mid
    }
    // 左半部分为有序部分
    if (data[mid] >= data[left]) {
      if (data[left] <= target && target < data[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      // 右半部分为有序部分
      if (data[mid] < target && data[right] >= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}