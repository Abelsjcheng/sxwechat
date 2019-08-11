<template>
  <div>
    <!-- 党建新闻页面待开发 -->
    <view-box ref="viewBox">
      <x-header slot="header">党建新闻</x-header>
      <panel :list="list" type="4"></panel>
      <load-more tip="正在加载"></load-more>
      <router-view></router-view>
    </view-box>
  </div>
</template>
<script>
import {Panel, LoadMore, viewBox, XHeader} from 'vux'
export default {
  name: 'partynews', // 党建新闻
  components: {Panel, LoadMore, viewBox, XHeader}, // 注册组件
  data () { // 局内数据
    return {
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
                    }},
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
                    }],
    }
  },
  methods: { // 方法函数
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

</style>
