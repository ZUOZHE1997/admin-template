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
        meta: { title: '首页', icon: 'el-icon-s-home' }
      }
    ]
  },
  {
    path: '/codeEditor',
    component: Layout,
    redirect: '/codeEditor/index',
    meta: { title: 'Example', icon: 'el-icon-s-order' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/codeEditor/index'),
        meta: { title: '代码编辑器', icon: 'el-icon-edit-outline' }
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
        meta: { title: '拖拽工具', icon: 'el-icon-rank' }
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
        meta: { title: '常用下载方式', icon: 'el-icon-download' }
      }
    ]
  },
  {
    path: '/commonlyUsed',
    component: Layout,
    redirect: 'index',
    meta: { title: '玩', icon: 'el-icon-attract' },
    // meta: { title: '玩', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name: 'commonlyUsed',
        component: () => import('@/views/commonlyUsed/index'),
        meta: { title: '插件', icon: 'el-icon-brush' }
      },
      { path: 'GDMap',
        name: 'GDMap',
        component: () => import('@/views/GDmap/index'),
        meta: { title: '高德地图', icon: 'el-icon-map-location' }

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
// console.log(router)
export default router
