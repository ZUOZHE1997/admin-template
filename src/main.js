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
import './permission'

Vue.use(ElementUI, { locale })

axios.defaults.headers.common.Authorization = store.state.user.token

// axios.defaults.baseURL = 'https://nuanhudemo.qushen.net'
Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
export default vm
