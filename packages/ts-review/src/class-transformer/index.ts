import { MyProduct } from './product.model'
import 'reflect-metadata'
import { plainToInstance } from 'class-transformer'

// 这里假设接收到了后台传来的数据
const products = [
  { title: 'Pokemon Go', price: 99.99 },
  { title: 'fate stay night', price: 99.99 },
]


// **************************************************** //
// const p1 = new MyProduct('A book', 9.99)
// console.log(p1.getInformation())

// 如果没有使用class-transform的话, 我们可能需要手动创建实例
// 像下面这样
// const loadedProducts = products.map((prod) => {
//   return new MyProduct(prod.title, prod.price)
// })

// **************************************************** //
// 对比上面，下面使用class-transformer
/* 
  plainToClass需要传入两个参数：
  第一个参数是需要转换的类；
  第二个参数是我们要转换的数据

  现在使用plainToClass提示过期，
  于是使用了plainToInstance来做替代

*/
const loadedProducts = plainToInstance(MyProduct, products)

// 遍历loadedProducts
for (const prod of loadedProducts) {
  console.log(prod.getInformation())
}