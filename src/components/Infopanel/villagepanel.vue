<template>
  <div>
      <div v-transfer-dom>
        <popup v-model="showvil" position="right" width="100%">
          <x-header :left-options="{preventGoBack: true}" @on-click-back="backpage">美丽乡村规划</x-header>
          <!-- 循环模式 -->
          <div>
            <swiper loop auto :list="village_list" :index="village_index" @on-index-change="village_onIndexChange">
            </swiper>
            <panel type="5" :list="list" @on-click-item="openproject"></panel>
          </div>
        </popup>
      </div>
      <div v-transfer-dom>
        <popup v-model="show" position="right" width="100%">
          <div>
            <x-header class="vux-scroller-header" :list="list" :left-options="{preventGoBack: true}" @on-click-back="backpage1">{{list.mtitle}}</x-header>
            <div>
              <villageinfo :villageinfo="contentvil"/>
            </div>
          </div>
        </popup>
      </div>
    </div>
</template>
<script>

import villageinfo from '@/components/Infopanel/villageinfo.vue'
import { Popup, XHeader, Swiper, Panel, TransferDom } from 'vux'
 
const baseList = [{
  url: 'javascript:',
  img: require('../../assets/img/village/one.jpg'),
  title: '茶坑'
}, {
  url: 'javascript:',
  img: require('../../assets/img/village/two.jpg'),
  title: '梁启超故居'
}, {
  url: 'javascript:',
  img: require('../../assets/img/village/three.jpg'),
  title: '梁启超纪念馆',
  fallbackImg: '../../assets/img/village/one.jpg'
}]
const urlList = baseList.map((item, index) => ({
  url: '/home_tourism',
  // 转向农家乐旅游信息
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `${item.title}`
}))

export default {
  name: 'villagepanel',
  directives: {
    TransferDom
  },
  components: { Popup, XHeader, Swiper, Panel, villageinfo },
  data() {
    return {
      showpop1: this.showvil,
      village_list: urlList,
      village_index: 0,
      swiperItemIndex: 1,
      show: false,
      list: [],
      contentvil: {},
    }
  },
  props: ['showvil'],
  ready () {

  },
  methods: { // 方法函数
    backpage () { // 关闭弹窗
      this.showvil = false
    },
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    village_onIndexChange (index) {
      this.village_index = index
    },
    openproject (item) { // 显示弹窗
      this.show = true
      this.contentvil = item // 打开popup时使单个panel中存储的值赋给contentvil
      console.log(item)
    },
    backpage1 () { // 关闭详情弹窗
      this.show = false
    },
      getvilinfo:function () { // 数据请求函数
      this.axios.get('http://110.53.162.165:5050/api/beaCountry/ListBeaCountry?',{params:{vtype:0,pageIndex:1,pageSize:20 } }).then((res) => {
        this.list = [] // 置空初始化
        console.log(res.data)
          for (let i = 0, len = res.data.data.length; i < len; i++) {
           this.list.push({
             villageinfo: res.data.data[i],
            title: res.data.data[i].mtitle,
            src: res.data.data[i].mpic,
            content: res.data.data[i].mcontent,
            meta: {
              other: res.data.data[i].uname,
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
      return this.showvil
    }
  },
  watch: {
    listenshow (vag) {
      console.log(vag)
      this.showpop1 = vag
    }
  },
  mounted () { // 初始化函数
  this.getvilinfo()
  // 根据手机手机屏幕，获取图片高宽
    // this.imgWidth = parseInt((Number(window.screen.width) - 140) / 3) + 'px'
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/close.less';
a:hover{
            color:#900;
            text-decoration: underline;
          }
.link-top {
            width: 50%;
            height: 5px;
            /* border-top: solid #cccccc 1px; */
        }
.left {
  font-size: 12px;
  color: #bbbbbb;
  text-align: center;
}
a{
   color:rgb(37, 35, 35);
}
div {
    display: block;
}
p{
    display: block;
    -webkit-margin-before: 2px;
    -webkit-margin-after: 2px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-size: 13px;
}
.style {
    background:#fff;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
.weui-loadmore{
    margin: auto auto;
}
</style>
