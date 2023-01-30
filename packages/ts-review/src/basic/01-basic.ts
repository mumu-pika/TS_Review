// console.log("hello TypeScript")

// 枚举类型
enum Pet {
  cat,
  dog,
  lion,
}

const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] // Tuple 元组类型
  pet: Pet.lion
} = {
  name: 'saber',
  age: 16,
  hobbies: ['football', 'cooking'],
  role: [1, 'king'],
  pet: Pet.lion,
}
