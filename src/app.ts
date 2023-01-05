// TS中装饰器模式

// Decorators 装饰器



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
