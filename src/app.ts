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
function simpleDecorator(target: string) {
  // 在这里创建装饰器函数的工厂函数
  return function (constructor: Function) {
    console.log('I am a decorator.')
    console.log(target) // 打印输出传入的参数值
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  
}


// 装饰器应该指向一个未执行的函数
@simpleDecorator('new year')
class Card {
  constructor() {
    console.log("Creating a new card game...")
  }
}
