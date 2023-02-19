/*
  Implement the built-in Pick<T, K> generic without using it.
  Constructs a type by picking the set of properties K from T
*/

// type MyPick<T, K> = any
/*
  Pick
  从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。
*/

// type MyPick<T, K extends keyof T> = Pick <T, K>

type MyPick<T, K extends keyof T> = {
  [k in K]: T[k]
}

