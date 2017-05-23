// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*引入Vue框架*/
/*
import Vue from 'vue'
/!*引入资源请求插件*!/
//import VueResource from 'vue-resource'
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
/!*重置样式*!/
//import "assets/css/base.css"
/!*基本JS*!/
//import "assets/js/common.js"

import router from './router'
/!*使用VueResource插件*!/
//Vue.use(VueResource)
//Vue.config.productionTip = false
// 使用配置文件规则
const router = new VueRouter({
  routes
})
/!* eslint-disable no-new *!/
/!*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*!/
// 跑起来吧
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
*/
// 引用 vue 没什么要说的
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './router/routes'

// 引用API文件
import api from '../config/api'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 使用配置文件规则
const router = new VueRouter({
  routes
})
// 跑起来吧
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})






