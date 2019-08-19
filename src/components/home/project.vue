<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="90px" body-padding-bottom="0" >
      <div slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
        <x-header class="vux-scroller-header">项目公开</x-header>
        <tab>
          <tab-item selected @on-item-click="onItemClick(1)" badge-label="1">未建</tab-item>
          <tab-item @on-item-click="onItemClick(2)" badge-label="2">在建</tab-item>
          <tab-item @on-item-click="onItemClick(3)" badge-label="3">已建</tab-item>
        </tab>
      </div>
      <div>
        <panel :list="projectlists" type="4" @on-click-item="openproject"></panel>
      </div>
    </view-box>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage">重大项目详细</x-header>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import { XHeader, Tab, TabItem, ViewBox, Panel, Popup, TransferDom } from 'vux'
export default {
  name: 'project', // 项目公开
  directives: {
    TransferDom
  },
  components: { XHeader, Tab, TabItem, ViewBox, Panel, Popup }, // 注册组件
  data () { // 局内数据
    return {
      projectlists: [],
      show: false,
      UnBuiltLists: [],
      NowBuiltLists: [],
      haveBuiltLists: []
    }
  },
  methods: { // 方法函数
    onItemClick (vag) {
      if (vag === 1) {
        this.projectlists = this.UnBuiltLists
      } else if (vag === 2) {
        this.projectlists = this.NowBuiltLists
      } else if (vag === 3) {
        this.projectlists = this.haveBuiltLists
      }
    },
    openproject (item) { // 显示弹窗
      this.show = true
      console.log(item)
    },
    backpage () { // 关闭弹窗
      this.show = false
    },
    getinfo () { // 项目状态“0”为未建，“1”为在建，“2”为已建
      let that = this
      this.$axios.get('http://110.53.162.165:5050/api/project/all').then(function (res) {
        for (let i = 0, len = res.data.data.length; i < len; i++) {
          if (res.data.data[i].ptype === 0) {
            that.UnBuiltLists.push({
              projectinfo: res.data.data[i],
              title: res.data.data[i].proname,
              desc: res.data.data[i].content,
              meta: {
                source: '未建',
                date: res.data.data[i].pushdate
              }
            })
          } else if (res.data.data[i].ptype === 1) {
            that.NowBuiltLists.push({
              projectinfo: res.data.data[i],
              title: res.data.data[i].proname,
              desc: res.data.data[i].content,
              meta: {
                source: '在建',
                date: res.data.data[i].pushdate
              }
            })
          } else if (res.data.data[i].ptype === 2) {
            that.haveBuiltLists.push({
              projectinfo: res.data.data[i],
              title: res.data.data[i].proname,
              desc: res.data.data[i].content,
              meta: {
                source: '已建',
                date: res.data.data[i].pushdate
              }
            })
          }
        }
      })
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数
    this.getinfo() // 取项目信息
    this.projectlists = this.UnBuiltLists
  }
}
</script>
<style lang="less" scoped>

</style>
