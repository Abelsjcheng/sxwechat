<template>
<div>
    <div v-transfer-dom>
        <popup v-model="showpop1" position="right" width="100%">
          <x-header :left-options="{preventGoBack: true}" @on-click-back="backpage">我的消息</x-header>
          <panel type="4" :list="list" @on-click-item="openproject"></panel>
        </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage1">详情</x-header>
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
import { Popup, XHeader, TransferDom, XButton, Panel } from 'vux'
export default {
    name: 'mynews',
    directives: {
    TransferDom
  },
    components: { Popup, XHeader, XButton, Panel, infocontent },
    data() {
        return{
            show:false,
            showpop1:this.show1,
            list: [
        {
          src: '',
          title: '消息一',
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
          title: '消息二',
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
          title: '消息三',
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
    props:["show1"],
    methods: {
      backpage () { // 关闭我的消息弹窗
        this.showpop1 = false
       },
      closepop1 () {
        this.showpop1=false
        this.$emit("closepop1",this.showpop1)
      },
      openproject (item) { // 显示弹窗
        this.show = true
        console.log(item)
        },
      backpage1 () { // 关闭详情弹窗
        this.show = false
        }
    },
    computed:{
      listenshow () {
        return this.show1;
      }
    },
    watch:{
      listenshow (vag) {
        this.showpop1=vag
      }
    } 
}
</script>
<style lang="less" scoped>
</style>
