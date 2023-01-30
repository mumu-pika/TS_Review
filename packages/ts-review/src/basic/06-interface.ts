// interface 接口
/*
  An interface describes the structure of
  an object.
*/

interface IGreet {
  greet(message: string): void
}

class Person implements IGreet {
  private name: string
  private age = 10
  constructor(name: string) {
    this.name = name
  }

  greet(message: string): void {
    console.log(this.name + '-' + this.age + '-' + message)
  }
}

// 使用interface
const hero = new Person('pika')
hero.greet('Aloha!')

// interface用于函数类型定义
// type Addfn = (a: number, b:number) => number

// interface Addfn {
//   (a: number, b: number): number
// }

// interface IHello {
//   // 这里表明这个属性key值是未知的，但设定了string这个类型
//   [prop: string]: string
// }
