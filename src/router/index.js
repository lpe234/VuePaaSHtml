import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Home from '../pages/Home'
import Login from '../pages/Login'
import DBModel from '../pages/DBModel'
import FormDesign from '../pages/FormDesign'
import WorkFlow from '../pages/WorkFlow'
import SystemManage from '../pages/SystemManage'
import APIManage from '../pages/APIManage'
import OperationMonitor from '../pages/OperationMonitor'
import ShareService from '../pages/ShareService'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        name: '登陆'
      }
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      meta: {
        name: 'Hello'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
        name: '首页'
      },
      children: [
        {
          path: 'DBModel',
          name: 'DBModel',
          component: DBModel,
          meta: {
            name: '数据建模'
          }
        },
        {
          path: 'FormDesign',
          name: 'FormDesign',
          component: FormDesign,
          meta: {
            name: '表单设计'
          }
        },
        {
          path: 'WorkFlow',
          name: 'WorkFlow',
          component: WorkFlow,
          meta: {
            name: '工作流程'
          }
        },
        {
          path: 'SystemManage',
          name: 'SystemManage',
          component: SystemManage,
          meta: {
            name: '系统管理'
          }
        },
        {
          path: 'APIManage',
          name: 'APIManage',
          component: APIManage,
          meta: {
            name: '接口管理'
          }
        },
        {
          path: 'OperationMonitor',
          name: 'OperationMonitor',
          component: OperationMonitor,
          meta: {
            name: '运维监控'
          }
        },
        {
          path: 'ShareService',
          name: 'ShareService',
          component: ShareService,
          meta: {
            name: '共享技术服务'
          }
        }
      ]
    }
  ]
})

// router浏览器端跳转拦截器
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // TODO: auth.isLogin()
    if (!sessionStorage.getItem('user')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
