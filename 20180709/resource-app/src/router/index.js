// 引入vue模块
import Vue from 'vue'
// 引入路由插件
import  Router from 'vue-router'
//  使用路由
Vue.use(Router);

// 引入vue-resource插件(处理http请求)
import VueResource from 'vue-resource'
// 引入home.vue组件
import home from '../components/Home.vue';
// 引入about.vue组件
import about from '../components/About.vue';

// 使用vue-resource插件
Vue.use(VueResource);

// 创建路由实例
const router = new Router({
    // 路由规则
    routes:[
        {
            path:'/home',
            component:home
        },{
            path:'/about',
            component:about
        }
    ]
})

// 导出router
export default router