<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0" >
      <div slot="header" class="vux-scroller-header">
        <x-header>数据分析</x-header>
      </div>
        <div style="">
          <div id="div" class="card one" style="background:#299;">
            <span  @on-click-item="openproject">性别比例</span>
         </div>
          <div class="card one" style="background:#688;">
            <span>低保户</span>
          </div>
          <div class="card tow" style="background:#688;">
            <span>新增人口</span>
          </div>
          <div class="card tow" style="background:#299;">
            <span>年龄段</span>
          </div>
          <div class="card bottom" style="background:#499; width:98%;">
            <span>复 原 军 人 的 比 例</span>
          </div>
      </div>
    </view-box>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage">详情</x-header>
        </div>
      </popup>
    </div>
    <alertdata :show="showModal" :title="'数据'"/>
  </div>
</template>
<script>
import alertdata from '@/components/Infopanel/alertdata.vue'
import { XHeader, ViewBox, Popup, Cell, TransferDom } from 'vux'
export default {
  name: 'project', // 数据分析
  directives: {
    TransferDom
  },
  components: { XHeader, ViewBox, Popup, Cell, alertdata }, // 注册组件
  data () { // 局内数据
    return {
      // projectlists: [],
      show: false,
      showModal: false,
    }
  },
  methods: { // 方法函数
    openproject (item) { // 显示弹窗
      this.show = true
      console.log(item)
    },
    backpage () { // 关闭弹窗
      this.show = false
    },
    hideModal() {
      //关闭弹窗
      this.showModal = false
    },
    showWindow() {
      this.showModal = false
    },
    changeRoute() {
      this.$router.push('/welcom/page2');
    },
    showdata() {
      this.showModal = true
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数
    // this.getinfo() // 取项目信息
    // this.projectlists = this.UnBuiltLists
  }
}
</script>
<style lang="less" scoped>
.card{
  height:146px;
  width:48%;
  float:left;
  margin: 3px;
}
div{
  text-align: center;
  vertical-align: middle;
}
span{
  text-align: center;
  line-height: 100px;
  height: 100px;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  display: block;
  position: relative;
  top:50%;
  transform:translateY(-50%);
}
</style>
