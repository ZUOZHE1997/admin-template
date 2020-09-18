/*
* TODO:举个例子
* */
import { httpUrls as http } from './http' // 引入http(引入请求)

const request = {} // 定义方法
// 登陆
request.login = (data) => {
  return http.post('/api/login', data) // 请求方法,传入参数
}
export default request
