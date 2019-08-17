<template>
    <div style="height:100%;">
      <x-header :left-options="{backText: ''}" style="background-color:rgba(200,250,250,0.2);">
        <div style="color:#212121;font-family:'华文行楷'">我的动态</div>
      <!-- <x-icon slot="right" type="edit" size="35" style="fill:#fff;position:relative;top:-8px;"  @click="showMenus = true"></x-icon> -->
    </x-header>
    <div class="quan-headbg">
      <div>
        <img class="quan-headerpro" src="../../assets/img/my_head.png" width="66" height="66">
        <span class="quan-headername">施景程</span>
      </div>
    </div>
    <group>
      <cell align-items="flex-start"  value-align="left">
        <img slot="title" src="../../assets/img/my_head.png" width="45" height="45" style="margin-right:1em;border-radius: 6px;">
        <div>
          <span class="post-name">施景程 </span>
          <div class="post-text">值班地点: 暮云镇居委会二楼办公室联系方式: 18874083707 </div>
          <div class="post-time-ico">
            <div class="post-time">2小时前</div>
            <popover placement="left" :gutter=10 >
              <div slot="content" class="popover-demo-content">
                <div class="like"  @click="like">
                  <i class="fa fa-heart-o" aria-hidden="false"></i>
                  {{good}}
                </div>
                <div class="like">
                  <i class="fa fa-comment-o" aria-hidden="false"></i>
                  评论
                </div>
              </div>
              <i class="fa fa-flickr post-icon" ></i>
            </popover>
          </div>
        </div>
        <div class="post-content">
          <div class="post-like">
          </div>
        </div>
      </cell>
    </group>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="click" show-cancel></actionsheet>
    </div>
    </div>
</template>
<script>
import {  XHeader, Actionsheet, TransferDom, Cell, Group, Popover } from 'vux'
export default {
  name: 'dynamic', // 我的动态
  directives: {
    TransferDom
  },
  components: { XHeader, Actionsheet, TransferDom, Cell, Group, Popover }, // 注册组件
  data () {
    return {
      // menus: {
      //   menu1: '拍照',
      //   menu2: '从相册选择'
      // },
      // showMenus: false,
      good: '赞',
      list: [
        // {
        //   src: '../../assets/img/my_head.png',
        //   title: '动态一',
        //   desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
        //   url: {
        //     path: '',
        //     replace: false
        //   },
        //   meta: {
        //     other: '评论 20',
        //     date: '10分钟前'
        //   }
        // },
        // {
        //   src: '../../assets/img/my_head.png',
        //   title: '动态二',
        //   desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
        //   url: {
        //     path: '',
        //     replace: false
        //   },
        //   meta: {
        //     other: '评论 20',
        //     date: '10分钟前'
        //   }
        // },
        // {
        //   src: '../../assets/img/my_head.png',
        //   title: '动态三',
        //   desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
        //   url: {
        //     path: '',
        //     replace: false
        //   },
        //   meta: {
        //     other: '评论 20',
        //     date: '10分钟前'
        //   }
        // },
        // {
        //   src: '../../assets/img/my_head.png',
        //   title: '动态四',
        //   desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
        //   url: {
        //     path: '',
        //     replace: false
        //   },
        //   meta: {
        //     other: '评论 20',
        //     date: '10分钟前'
        //   }
        // }
         ]
    }
  },
  methods: { // 方法函数
  click (key) {
      console.log(key)
    },
    like () {
      console.log(this.good)
      if (this.good === '赞') {
        this.good = '取消'
      } else {
        this.good = '赞'
      }
    }
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
.weui-panel{
  margin-top: 0px
}
.quan-headbg{
  position:relative;
  width:100%;
  background-image: url("../../assets/img/pyqtt.jpg");
  background-size:cover;
  display:block;
  height: 260px;
}
.quan-headerpro{
  margin-top: 210px;
  margin-right: 20px;
  float: right;
  border-radius: 6px;
}
.quan-headername{
  color: #fff;
  margin-top: 230px;
  margin-right: 20px;
  float: right;
}
.post-name{
  color: #1e4c97;
  font-size: 13px;
}
.post-text{
  margin-top: 3px;
  font-size: 14px;
  color:#000;
}
.post-time-ico{
  height: 25px;
  .post-time{
    float: left;
    margin-top: 5px;
    font-size: 12px;
  }
  .post-icon{
    float: right;
    line-height: 25px;
    font-size: 20px;
    color: #92abd4;
  }
}
.popover-demo-content {
  width:125px;
  height:32px;
}
.like{
  line-height: 32px;
  text-align: center;
  width: 60px;
  display: inline-block;
  font-size: 12px;
}
.post-content{
  background: #f3f3f3;
  font-size: 12px;
  color: #1e4c97;
  padding: 5px;
}
</style>
