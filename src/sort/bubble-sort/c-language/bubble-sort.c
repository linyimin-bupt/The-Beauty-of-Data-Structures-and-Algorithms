#include<stdio.h>

int *bubbleSort(int *arr, int size) {
  for(int i = 0; i < size; i++) {
    int flag = 0;
    for(int j = 1; j < size - i; j++) {
      if (arr[j - 1] > arr[j]) {
        int temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        flag = 1;
      }
    }
    if (!flag) {
      return arr;
    }
  }
  return arr;
}

int main() {
  int arr[] = {5, 4, 3, 2, 1};
  bubbleSort(arr, 5);
  for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
  }
  return 0;
}