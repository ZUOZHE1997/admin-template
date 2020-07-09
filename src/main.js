import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import '@/icons' // icon
import '@/permission' // permission control

import '../mock/index'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  //   const
  mockXHR()
}
axios.defaults.headers.common.Authorization = store.state.user.token
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
// Vue.use(axios)
// Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://nuanhudemo.qushen.net'
Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
export default vm
