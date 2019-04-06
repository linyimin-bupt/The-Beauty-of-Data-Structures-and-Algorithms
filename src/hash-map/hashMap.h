#ifndef __HASHMAP_H__
#define __HASHMAP_H__

#define MAX_CAPACITY 1 << 30
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
typedef int (*Equal) (void* key1, void *key2);

// 添加元素
typedef void (*Put)(void *key, void *value);

// 获取键对应值函数
typedef void* (*Get)(void *key);

// 删除键值
typedef int (*Remove)(void * key);

// 清空Map函数
typedef void (*Clear)();

// 判断键值是否存在
typedef int (*Has)(void *key);

// HashMap结构
typedef struct hashMap {
  unsigned int size;        // 当前大小
  unsigned int capacity;    // Map容量
  HashCode hashcode;        // 哈希函数
  Put put;                  // 添加
  Get get;                  // 获取
  Remove remove;            // 删除
  Clear clear;              // 清空
  Equal equal;              // 是否相等
  Has has;                  // 键值是否存在 
} *HashMap;

HashMap createMap(int capacity);

static unsigned int hashCode(void *key, unsigned int capacity);
static void put(void *key, void *value);
static void* get(void *key);
static int remove(void *key);
static void clear();
static int equal(void *key1, void *key2);
static int has(void *key);

#endif