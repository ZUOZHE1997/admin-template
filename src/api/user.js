// import request from '@/utils/request'
import { httpUrls as http } from './http'

const request = {}
// 登陆
request.login = data => {
  return http.post('/api/login', data)
}
// 登出
request.logout = data => {
  return http.post('/vue-admin-template/user/logout', data)
}
// 获取信息
request.getInfo = () => {
  return http.get('/api/user/my/profile')
}
export default request
// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
