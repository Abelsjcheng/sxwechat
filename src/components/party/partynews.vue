<template>
  <div style="height:100%;">
    <!-- 党建新闻页面待开发 -->
    <view-box ref="viewBox">
      <div slot="header" style="position:absolute;width:100%;z-index:100;">
        <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;background:#ef0210;">党建新闻</x-header>
      </div>
      <scroller lock-x scrollbar-y use-pullup use-pulldown @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" @on-scroll="onScroll" ref="scroller" height="-46" v-model="status">
        <div  style="padding-top:40px;">
          <panel :list="list" type="4"></panel>
          <!-- <load-more tip="正在加载"></load-more> -->
        </div>
       <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
          <span v-show="status.pullupStatus === 'loading'"><load-more tip="正在加载"></load-more></span>
        </div>
        <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
          <span v-show="status.pulldownStatus === 'loading'"><load-more tip="正在加载"></load-more></span>
        </div>
      </scroller>
      <router-view></router-view>
    </view-box>
  </div>
</template>
<script>
import { Panel, Scroller, LoadMore, ViewBox, XHeader } from 'vux'
export default {
  name: 'partynews', // 党建新闻
  components: { Panel, Scroller, LoadMore, ViewBox, XHeader }, // 注册组件1
  data () { // 局内数据
    return {
       status: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      },
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
   loadMore () { // 上拉刷新
      // get
      setTimeout(() => {
        setTimeout(() => {
          this.$refs.scroller.donePullup() // 设置上拉刷新操作完成，在数据加载后执行
        }, 10)
      }, 2000)
    },
    refresh () { // 下拉刷新
      // get 
      setTimeout(() => {
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scroller.donePulldown() // 	设置下拉刷新操作完成，在数据加载后执行
          }, 10)
        })
      }, 2000)
    },
    onScroll (pos) { // 页面滚动触发函数
      if(this.openwindowshow.pop){
        console.log(1)
        this.openwindowshow.pop=false
      }else if(this.openwindowshow.inputshow){
        this.$refs.inputcomment.blur()
      }
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
