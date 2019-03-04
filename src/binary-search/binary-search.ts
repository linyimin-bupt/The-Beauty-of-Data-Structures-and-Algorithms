// 查找target所处数组的索引，若target不存在，直接返回-1
export const bianrySearch = function (data: number[], target: number): number {
  let left  = 0
  let right = data.length - 1
  while (left < right) {
    const mid = Math.floor ((left + right) / 2)
    if (data[mid] === target) {
      return mid
    }
    if (data[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}