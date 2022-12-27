// function 函数返回值类型可以设置为void或是undefined

function add(n1: number, n2: number) {
  return n1 + n2
}

function testVoid(num: number): void {
  console.log('test return void: ' + num)
  return
}

testVoid(add(2, 3))

// 下面使用回调函数callback的类型定义
function addHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

addHandler(10, 20, (result) => {
  console.log('执行回调函数', result)
})
