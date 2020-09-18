// import store from '@/store'
import axios from 'axios'
import store from '@/store'
import vm from '../main'
// import { defaults } from 'js-cookie'
const options = {
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  //   transformResponse: [
  //     data => {
  //       return data
  //     }
  //   ]
}
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response
  },
  error => {
    // 对响应错误做点什么
    console.log(error.response)
    const res = error.response
    if (res.status === 401) {
      console.log('401401401401401401401401401401401401401401')
      store.dispatch('user/clearAuth')
      vm.$router.push('/login')
    } else if (res.status === 403) {
      console.log('403403403403403403403403403403403403')
    }
    return Promise.reject(error)
  }
)
const httpUrls = {}

httpUrls.get = (url, data) => {
  let config = {
    method: 'GET',
    url: url,
    params: data
  }
  config = Object.assign(config, options)
  return axios(config)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}
httpUrls.post = (url, data) => {
  let config = {
    method: 'POST',
    url: url,
    data: data
  }
  config = Object.assign(config, options)
  return axios(config)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}
httpUrls.delete = (url, data) => {
  let config = {
    method: 'DELETE',
    url: url,
    params: data
  }
  config = Object.assign(config, options)
  return axios(config)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}
httpUrls.put = (url, data) => {
  let config = {
    method: 'PUT',
    url: url,
    params: data
  }
  config = Object.assign(config, options)
  return axios(config)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}
export { httpUrls }
