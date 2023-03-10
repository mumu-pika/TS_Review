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
  console.log('simple Decorator Factory')
  // 在这里创建装饰器函数的工厂函数
  return function (constructor: Function) {
    console.log('I am a decorator.')
    console.log(target) // 打印输出传入的参数值
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('With Template Factory')
  // 在这里是想要渲染一些html模板, 渲染到找到hookId的地方
  // 对于获取到的argument但不需要使用的，我们可以用_来命名
  return function (_: Function) {
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
      console.log('finish With Template')
    }
  }
}

function WithTemplate2(template: string, hookId: string) {
  console.log('With Template Factory2')
  // 在这里是想要渲染一些html模板, 渲染到找到hookId的地方
  return function <T extends { new (...args: any[]): { cardName: string } }>(
    originalConstructor: T
  ) {
    /* 
      这里返回的构造函数会替换我们原来的类，
      也就是我们用自定义的类来替换了原本的类，
      这允许我们添加额外的逻辑
    */
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super() // 原本的类
        console.log('Rending template')
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.cardName
          console.log('finish With Template')
        }
      }
    }
  }
}

// 装饰器应该指向一个未执行的函数
/*
  我们还可以给一个类添加多个装饰器；
  多个装饰器的执行顺序是自下而上的;
  但是多个装饰器的创建的顺序是自上而下按顺序的；
*/
@simpleDecorator('new year')
// @WithTemplate('<h1>Happy New Year</h1>', 'app')
@WithTemplate2('<h1>Happy New Year</h1>', 'app')
class Card {
  cardName: string = 'PTCG'
  constructor() {
    console.log('Creating a new card game...')
  }
}

const cardGame = new Card()
console.log(cardGame)