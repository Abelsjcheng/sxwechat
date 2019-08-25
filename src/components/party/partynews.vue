<template>
  <div style="height:100%;">
    <!-- 党建新闻页面待开发 -->
    <view-box ref="viewBox">
      <div slot="header" style="position:absolute;width:100%;z-index:100;">
        <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;background:#ef0210;">党建新闻</x-header>
      </div>
      <pull-to :top-load-method="refresh" @infinite-scroll="loadmore" :top-config="{stayDistance:90}"  @scroll="onScroll" >
          <div style="padding-top:40px;">
          <panel :list="list" type="4" @on-click-item="openproject"></panel>
          <!-- <load-more tip="正在加载"></load-more> -->
        </div>
        <div class="loading-bar">
            <load-more tip="正在加载"></load-more>
          </div>
        </pull-to>
    </view-box>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage">党建新闻详情</x-header>
          <div>
            <infocontent/>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import PullTo from 'vue-pull-to'
import infocontent from '@/components/Infopanel/infocontent.vue'
import { Panel, LoadMore, ViewBox, XHeader, Popup, TransferDom } from 'vux'
export default {
  name: 'partynews', // 党建新闻
  directives: {
    TransferDom
  },
  components: { Panel, LoadMore, ViewBox, XHeader, Popup, infocontent, PullTo }, // 注册组件1
  data () { // 局内数据
    return {
      show: false,
      list: [
        {
          src: '',
          title: '新闻一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }
        },
        {
          src: '',
          title: '新闻二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }
        },
        {
          src: '',
          title: '新闻三',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }
        },
        {
          src: '',
          title: '新闻四',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }
        }]
    }
  },
  methods: { // 方法函数
    refresh (loaded) { // 下拉加载
      setTimeout(() => {
        loaded('done')
      }, 2000)
    },
    loadmore () { // 上拉
      setTimeout(() => {
      }, 1000)
    },
    onScroll (pos) { // 页面滚动触发函数
      if (this.openwindowshow.pop) {
        this.openwindowshow.pop = false
      } else if (this.openwindowshow.inputshow) {
        this.openwindowshow.inputshow = false
      }
    },
    openproject (item) { // 显示弹窗
      this.show = true
      console.log(item)
    },
    backpage () { // 关闭弹窗
      this.show = false
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数

  }
}
</script>
<style lang="less" scoped>
.weui-loadmore{
  margin: auto auto;
}
</style>
