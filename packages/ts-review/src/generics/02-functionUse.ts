// Generics 泛型

// 未使用泛型来实现
// function merge (objA: object, objB: object) {
//   return Object.assign(objA, objB)
// }

// const mergeObj = merge({name: 'pika'}, {age: 30}) as {name: string, age: number}
// console.log(mergeObj)


// 使用泛型来实现
// 进一步的，这里还需要对泛型类型进行一些限制
// 这里的T类型可以是具有任何结构的任何对象，但它必须是一个对象
function merge<T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergeObj = merge({name: 'saber'}, {age: 16})
console.log(mergeObj.age)

// keyof操作符，是将一个类型映射为它所有成员名称的联合类型
// 传入对象obj, 以及对象的键值key
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  // 如果按照之前写法 <T extends object, U extends string>
  // obj[key]会报错，无法确定obj是否会有key这个属性值
  return obj[key]
}

extractAndConvert({name: 'WoW' }, 'name')