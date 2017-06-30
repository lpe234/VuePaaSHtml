import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 测试
const cHello = resolve => require(['../components/Hello'], resolve)
// 登陆
const cLogin = resolve => require(['../views/Login'], resolve)
// 默认首页
const cHome = resolve => require(['../views/Home'], resolve)
// 其他页面
const cDBModel = resolve => require(['../views/DBModel/DBModel'], resolve)
const cDBTable = resolve => require(['../views/DBModel/DBTable'], resolve)

const cFormDesign = resolve => require(['../views/FormDesign'], resolve)
const cWorkFlow = resolve => require(['../views/WorkFlow'], resolve)
const cSystemManage = resolve => require(['../views/SystemManage'], resolve)
const cAPIManage = resolve => require(['../views/APIManage'], resolve)
const cOperationMonitor = resolve => require(['../views/OperationMonitor'], resolve)
const cShareService = resolve => require(['../views/ShareService'], resolve)

const router = new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: cLogin,
      meta: {
        name: '登陆'
      }
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: cHello,
      meta: {
        name: 'Hello'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: cHome,
      meta: {
        requiresAuth: true,
        name: '首页',
        isDefaultPage: true
      },
      children: [
        {
          path: 'DBModel',
          name: 'DBModel',
          component: cDBModel,
          meta: {
            name: '数据库建模'
          }
        },
        {
          path: 'DBTable/:id',
          name: 'DBTable',
          component: cDBTable,
          meta: {
            name: '数据库表'
          }
        },
        {
          path: 'FormDesign',
          name: 'FormDesign',
          component: cFormDesign,
          meta: {
            name: '表单设计'
          }
        },
        {
          path: 'WorkFlow',
          name: 'WorkFlow',
          component: cWorkFlow,
          meta: {
            name: '工作流程'
          }
        },
        {
          path: 'SystemManage',
          name: 'SystemManage',
          component: cSystemManage,
          meta: {
            name: '系统管理'
          }
        },
        {
          path: 'APIManage',
          name: 'APIManage',
          component: cAPIManage,
          meta: {
            name: '接口管理'
          }
        },
        {
          path: 'OperationMonitor',
          name: 'OperationMonitor',
          component: cOperationMonitor,
          meta: {
            name: '运维监控'
          }
        },
        {
          path: 'ShareService',
          name: 'ShareService',
          component: cShareService,
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
