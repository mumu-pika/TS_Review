// Generics 泛型
// 创建一个数据存储的类
class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return
    this.data.splice(this.data.indexOf(item), 1) // -1
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('apple')
textStorage.addItem('banana')

console.log(textStorage.getItems())
