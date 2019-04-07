#include<stdio.h>
#include"hashMap.h"

struct point {
  int x;
  int y;
};
int main() {
  
  HashMap map = createMap(100, 0.80);
  map->put(map, "asdfasdf", "asdfasdfds");
  map->put(map, "sasdasd", "asdfasdfds");
  map->put(map, "asdhfgh", "asdfasdfds");
  int a = 345;
  map->put(map, "4545", &a);
  map->put(map, "asdfaasdasdsdf", "asdfasdfds");
  map->put(map, "asdasg", "asdfasdfds");
  map->put(map, "qwefdqeqwe", "asdfasdfds");

  printf("key: 4545, exists: %s\n", map->has(map, "4545") ? "true" : "false");
  printf("4545: %d\n", *(int*)map->get(map, "4545"));
  printf("remove 4545 %s\n", map->del(map, "4545") ? "true" : "false");
  printf("remove 4545 %s\n", map->del(map, "4545") ? "true" : "false");
  printf("key: 4545, exists: %s\n", map->has(map, "4545") ? "true" : "false");
  map->clear(map);
  return 0;
}