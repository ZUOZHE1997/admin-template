import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { auth } from '@/api'
NProgress.configure({
  showSpinner: false
}) // NProgress Configuration
// const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()
  if (![undefined, 'undefined', null, 'null'].includes(hasToken)) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          let user = {}
          auth.getUserInfo().then((res) => {
            console.log(res, '获取个人信息')
            user = res.data
          })
          store.dispatch('user/setInfo', user)
          next()
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    next()
    // if (whiteList.indexOf(to.path) !== -1) {
    //   next()
    // } else {
    //   next()
    //   // TODO:在这改了如果没有token也可以登录,实际上是不应该的
    //   // next(`/login?redirect=${to.path}`)
    //   NProgress.done()
    // }
  }
})
router.afterEach(() => {
  NProgress.done()
})
