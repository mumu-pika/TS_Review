import axios from '../src/index'

// jest.mock('axios')

describe('mock Request Suite', () => {
    // it('发送请求给/simple/get', async () => {
    //   const fetchData = async (query) => {
    //     return await axios({
    //       method: 'get',
    //       url: `http://localhost${query}`,
    //       params: {
    //         a: 1,
    //         b: 2
    //       }
    //     })
    //   }
    //   await expect(fetchData()).resolves.toBe({"msg":"hello simple"})
    // })

    it ('fetchData中使用回调函数', () => {
      const fetchData = (fn: Function) => {
        setTimeout(() => {
          fn('xixi')
        }, 1000)
      }
      const callback = (data: string) => {
        expect(data).toBe('xixi')
      }
      fetchData(callback)
    })

    // 如果异步代码使用了 Promise，需要在测试用例中将Promise对象返回
    // it('fetchData返回一个Promise的情况', () => {

    // })

  })
