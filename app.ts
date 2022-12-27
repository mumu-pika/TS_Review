// function 函数返回值类型可以设置为void或是undefined

function add(n1: number, n2: number) {
  return n1 + n2
}

function testVoid(num: number): void {
  console.log("test return void: " + num)
  return
}

testVoid(add(2, 3))