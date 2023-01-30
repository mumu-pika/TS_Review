// decorator for validation

interface ValidatorConfig {
  [property: string]: {
    [validateProp: string]: string[] // ['required', 'positive']
  }
}

// 创建注册的验证器
const registeredValidators: ValidatorConfig = {}

// 创建用于校验的装饰器
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['required'],
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['positive'],
  }
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name]
  // 如果检验器中没有写规则，默认检验通过
  if (!objValidatorConfig) return true

  // 遍历自定义的检验规则
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          // 使用!!可以将值转换为布尔值
          return !!obj[prop]
        case 'positive':
          return obj[prop] > 0
      }
    }
  }
  return true
}

class Course {
  @Required
  title: string
  @PositiveNumber
  price: number
  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
}

const courseForm = document.querySelector('form')
courseForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement

  const title = titleEl.value
  const price = +priceEl.value

  // add validation
  // if (title.trim.length > 0) { /*todo*/}

  const createdCourse = new Course(title, price)

  if (!validate(createdCourse)) {
    alert('Invalid Input, please check again！')
    return
  }
  console.log(createdCourse)
})
