<template>
    <!-- 资讯页面待开发 -->
    <div style="height:100%;">
      <view-box ref="viewBox" >
        <div slot="header" class="vux-scroller-header">
          <x-header>资讯</x-header>
          <!--取消搜索框自动置顶:auto-fixed="false"-->
          <div>
         <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        position="absolute"
        auto-scroll-to-top
        top="46px"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search"></search>
        </div>
          <tab>
            <tab-item selected badge-label="1" @on-item-click="open('/home_info/policy')">政策</tab-item>
            <tab-item badge-background="#38C972" badge-color="#fff" badge-label="2" @on-item-click="open('/home_info/notice')">公告</tab-item>
            <tab-item badge-background="#38C972" badge-color="#fff" badge-label="2" @on-item-click="open('/home_info/news')">新闻</tab-item>
          </tab>
        </div>
        <scroller lock-x scrollbar-y use-pullup use-pulldown @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" @on-scroll="onScroll" ref="scroller" height="-46" v-model="status">
          <div style="padding-top:130px;">
            <router-view></router-view>
          </div>
          <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
          <span v-show="status.pullupStatus === 'loading'"><load-more tip="正在加载"></load-more></span>
        </div>
        <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
          <span v-show="status.pulldownStatus === 'loading'"><load-more tip="正在加载"></load-more></span>
        </div>
      </scroller>
      </view-box>
    </div>
</template>
<script>

import { Search, XHeader, ViewBox, Tab, TabItem, Scroller, LoadMore } from 'vux'

export default {
  name: 'info', // 资讯
  components: {
    Search, XHeader, ViewBox, Tab, TabItem, Scroller, LoadMore
  }, // 注册组件
  data () { // 局内数据
    return {
      results: [],
      value: 'test',
      status: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      }
    }
  },
  methods: { // 方法函数
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },
    open (url) {
      this.$router.push(url)
    },
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
      if (this.openwindowshow.pop) {
        console.log(1)
        this.openwindowshow.pop = false
      } else if (this.openwindowshow.inputshow) {
        this.$refs.inputcomment.blur()
      }
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器
    // value (val) {
    //     this.currentValue = val
    //   }
  },
  mounted () { // 初始化函数

  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style lang="less" scoped>
.weui-loadmore{
  margin: auto auto;
}
</style>
