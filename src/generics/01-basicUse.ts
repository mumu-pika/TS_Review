// Generics 泛型

const cnt: Array<string> = [] // 与string[]作用一致
const res: Array<string | number> = [] // string[] | number[]

// 在Promise中使用泛型
const p1: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done!')
  }, 2000)
})

p1.then(data => console.log(data))