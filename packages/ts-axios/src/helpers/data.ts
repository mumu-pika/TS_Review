// transformRequest
// 实现一个工具函数, 对于request的data做一下转换

import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) return JSON.stringify(data)
  return data
}
