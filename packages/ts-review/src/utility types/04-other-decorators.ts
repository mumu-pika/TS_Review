// TS中装饰器模式

// Decorators 装饰器
/* 
  这些装饰器允许我们在后面在一个类被定义的时候
  做一些额外的设置工作；装饰器不是事件监听器，而是
  在幕后调整和编辑一些东西、

*/
// 创建一个属性装饰器
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator')
  console.log(target, propertyName)
}

// 创建一个属性访问器的装饰器
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// 创建一个属性方法的装饰器
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// 创建一个参数的装饰器
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator')
  console.log(target)
  console.log(name)
  console.log(position)
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

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}
