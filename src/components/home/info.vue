<template>
    <!-- 资讯页面待开发 -->
    <div style="height:100%;">
      <view-box ref="viewBox" body-padding-bottom="0">
        <div slot="header" class="vux-scroller-header">
          <x-header>资讯</x-header>
          <!--取消搜索框自动置顶:auto-fixed="false"-->
          <search
          @on-change="getResult"
          v-model="value"
          position="absolute"
          :auto-fixed="false"
          auto-scroll-to-top
          ref="search"></search>
          <tab>
            <tab-item selected badge-label="1" @on-item-click="open('policy')">政策</tab-item>
            <tab-item badge-background="#38C972" badge-color="#fff" badge-label="2" @on-item-click="open('notice')">公告</tab-item>
            <tab-item badge-background="#38C972" badge-color="#fff" badge-label="2" @on-item-click="open('news')">新闻</tab-item>
          </tab>
        </div>
        <pull-to  @infinite-scroll="loadmore">
          <div style="padding-top:130px;">
            <infolist :list="infolist"  v-if="infolist.length"/> <!--异步请求的数据是会渲染两次的！第一次是请求没完成时，子组件去取值，是空！第二次才是请求成功返回，然后才有数据 -->
          </div>
          <div class="loading-bar">
            <load-more tip="正在加载"></load-more>
          </div>
        </pull-to>
      </view-box>
    </div>
</template>
<script>
import infolist from '@/components/Infopanel/infolist.vue'
import PullTo from 'vue-pull-to'
import { Search, XHeader, ViewBox, Tab, TabItem, LoadMore } from 'vux'

export default {
  name: 'info', // 资讯
  components: {
    Search, XHeader, ViewBox, Tab, TabItem, LoadMore, PullTo, infolist
  }, // 注册组件
  data () { // 局内数据
    return {
      tab: 'notice', // 未搜索判断当前tab标签
      value: '',
      infolist: []
    }
  },
  methods: { // 方法函数
    setFocus () {
      this.$refs.search.setFocus()
    },
    getResult (val) {
      if (this.tab === 'policy') {
        this.getinfolist('http://110.53.162.165:5050/api/policy/PolAll', val) // sql模糊查找
      } else if (this.tab === 'notice') {
        this.getinfolist('http://110.53.162.165:5050/api/policy/infoAll', val)
      }
    },
    getinfolist (url, tit) {
      this.axios.get(url, { params: { title: tit } }).then((res) => {
        this.infolist = [] // 置空初始化
        for (let i = 0, len = res.data.data.length; i < len; i++) {
          this.infolist.push({
            infocontent: res.data.data[i],
            title: res.data.data[i].title,
            desc: res.data.data[i].content,
            meta: {
              other: '评论:20',
              date: res.data.data[i].reldate
            }
          })
        }
      })
        .catch(function (error) {
          console.log(error)
        })
    },
    open (val) {
      if (val === 'policy') {
        this.tab = 'policy'
        this.getinfolist('http://110.53.162.165:5050/api/policy/PolAll', '')
      } else if (val === 'notice') {
        this.tab = 'notice'
        this.getinfolist('http://110.53.162.165:5050/api/policy/infoAll', '')
      } else if (val === 'news') {
        this.tab ='news'
        this.getinfolist('http://110.53.162.165:5050/api/policy/infoAll', '')
      }
    },
    loadmore () { // 上拉
      setTimeout(() => {
      }, 1000)
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
    this.open('policy')
  }
}

</script>

<style lang="less" scoped>
.weui-loadmore{
  margin: auto auto;
}
</style>
