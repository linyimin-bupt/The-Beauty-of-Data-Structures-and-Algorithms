#ifndef __HASHMAP_H__
#define __HASHMAP_H__

typedef struct entry
{
  void *key;      // 键
  void *value;    // 值
  Entry next;     // 冲突链表
} *Entry;

typedef struct hashMap *HashMap;
// 定义函数类型

// 哈希函数类型
typedef int (*HashCode)(HashMap hashMap, void* key);

// 判断两个键值是否相等
#endif