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
            <infocontent :infocontent="content" />
          </div>
        </div>
      </popup>
    </div>
</div>
</template>
<script>

import infocontent from '@/components/Infopanel/infocontent.vue'
import { Popup, XHeader, TransferDom, Panel } from 'vux'
export default {
  name: 'mynews',
  directives: {
    TransferDom
  },
  components: { Popup, XHeader, Panel, infocontent },
  data () {
    return {
      show: false,
      content: {}, // 存储传给 infocontent 的数据
      showpop1: this.show1,
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
  props: ['show1'],
  methods: {
    backpage () { // 关闭我的消息弹窗
      this.showpop1 = false
    },
    closepop1 () {
      this.showpop1 = false
      this.$emit('closepop1', this.showpop1)
    },
    openproject (item) { // 显示弹窗
      this.show = true
      this.content = item.infocontent // 打开popup时使content中存储的值赋给infocontent
      console.log(item)
    },
    backpage1 () { // 关闭详情弹窗
      this.show = false
    },
    getmynews:function () { // 数据请求函数
      this.axios.get('http://110.53.162.165:5050/api/party/listAll?',{params:{vtype:0,pageIndex:1,pageSize:20 } }).then((res) => {
        console.log(res.data)
         for (let i = 0, len = res.data.data.length; i < len; i++) {
          this.list.push({
            title: res.data.data[i].mtitle,
            src: res.data.data[i].mpic,
            content: res.data.data[i].mcontent,
            reldate: res.data.data[i].pushdate,
            meta: {
              other: '评论:20',
              date: res.data.data[i].pushdate
            }
          })
        } // 请求成功函数
      }, function () {
        console.log('请求失败处理') // 请求失败函数
      })
    }
  },
  computed: {
    listenshow () {
      return this.show1
    }
  },
  watch: {
    listenshow (vag) {
      this.showpop1 = vag
    }
  }
}
</script>
<style lang="less" scoped>
</style>
