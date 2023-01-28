import { AxiosRequestConfig } from './types'
import xhr from './xhr' // 引入xhr模块
import { bulidURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  // 在执行 xhr 函数前，我们先执行 processConfig 方法，对 config 中的数据做处理
  // 也就是对于url做参数处理
  processConfig(config)
  xhr(config)
}
export default axios

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}
