import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Hello from '../components/Hello'

// 全局使用路由插件
Vue.use(Router);

// 实例化路由，默认配置
export default new Router({
    routes:[
        {
            path:'/',
            name:'',
            component:Hello
        }
    ]
})