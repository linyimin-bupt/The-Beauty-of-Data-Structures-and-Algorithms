#define MAX_CAPACITY 1 << 30


typedef struct entry *Entry;

struct entry {
  void *key;      // 键
  void *value;    // 值
  Entry next;     // 冲突链表
};

typedef struct hashMap *HashMap;

// 添加元素
typedef void (*Put)(HashMap hashMap, void *key, void *value);

// 获取键对应值函数
typedef void* (*Get)(HashMap hashMap, void *key);

// 删除键值
typedef int (*Remove)(HashMap hashMap, void * key);

// 清空Map函数
typedef void (*Clear)(HashMap hashMap);

// 判断键值是否存在
typedef int (*Has)(HashMap hashMap, void *key);

// HashMap结构
struct hashMap {
  unsigned int size;        // 当前大小
  unsigned int capacity;    // Map容量
  float autoLoad;           // 加载因子
  Entry data;               // 冲突链表数据组
  Put put;                  // 添加
  Get get;                  // 获取
  Remove del;            // 删除
  Clear clear;              // 清空
  Has has;                  // 键值是否存在
  // HashMap oldMap;           // 动态扩容时, 分批完成数据迁移,以避免某次操作时间复杂度过高 
};

HashMap createMap(int capacity, float load);

static void put(HashMap hashMap, void *key, void *value);
static void* get(HashMap hashMap, void *key);
static int del(HashMap hashMap, void *key);
static void clear(HashMap hashMap);
static int has(HashMap hashMap, void *key);
static unsigned int hashCode(void *key, unsigned int capacity);
static int equal(void *key1, void *key2);

