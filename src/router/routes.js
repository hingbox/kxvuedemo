/**
 * Created by kuangxing on 2017/5/23 12:18.
 * Email:kuangx@elab-plus.com
 * Version:v1.0
 */
// 引用模板
import index from '../views/index.vue'
import content from '../views/content.vue'
// 引入子路由
import Frame from '../frame/subroute.vue'
// 引入子页面
import userIndex from '../views/user/index.vue'
import userInfo from '../views/user/info.vue'
import userLove from '../views/user/love.vue'
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  },
  {
    path:'/user',
    component: Frame,
    children: [
      {path: '/',component: userIndex},
      {path: 'info',component: userInfo},
      {path: 'love',component: userLove}
    ],
  },
]
