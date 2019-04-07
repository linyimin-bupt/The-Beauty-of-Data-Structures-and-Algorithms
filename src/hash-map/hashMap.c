#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "hashMap.h"

// Returns a power of two size for the given target capacity.
unsigned int tableSizeFor (unsigned int capacity) {
  int n = capacity - 1;
  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  
  return n < 0 ? 1 : n > MAX_CAPACITY ? MAX_CAPACITY : (n + 1);
}

unsigned int hashCode (void *key, unsigned int capacity) {
  char *string = (char *) key;
  int length = strlen(string);
  int hash = 0;
  for (int i = 0; i < length; i++) {
    hash = hash * 31 + string[i];
  }
  // A % B == A & (B - 1) if B is power of 2
  return (hash ^ (hash >> 16)) & (tableSizeFor(capacity) - 1); 
}


int equal(void *key1, void *key2) {
  return strcmp((char*)key1, (char*)key2);
}

void put(HashMap hashMap, void *key, void *value) {
  // whether need to automatic expansion
  // TODO:
  if (hashMap->autoLoad < (float)hashMap->size / hashMap->capacity) {
    printf("TODO automatic expansion\n");
  }
  
  Entry entry   = (Entry) malloc(sizeof (struct entry));
  entry->key    = key;
  entry->value  = value;
  entry->next   = NULL;
  
  unsigned int index = hashCode(key, hashMap->capacity);
  // printf("index = %d\n", index);
  // 没有冲突,直接插入, 为了操作方便,第一个节点作为头指针,不存放任何数据
  if (hashMap->data[index].next == NULL) {
    hashMap->size++;    
    hashMap->data[index].next = entry;
  }else {
    // 产生冲突,并且不存在,直接在冲突链表头部插入
    if (!hashMap->has(hashMap, key)) {
      hashMap->size++;      
      entry->next = hashMap->data[index].next;
      hashMap->data[index].next = entry;
    } else {
      // 覆盖之前的value
      Entry current = hashMap->data[index].next;
      while(current != NULL){
        if (equal(current->key, key) == 0) {
          current->value = value;
          return;
        }
        current = current->next;
      }
    }
  }  
}

int del(HashMap hashMap, void *key) {
  unsigned int index = hashCode(key, hashMap->capacity);
  // 对应链表不为空
  if (hashMap->data[index].next != NULL) {
    Entry current = &hashMap->data[index];
    while (current != NULL && current->next != NULL) {
      if (equal(key, current->next->key) == 0) {
        // 删除节点并释放相应内存
        current->next = current->next->next;
        free(current->next);
        hashMap->size--;
        return 1;
      }
      current = current->next;
    }
  }
  return 0;
}


void *get(HashMap hashMap, void *key) {
  unsigned int index = hashCode(key,hashMap->capacity);
  if (hashMap->data[index].next != NULL) {
    Entry current = hashMap->data[index].next;
    while (current != NULL) {
      if (equal(key, current->key) == 0) {
        return current->value;
      }
      current = current->next;
    }
  }
  return NULL;
}

int has(HashMap hashMap, void *key) {
  unsigned int index = hashCode(key,hashMap->capacity);
  if (hashMap->data[index].next != NULL) {
    Entry current = hashMap->data[index].next;
    while (current != NULL) {
      if (equal(key, current->key) == 0) {
        return 1;
      }
      current = current->next;
    }
  }
  return 0;
}

void clear(HashMap hashMap) {
  // 释放冲突值内存
  for (int i = 0; i < hashMap->capacity; i++) {
    Entry current = hashMap->data[i].next;
    while(current != NULL) {
      Entry temp = current->next;
      free(current);
      current = temp;
    }
  }
  hashMap -> size     = 0;
  hashMap -> capacity = 0;
}

HashMap createMap(int capacity, float load) {
  HashMap hash = (HashMap) malloc(capacity * sizeof (struct hashMap));
  hash->capacity = capacity;
  hash->size     = 0;
  hash->autoLoad = load;
  // hash->oldMap   = NULL;
  hash->data     = (Entry) malloc(capacity * sizeof(struct entry));
  hash->clear    = clear;
  hash->get      = get;
  hash->has      = has;
  hash->put      = put;
  hash->del      = del;
  return hash;
}
