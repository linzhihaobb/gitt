
import Vue from 'vue/dist/vue.js' // 引入vue模块
import App from './App.vue' // 引入app.vue的根组件
import router from './router' // 会自动加载router下面的index.js文件
import MintUi from 'mint-ui' // 引入mint-ui组件库
import 'mint-ui/lib/style.css' // 引入样式文件


// 设置fasle 是防止vue启动时生成生产模式.
Vue.config.productionTip = false

// vue.js 全局使用mintui组件
Vue.use(MintUi)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// new Vue({
//   el:'#app',
//   router,
//   template:'<App/>',
//   components:{App}
// })
