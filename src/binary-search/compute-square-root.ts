export const sqrt = function (data: number): number {
  let root = 0
  for (root = 0; root <= (data >> 1); root++) {
    if (root * root === data) {
      return root
    }
    if ((root + 1) * (root + 1) === data) {
      return root + 1
    }
    if (root * root < data && (root + 1) * (root + 1) > data) {
      break
    }
  }
  let left  = root
  let right = root + 1
  let mid = left + (right - left) / 2
  while (abs(mid * mid - data) > 0.000001) {
    if (mid * mid > data) {
      right = mid
    } else {
      left = mid
    }
    mid = left + (right - left) / 2
  }
  return mid
}

function abs (data: number): number {
  if (data < 0) {
    return -data
  }
  return data
}