import { AxiosRequestConfig } from './types'
import xhr from './xhr' // 引入xhr模块
// 引入工具函数
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'

function axios(config: AxiosRequestConfig): void {
  // 在执行 xhr 函数前，我们先执行 processConfig 方法，对 config 中的数据做处理
  // 也就是对于url做参数处理
  processConfig(config)
  xhr(config)
}
export default axios

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData (config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params) // 返回拼接处理后的url
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data) // 返回JSON化后的数据
}

