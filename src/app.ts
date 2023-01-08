// TS中装饰器模式

// Decorators 装饰器
/* 
  装饰器本质上一种特殊的函数被应用在类上。
  应用装饰器其实很像是组合一系列函数，类似于高阶函数和类。通过装饰器
  可以轻松实现代理模式来使得代码更加简洁以及实现其他一些有趣的能力。

  执行
  装饰器只在解释执行时应用一次

  如果被用于类上，装饰器会在类被定义时候执行，
  而不是在实例化时候执行
*/

// 装饰器的参数多少取决于你在哪里使用装饰器

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator')
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

class Product {
  // 我们可以将装饰器添加给属性
  // 会在类定义的时候去执行
  @Log
  title: string
  private _price: number
  constructor(title: string, price: number) {
    this.title = title
    this._price = price
  }

  // 这里添加装饰器给类访问器
  @Log2
  set price(val: number) {
    if (val > 0) this._price = val
    else throw new Error('Invalid price - it should be positive!')
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax)
  }
}
