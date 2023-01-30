// 创建一个自动bind的装饰器
function AutoBind(
  target: any,
  methodName: string | Symbol | number,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // 这里的this是调用get方法的具体的那个实例对象
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  /* 
    这里返回自定义配置的adjDescriptor, 这将
    overwrite the old descriptor.
  */
  return adjDescriptor
}

class Printer {
  message = 'This works'

  @AutoBind
  showMessage() {
    console.log(this.message)
  }
}
const printer = new Printer()
const button = document.querySelector('button')
// button?.addEventListener('click', printer.showMessage.bind(printer))
button?.addEventListener('click', printer.showMessage)
