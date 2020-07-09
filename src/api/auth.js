/*
获取个人信息以及登陆注册登出的接口
*/
import { httpUrls as http } from './http'
import { Notification } from 'element-ui'
import store from '../store'
const request = {}

request.login = data => {
  return http.post('/api/login', data).then(res => {
    console.log(res)
    store.dispatch('user/saveToken', res.data.accessToken)
  }).catch(err => {
    console.log(err)
    Notification({
      title: '提示',
      message: '登陆出错了,等会刷新试试',
      position: 'top-left'

    })
  })
}
request.logout = data => {
  return http.post('/api/lgout', data).then(res => {
    // console.log(res)
    store.dispatch('user/clearAuth')
  }).catch(err => {
    console.log(err)
    Notification({
      title: '提示',
      message: '登陆出错了,等会刷新试试',
      position: 'top-left'

    })
  })
}
request.getUserInfo = () => {
  return http.get('/api/user/my/profile').then(res => {
    console.log(res)
    store.dispatch('user/saveToken', res.data.accessToken)
    return res
  }).catch(err => {
    console.log(err)
    // Notification({
    //   title: '提示',
    //   message: '',
    //   position: 'top-left'

    // })
  })
}

export default request
