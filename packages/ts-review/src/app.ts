// 引入样式
import './app.css'

// 引用第三方库
// lodash
// import _ from 'lodash'
// console.log(_.shuffle([1, 2, 3]))

import axios from 'axios'

// 获取模板中的表单元素信息
const form = document.querySelector('form')
const addressInput = document.getElementById('address') as HTMLInputElement

// 点击提交按钮触发的回调
function searchAddressHandler(event: Event) {
  event.preventDefault()
  // get access to the address
  const enteredAddress = addressInput.value

  // send this to api
  // axios
  //   .get(`url`)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch((err) => console.log(error))
}

form?.addEventListener('submit', searchAddressHandler)

