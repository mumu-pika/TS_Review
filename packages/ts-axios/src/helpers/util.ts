const toString = Object.prototype.toString

// 判断是否是Date类型
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// 判断是否是对象类型, 如果是Array这种数组也会返回true
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// 判断是否是普通对象, 排除掉FormData、ArrayBuffer等类型
export function isPlainObject (val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
