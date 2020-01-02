import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import 'font-awesome/less/font-awesome.less'
import './assets/styles/common.less'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import ECharts from 'vue-echarts/components/ECharts'
// 引入 ECharts 各模块
import 'echarts/lib/component/toolbox'  //工具盒
import 'echarts/lib/component/dataZoom' //数据区域缩放
import 'echarts/lib/chart/line'              //折线图
import 'echarts/lib/chart/bar'	            //柱状图
import 'echarts/lib/chart/pie'		//饼图
import 'echarts/lib/chart/radar'	//雷达图
import 'echarts/lib/component/tooltip'	//数据提示框
import 'echarts/lib/component/legend'	//图例
import 'echarts/lib/component/title.js'	//标题
Vue.prototype.qs = qs 
Vue.component('v-chart', ECharts)   //注册ECharts
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
// 移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
