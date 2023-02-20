/* 
  Given an array, transform it into an object type and
  the key/value must be in the provided array.

  example：
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  type result = TupleToObject<typeof tuple> 
  // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


*/

// type TupleToObject<T extends readonly any[]> = any

type TupleToObject<T extends readonly (string | number )[]> = {
  [K in T[number]]: K   // 注意的是, 这里T的类型是tupLe元组类型.不是对象
}