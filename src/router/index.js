import Vue from 'vue'
import VueRouter from 'vue-router'
// import { tips } from '@/utils/utils'

// 捕获异常
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  } else {
    return originalPush.call(this, location).catch((err) => err)
  }
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  } else {
    return originalReplace.call(this, location).catch((err) => err)
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: 'login', },
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/layout',
    name: 'layout',
    meta: { title: 'layout', },
    component: () => import('../views/layout/index.vue'),
    redirect: "/layout/home",
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: { title: 'home', },
        component: () => import('../views/Home/index.vue'),
      },
      {
        path: 'sub',
        name: 'Sub',
        meta: { title: 'sub', },
        redirect: "sub/subPanel",
        component: () => import('../views/Sub/index.vue'),
        children: [
          {
            path: 'subPanel',
            name: 'subPanel',
            meta: { title: 'sub', },
            component: () => import('../views/subPanel/index.vue'),
          },
          {
            path: 'addSub',
            name: 'add',
            meta: { title: 'add', },
            component: () => import('../views/addSub/index.vue'),
          }
        ]
      },
      {
        path: 'member',
        name: 'Member',
        meta: { title: 'member', },
        component: () => import('../views/Member/index.vue'),
      },
      {
        path: 'transfer',
        name: 'Transfer',
        meta: { title: 'transfer', },
        component: () => import('../views/Transfer/index.vue'),
      },
      {
        path: 'history',
        name: 'History',
        meta: { title: 'history', },
        component: () => import('../views/History/index.vue'),
      },
      {
        path: 'search-gameid',
        name: 'SearchGameid',
        meta: { title: 'search-gameid', },
        component: () => import('../views/SearchGameid/index.vue'),
      },
      {
        path: 'winloss',
        name: 'Winloss',
        meta: { title: 'winloss', },
        component: () => import('../views/Winloss/index.vue'),
      },
      {
        path: 'financial',
        name: 'Financial',
        meta: { title: 'financial', },
        component: () => import('../views/Financial/index.vue'),
      },
      {
        path: 'firstperson',
        name: 'Firstperson',
        meta: { title: 'firstperson', },
        component: () => import('../views/Firstperson/index.vue'),
      },
      {
        path: 'gaming',
        name: 'Gaming',
        meta: { title: 'gaming', },
        component: () => import('../views/Gaming/index.vue'),
      },
      {
        path: 'documentationapi',
        name: 'Documentationapi',
        meta: { title: 'documentationapi', },
        component: () => import('../views/Documentationapi/index.vue'),
        children: [
          {
            path: '/layout/documentationapi-onewallet',
            name: 'onewallet',
            meta: { title: 'onewallet', },
            component: () => import('../views/onewallet/index.vue'),
            children: [
              {
                path: '/layout/documentationapi-onewallet-onewalletuser',
                name: 'onewalletuser',
                meta: { title: 'onewalletuser', },
                component: () => import('../views/onewalletuser/index.vue'),
              }
            ]
          },
          {
            path: '/layout/documentationapi-fundtransfer',
            name: 'fundtransfer',
            meta: { title: 'fundtransfer', },
            component: () => import('../views/fundtransfer/index.vue'),
            children: [
              {
                path: '/layout/documentationapi-fundtransfer-fundtransferuser',
                name: 'fundtransferuser',
                meta: { title: 'fundtransferuser', },
                component: () => import('../views/fundtransferuser/index.vue'),
              }
            ]
          },
          {
            path: '/layout/documentationapi-gamehistory',
            name: 'gamehistory',
            meta: { title: 'gamehistory', },
            component: () => import('../views/gamehistory/index.vue'),

          },
          {
            path: '/layout/documentationapi-gamelist',
            name: 'gamelist',
            meta: { title: 'gamelist', },
            component: () => import('../views/gamelist/index.vue'),

          },
          {
            path: '/layout/documentationapi-kickPlayer',
            name: 'kickPlayer',
            meta: { title: 'kickPlayer', },
            component: () => import('../views/kickPlayer/index.vue'),

          },

        ]
      },
      {
        path: 'reference',
        name: 'Reference',
        meta: { title: 'reference', },
        component: () => import('../views/Reference/index.vue'),
        children: [
          {
            path: '/layout/reference-tablelist',
            name: 'tablelist',
            meta: { title: 'tablelist', },
            component: () => import('../views/tablelist/index.vue'),

          },
          {
            path: '/layout/reference-gametype',
            name: 'gametype',
            meta: { title: 'gametype', },
            component: () => import('../views/gametype/index.vue'),

          },
          {
            path: '/layout/reference-countrycode',
            name: 'countrycode',
            meta: { title: 'countrycode', },
            component: () => import('../views/countrycode/index.vue'),
          },
          {
            path: '/layout/reference-currencycode',
            name: 'currencycode',
            meta: { title: 'currencycode', },
            component: () => import('../views/currencycode/index.vue'),
          },
          {
            path: '/layout/reference-languagecode',
            name: 'languagecode',
            meta: { title: 'languagecode', },
            component: () => import('../views/languagecode/index.vue'),
          },
        ]
      },
    ]
  },
  {
    path: '*',
    redirect: '/login',
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       if (savedPosition && to.meta.keepAlive) {
  //         resolve(savedPosition)
  //       }
  //       resolve({ x: 0, y: 0 })
  //     }, 500)
  //   })
  // },
})

// 更新页面的 title
const setPageTitle = (to) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`
  }
}

// // 全局前置守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to,"全局前置守卫");
//   // 拦截未登录
//   if (to.matched.some((record) => record.meta.requireAuth)) {
//     if (!store.getters.isLogin && to.path !== '/login') {
//       return next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath,
//         },
//       })
//     }
//   }

//   // 已登录状态禁止前往登录页
//   // if (store.getters.isLogin && to.path === '/login') {
//   //   return next({
//   //     path: '/',
//   //   })
//   // }

//   next()
// })
//全局后置守卫
router.afterEach((to, from) => {
  // 设置页面的标题

  setPageTitle(to)
  // console.log(to,"全局后置守卫");

})

export default router