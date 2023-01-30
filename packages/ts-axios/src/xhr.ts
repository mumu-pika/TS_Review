// 利用XMLHttpRequest发送请求
import { AxiosRequestConfig } from './types' // 引入类型声明文件

export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config
  const xhr = new XMLHttpRequest()
  // 初始化一个新请求
  // xhrReq.open(method, url, async) async为一个可选的布尔参数，表示是否异步执行操作，默认为 true。
  xhr.open(method.toUpperCase(), url, true)
  xhr.send(data)
}
