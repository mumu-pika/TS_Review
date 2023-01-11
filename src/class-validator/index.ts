import { NewProduct } from './product.model'
import 'reflect-metadata'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

// 这里假设接收到了后台传来的数据
const products = [
  { title: 'Pokemon Go', price: 99.99 },
  { title: 'fate stay night', price: 99.99 },
]

const newProd = new NewProduct('', -9.9)
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log('VALIDATION ERROR')
    console.log(errors)
  }
  else {
    console.log(newProd.getInformation())
  }
})
// const loadedProducts = plainToInstance(NewProduct, products)

// // 遍历loadedProducts
// for (const prod of loadedProducts) {
//   console.log(prod.getInformation())
// }
