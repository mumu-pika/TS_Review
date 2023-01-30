import axios from '../../src/index' // 引入自定的axios

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
