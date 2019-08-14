<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
    <!-- 时事政治页面待开发 -->
      <div slot="header" style="position:absolute;left:0;top:0;z-index:100;border-bottom:2px solid #901;background:#eee;">
        <!-- <x-header style="background:#ef0210">时事政治</x-header> -->
        <div style="background:#fa9;height:36px;width:321px;">
          <img style="display:block;float:left;margin:2px;width:15%;height:25px;" src="../../assets/img/party/dangbiao.png" alt="">
          <span style="display:block;float:left;line-height:38px;font-family:'华文行楷';color:#212121;font-size:20px;letter-spacing:5px">
            时事政治
          </span>
        </div>
      </div>
      <div style="padding-top:30px;">
        <panel :list="list" type="5"></panel>
        <load-more tip="正在加载"></load-more>
      </div>
    </view-box>
  </div>
</template>
<script>
import { ViewBox, LoadMore, Panel } from 'vux'
export default {
  name: 'shishizhenshi', // 时事政治
  components: { ViewBox, LoadMore, Panel }, // 注册组件
  data () { // 局内数据
    return {
      list: [
        {
          src: 'https://c.cncnimg.cn/037/727/cb14_m.jpg',
          title: '新闻一',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            source: '',
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }
        },
        {
          src: 'https://c.cncnimg.cn/037/727/cb14_m.jpg',
          title: '新闻二',
          fallbackSrc: '',
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
          src: 'https://c.cncnimg.cn/037/727/cb14_m.jpg',
          title: '新闻三',
          fallbackSrc: '',
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
          src: 'https://c.cncnimg.cn/037/727/cb14_m.jpg',
          title: '新闻四',
          fallbackSrc: '',
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
          src: 'https://c.cncnimg.cn/037/727/cb14_m.jpg',
          title: '新闻五',
          fallbackSrc: '',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            source: '',
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }
        },
        {
          src: 'https://c.cncnimg.cn/037/727/cb14_m.jpg',
          title: '新闻六',
          fallbackSrc: '',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            source: '',
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
