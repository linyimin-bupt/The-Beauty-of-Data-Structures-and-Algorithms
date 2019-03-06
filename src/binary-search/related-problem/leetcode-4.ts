export const findMedianSortedArrays = function (arr1: number[], arr2: number[]): number {
  let m = arr1.length
  let n = arr2.length
  // 保证n >= m
  if (m > n) {
    const tempArr = arr1
    arr1 = arr2
    arr2 = tempArr
    m = arr1.length
    n = arr2.length
  }
  let   imin = 0
  let   imax = m
  const half = (m + n + 1) >> 1
  while (imin <= imax) {
    let i = imin + ((imax - imin) >> 1)
    let j = half - i
    // arr1[i] 过小,需要增大
    if (i < imax && arr1[i] < arr2[j - 1]) {
      imin = i + 1
    } else if (i > imin && arr1[i - 1] > arr2[j] ) {
      // arr1[i] 多大需要减小
      imax = i - 1
    } else {
      // 符合条件
      let maxLeft = 0
      if (i === 0) {
        maxLeft = arr2[j - 1]
      } else if (j === 0) {
        maxLeft = arr1[i - 1]
      } else {
        maxLeft = Math.max (arr1[i - 1], arr2[j - 1])
      }
      if ((n + m) % 2 === 1) {
        return maxLeft
      }
      let minRight = 0
      if (i === m) {
        minRight = arr2[j]
      } else if (j === n) {
        minRight = arr1[i]
      } else {
        minRight = Math.min (arr1[i], arr2[j])
      }
      return (minRight + maxLeft) / 2
    }
  }
  return 0.0
}