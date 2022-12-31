// Generics 泛型

// 未使用泛型来实现
// function merge (objA: object, objB: object) {
//   return Object.assign(objA, objB)
// }
// console.log(merge({name: 'pika'}, {age: 30}))


// 使用泛型来实现
function merge (objA: object, objB: object) {
  return Object.assign(objA, objB)
}
