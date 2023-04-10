import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout/layout'
Vue.use(Router)

/* Layout */

/* Router Modules */

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
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
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
    path: '/test/test1',
    component: () => import('@/components/componentA')
  }, {
    path: '/test/test2',
    component: () => import('@/components/componentB')
  }, {
    path: '/test/test3',
    component: () => import('@/components/componentC')
  },
  {
    path: '/test/test4',
    component: () => import('@/components/componentD')
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/system/user-auth',
    component: Layout,
    hidden: true,
    permissions: ['system:user:edit'],
    meta:{title: '系统管理'},
    children: [
      {
        path: 'role/:userId(\\d+)',
        component: () => import('@/components/componentA'),
        name: 'AuthRole',
        meta: { title: '分配角色', activeMenu: '/system/user' }
      }
    ]
  },
  {
    path: '/system/role-auth',
    component: Layout,
    hidden: true,
    permissions: ['system:role:edit'],
    meta:{title: '用户管理'},
    children: [
      {
        path: 'user/:roleId(\\d+)',
        component: () => import('@/components/componentA'),
        name: 'AuthUser',
        meta: { title: '分配用户', activeMenu: '/system/role' }
      },
      {
        path: 'index/:dictId(\\d+)',
        component: () => import('@/components/componentA'),
        name: 'Data',
        meta: { title: '字典数据', activeMenu: '/system/dict' },
        children: [
          {
            path: 'index/:jobId(\\d+)',
            component: () => import('@/components/componentA'),
            name: 'JobLog',
            meta: { title: '调度日志', activeMenu: '/monitor/job' }
          }
        ]
      },
    ]
  },
  {
    path: '/tool/gen-edit',
    component: Layout,
    hidden: true,
    permissions: ['tool:gen:edit'],
    meta:{title: '配置管理'},
    children: [
      {
        path: 'index/:tableId(\\d+)',
        component: () => import('@/components/componentA'),
        name: 'GenEdit',
        meta: { title: '修改生成配置', activeMenu: '/tool/gen' }
      }
    ]
  }
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
