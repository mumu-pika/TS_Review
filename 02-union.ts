// union联合类型

type Combinable = number | string
type Conversion = 'as-number' | 'as-string'

function combine(
  value1: Combinable,
  value2: Combinable,
  opt: Conversion // 这里额外附件的选项, as-number表示将输入值作为number来处理
) {
  let result
  // 如果两个输入都是数字就做数值相加, 否则视为字符串做连接。
  if (
    (typeof value1 == 'number' && typeof value2 == 'number') ||
    opt == 'as-number'
  ) {
    result = +value1 + +value2 // 这里在前面加上“+”作为强制转换
  } else {
    result = value1.toString() + value2.toString()
  }
  return result
}

const numberCombine = combine(10, '20', 'as-number')
console.log('number组合之后：' + numberCombine)

const stringCombine = combine('10', '20', 'as-string')
console.log('string组合之后：' + stringCombine)
