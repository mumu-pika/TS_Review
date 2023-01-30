// TS中常用内置工具类

// Readonly
// 生成一个新类型，T 中的 K 属性是只读的，K 属性是不可修改的。
/* 
  type Readonly<T> = {
    [P in keyof T]-?: T[P]
  }
*/

interface ReadonlyFoo {
  name: string
  age: number
}

// type ReadonlyBar = Readonly<ReadonlyFoo>

/*
  相当于
  type ReadonlyBar = {
    readonly name: string
    readonly age: number
  }
*/
