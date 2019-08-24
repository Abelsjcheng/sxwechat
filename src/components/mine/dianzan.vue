<template>
    <div style="height:100%;">
        <!-- 我的点赞页面待完成 -->
        <view-box>
           <div slot="header">
                <x-header :left-options="{backText: ''}" style="background-color:rgba(200,250,250,0.2);">
                    <div style="color:#212121;font-family:'华文行楷'">我的点赞</div>
                </x-header>
           </div>
           <div>
               <panel :list="list" type="5" style="margin-top:0px;" @on-click-item="openproject"></panel>
           </div>
        </view-box>
        <div v-transfer-dom>
            <popup v-model="show" position="right" width="100%">
                <div>
                <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage">详情</x-header>
                <div>
                    <infocontent/>
                </div>
                </div>
            </popup>
        </div>
    </div>
</template>
<script>
import infocontent from '@/components/Infopanel/infocontent.vue'
import { ViewBox, XHeader, Panel, Popup, TransferDom } from 'vux'
export default {
  name: 'dianzan', // 我的点赞
  directives: {
    TransferDom
  },
  components: { ViewBox, XHeader, Panel, Popup, infocontent }, //注册组件
  data() {
      return{
        show:false,
        list: [
        {
          src: '',
          title: '标题一',
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
          title: '标题二',
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
          title: '标题三',
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
          title: '标题四',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }
        }
      ]
      }
  },
  methods: {
      openproject (item) { // 显示弹窗
      this.show = true
      console.log(item)
    },
    backpage () { // 关闭弹窗
      this.show = false
    },
  },
  computed: {

  },
  mounted() {

  },
  watch: {

  }
}
</script>
<style lang="less" scoped>

</style>
