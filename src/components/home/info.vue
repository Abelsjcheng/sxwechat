<template>
    <!-- 资讯页面待开发 -->
    <div style="height:100%;">
      <view-box ref="viewBox" >
        <div slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
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
          <div style="padding-top:130px;">
            <router-view></router-view>
          </div>
      </view-box>
    </div>
</template>
<script>

import { Search, XHeader, ViewBox, Tab, TabItem } from 'vux'

export default {
  name: 'info', // 资讯
  components: {
    Search, XHeader, ViewBox, Tab, TabItem
  }, // 注册组件
  data () { // 局内数据
    return {
      results: [],
      value: 'test'
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

</style>
