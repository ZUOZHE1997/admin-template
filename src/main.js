import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import '@/icons' // icon

Vue.use(ElementUI)

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
export default vm
