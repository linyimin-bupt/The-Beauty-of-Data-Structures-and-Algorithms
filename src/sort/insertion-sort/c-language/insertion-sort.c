#include<stdio.h>
int *insertionSort(int *arr, int size) {
  for (int j = 1; j < size; j++) {
    for (int i = j;i >= 0; i--) {
      if (arr[i - 1] > arr[i]) {
        int temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

int main() {
  int arr[] = {5, 4, 3, 2, 1};
  insertionSort(arr, 5);
  for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
  }
  return 0;
}