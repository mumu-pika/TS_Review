// Generics 泛型

const cnt: Array<string> = [] // 与string[]作用一致
const res: Array<string | number> = [] // string[] | number[]

// 在Promise中使用泛型
const p1: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done!')
  }, 2000)
})

p1.then((data) => console.log(data))

// reverse函数例子
function reverse<T>(items: T[]): T[] {
  const toreturn = []
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

const sample = [1, 2, 3]
let reversed = reverse(sample)

console.log(reversed) // 3, 2, 1

// Safety
// reversed[0] = '1'; // Error
// reversed = ['1', '2']; // Error

reversed[0] = 1 // ok
reversed = [1, 2] // ok
