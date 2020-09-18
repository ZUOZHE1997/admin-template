import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/codeEditor',
    component: Layout,
    redirect: '/codeEditor/index',

    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/codeEditor/index'),
        meta: { title: '代码编辑器', icon: 'table' }
      }
    ]
  },
  {
    path: '/drag',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/Drag/index'),
        meta: { title: '拖拽工具', icon: 'form' }
      }
    ]
  },
  {
    path: '/download',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'commonlyUsed',
        component: () => import('@/views/download/index'),
        meta: { title: '常用下载方式', icon: 'form' }
      }
    ]
  },
  {
    path: '/commonlyUsed',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'commonlyUsed',
        component: () => import('@/views/commonlyUsed/index'),
        meta: { title: '常用插件', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
