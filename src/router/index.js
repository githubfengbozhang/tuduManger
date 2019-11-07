/*
 * @Author: fengbozhang
 * @Date: 2019-10-23 13:44:17
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-05 11:40:41
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
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
    alwaysShow: true,
    meta: { title: '首页', icon: 'dashboard' },
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  },

  {
    path: '/userManger',
    component: Layout,
    redirect: '/userManger/index',
    name: 'UserManger',
    alwaysShow: true,
    meta: { title: '用户', icon: 'example' },
    children: [
      {
        path: 'userManger',
        name: 'UserManger',
        component: () => import('@/views/userManger/index'),
        meta: { title: '用户管理', icon: 'table' }
      }
    ]
  },
  {
    path: '/groupManger',
    component: Layout,
    redirect: '/groupManger/index',
    name: 'GroupManger',
    alwaysShow: true,
    meta: {
      title: '小组',
      icon: 'nested'
    },
    children: [
      {
        path: 'groupManger',
        name: 'GroupManger',
        component: () => import('@/views/groupManger/index'),
        meta: { title: '小组管理', icon: 'table' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/notice/index',
    name: 'System',
    alwaysShow: true,
    meta: {
      title: '系统',
      icon: 'nested'
    },
    children: [
      {
        path: 'notice',
        name: 'Notice',
        component: () => import('@/views/system/notice/index'),
        meta: { title: '通告管理' }
      },
      {
        path: 'configuration',
        name: 'Configuration',
        component: () => import('@/views/system/configuration/index'),
        meta: { title: '功能配置' }
      },
      {
        path: 'personnelManger',
        name: 'PersonnelManger',
        component: () => import('@/views/system/personnelManger/index'),
        meta: { title: '人员管理' }
      },
      // {
      //   path: 'menu2',
      //   component: () => import('@/views/nested/menu2/index'),
      //   meta: { title: '需权限组' }
      // },
      {
        path: 'operationLog',
        name: 'OperationLog',
        component: () => import('@/views/system/operationLog/index'),
        meta: { title: '操作日志' }
      }
    ]
  },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
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
