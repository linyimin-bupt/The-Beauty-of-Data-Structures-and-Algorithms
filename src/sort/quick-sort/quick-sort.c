#include <stdio.h>

void swap (int arr[], int i, int j) {
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 获取基准点在排序后的真实索引
int partition(int arr[], int left, int right) {
  // 取最右端元素作为基准点
  int pivot = left;
  for(int i = left; i <= right; i++) {
    if (arr[right] > arr[i]) {
      swap (arr, i, pivot);
      pivot++;
    }
  }
  swap (arr, pivot, right);
  return pivot;
}

void __qsort(int arr[], int left, int right) {
  if (left >= right) {
    return;
  }
  int pivot = partition(arr, left, right);
  __qsort(arr, left, pivot - 1);
  __qsort(arr, pivot + 1, right);
}
void qsort(int arr[], int size) {
  __qsort(arr, 0, size - 1);
}

// test
int main() {
  int arr[] = {1,4,2,8,6, 12, 10};
  qsort(arr, 7);
  
  for (int i = 0; i < 7; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
  return 0;
}