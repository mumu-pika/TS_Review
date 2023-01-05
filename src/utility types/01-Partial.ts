// TS中常用内置工具类

// Partial
// 生成一个新类型，该类型与 T 拥有相同的属性，但是所有属性皆为可选项
/*
  type Partial<T> = {
    [P in keyof T]?: T[P]
  }
*/

interface foo {
  name: string
  age: number
}

type bar = Partial<foo>

// 上面使用Partial相当于
// type bar = {
//   name?: string
//   age?: number
// }