import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import 'font-awesome/less/font-awesome.less'
Vue.config.productionTip = false
// 移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
