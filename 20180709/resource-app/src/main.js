import Vue from 'vue'
import ZYBoot from './bootstrap/css/bootstrap.css' // 引入bootstrap文件
import App from './App.vue'
import router from './router' // 引入路由文件


// 设置为false，表示以阻止vue在启动时生成生产提示
Vue.config.productionTip = false

// 创建一个vue实例/
window.onload = function() {
  var app = new Vue({
    el:'#app',
    router,
    // render: h => h(App)
    render:function(h) {
      return h(App)
    }
  })
}
