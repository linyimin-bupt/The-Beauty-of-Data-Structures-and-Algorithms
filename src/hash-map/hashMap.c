#include <stdio.h>
#include <string.h>
#include "hashMap.h"

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