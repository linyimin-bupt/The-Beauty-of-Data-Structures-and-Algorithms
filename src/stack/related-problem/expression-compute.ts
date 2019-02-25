import { DynamicStack } from '../dynamic-stack'

/**
 * 计算四则表达式
 * @param expression 
 */
export const computeExp = function (expression: string): number {
  expression        = expression.replace(/ /g, '')
  console.log(expression)
  const data        = new DynamicStack<number> ()
  const operator    = new DynamicStack<string> ()
  let   valueString = ''
  let   value       = 0
  for (let i = 0; i < expression.length; i++) {
    if (isNumber(expression[i]) || expression[i] === '.') {
      valueString += expression[i]
      value = valueString.indexOf('.') > -1 ? parseFloat(valueString) : parseInt(valueString)
      continue
    }
    valueString = ''
    data.push(value)
    const currentOp = expression[i]
    let lastOp = operator.top()
    while (lastOp && compare(lastOp, currentOp)) {
      const right = data.pop()
      const left  = data.pop()
      if (left === null || right === null) {
        throw new Error('no a valid expression')
      }
      const result = compute (left, lastOp, right)
      data.push (result)
      operator.pop()
      lastOp = operator.top()
    }
    operator.push (currentOp)
    
  }
  data.push(value)
  while (operator.top()) {
    const right = data.pop()
    const left  = data.pop()
    const op    = operator.pop()!
    if (left === null || right === null) {
      throw new Error('no a valid expression')
    }
    const result = compute (left, op, right)
    data.push (result)
  }
  return data.top()!
}
/**
 * if op1 >= op2 return true
 * else return false
 * @param op1 
 * @param op2 
 */
function compare (op1: string, op2: string): boolean {
  switch (op1) {
    case '+':
    case '-':
      if (op2 === '-' || op2 === '+') {
        return true
      }
      if (op2 === '*' || op2 === '/') {
        return false
      }
    case '*':
    case '/':
      return true
    default:
      throw new Error('no support type')
  }
}

function compute (left: number, op: string, right: number): number {
  switch (op) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return left / right
    default:
      throw new Error('no support operator')
  }
}

function isNumber (data: string): boolean {
  const numberReg = /\d/
  return numberReg.test(data)
}
