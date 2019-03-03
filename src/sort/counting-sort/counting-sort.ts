export const countingSort = function (data: number[]): number[] {
  // 获取待排序列的最大最小值
  let min = data[0]
  let max = data[0]
  for (let i = 0; i < data.length; i++) {
    if (data[i] > max) {
      max = data[i]
    }
    if (data[i] < min) {
      min = data[i]
    }
  }
  // 计算每个元素出现的次数
  const range = max - min + 1
  const countArr = new Array<number> (range)
  for (let i = 0; i < data.length; i++) {
    countArr[data[i] - min]++
  }

  // 计算小于等于i出现的次数,并存储在countArr[i]中
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] = countArr[i - 1] + countArr[i]
  }
  // 遍历待排序列,确定每个元素在排序后所在序列的索引
  const temp = new Array<number> (data.length)
  for (let i = data.length - 1; i >= 0; i--) {
    const index = countArr[data[i] - min] - 1
    countArr[data[i] - min]--
    temp[index] = data[i]    
  }
  
  for (let i = 0; i < data.length; i++) {
    data[i] = temp[i]
  }
  
  return data
}