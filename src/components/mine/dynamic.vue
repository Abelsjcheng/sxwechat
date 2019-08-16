<template>
    <div style="height:100%;">
        <!-- 我的动态页面待完成 -->
        <view-box>
           <div slot="header">
                <x-header>我的动态</x-header>
            </div>
            <div>
                <panel :list="list" type="5" style="margin-top:0px;color:#200;background:rgba(255,245,205,0.5);"></panel>
            </div>
        </view-box>
    </div>
</template>
<script>
import { ViewBox, XHeader, Panel } from 'vux'
export default {
  name: 'dynamic', // 我的动态
  components: { ViewBox, XHeader, Panel }, // 注册组件
  data () {
    return {
      list: [
        {
          src: '../../assets/img/my_head.png',
          title: '动态一',
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
          src: '../../assets/img/my_head.png',
          title: '动态二',
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
          src: '../../assets/img/my_head.png',
          title: '动态三',
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
          src: '../../assets/img/my_head.png',
          title: '动态四',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }
        } ]
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
