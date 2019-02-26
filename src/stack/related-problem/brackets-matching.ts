import { DynamicStack } from '../dynamic-stack'
const SYMBOL = {
  ')': '(',
  '}': '{',
  ']': '[',
  '>': '<',
}
export const bracketsMatching = function (brackets: string): boolean {
  const left  = new DynamicStack<string>()
  for (let i = 0; i < brackets.length; i++) {
    if (isLeft (brackets[i])) {
      left.push (brackets[i])
    } else {
      const leftBracket = left.pop()
      if (leftBracket && SYMBOL[brackets[i] as ')' | '}' | ']' | '>'] === leftBracket) {
        continue
      }
      return false
    }
  }
  if (left.count > 0) {
    return false
  }
  return true
}

function isLeft (bracket: string): boolean {
  switch (bracket) {
    case '(':
    case '{':
    case '[':
    case '<':
      return true
    default: 
      return false
  }
} 