import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [

    {path: '/',name: 'app-home',component: () => import('./views/app/home.vue'),meta:{keepAlive:true}},
    {path: '/appVideo',name: 'app-video',component: () => import('./views/app/video.vue'),meta:{keepAlive:true}},
    {path: '/appImg',name: 'app-img',component: () => import('./views/app/image.vue'),meta:{keepAlive:true}},
    {path: '/appText',name: 'app-text',component: () => import('./views/app/text.vue'),meta:{keepAlive:false}},
    {path: '/showContentImg',name: 'showContentImg',component: () => import('./views/app/showContentImg.vue'),meta:{keepAlive:false}},
    {path: '/showContentVideo',name: 'showContentVideo',component: () => import('./views/app/showContentVideo.vue'),meta:{keepAlive:false}},

    {path: '/text3',name: 'text3',component: () => import('./views/app/text3.vue'),meta:{keepAlive:false}},   /* 上拉加载 下拉刷新  ---  true*/
    {path: '/text5',name: 'text5',component: () => import('./views/app/text5.vue'),meta:{keepAlive:false}},   /* 上拉加载 下拉刷新 */

    {path: '*',name: 'no404',component: () => import('./views/no404.vue'),meta:{keepAlive:true}},
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

