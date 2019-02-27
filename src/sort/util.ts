/**
 * 判断一个数组是否从小到大进行排序
 * @param data 
 */
export const isSorted = function<T> (data: T[]): boolean {
  let flag = true
  for (let i = 1; i < data.length; i++) {
    if (data[i - 1] > data[i]) {
      flag = false
      break
    }
  }
  return flag
}

/**
 * 生成指定长度的数组
 * @param n 数组的长度
 * @param swap 交换次数, swap = 0时, 为有序数组
 */
export const generateArray = function (n: number, swapNum: number = 0): number[] {
  const data = new Array<number> (n)
  for (let i = 0; i < n; i ++) {
    data[i] = i
  }
  
  for (let i = 0; i < swapNum; i++) {
    swap (data, Math.floor(Math.random () * n), Math.floor(Math.random () * n))
  }
  return data
} 

export const swap = function<T> (data: T[], i: number, j: number) {
  const temp = data[i]
  data [i]   = data[j]
  data [j]   = temp
}