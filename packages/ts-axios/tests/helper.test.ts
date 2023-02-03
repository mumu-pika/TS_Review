// 做工具函数的测试
import { transformRequest } from '../src/helpers/data'

describe('工具函数测试集', () => {
  it('传入参数为一个JS对象, 期望获取一个JSON对象', () => {
    const data = { id: '001' , content: 'happy'}
    expect(transformRequest(data)).toEqual("{\"id\":\"001\",\"content\":\"happy\"}")
  })
})


