<template>
  <div>
    <x-header :left-options="{backText: ''}" >朋友圈
      <x-icon slot="right" type="camera" size="35" style="fill:#fff;position:relative;top:-8px;"  @click="showMenus = true"></x-icon>
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
          <div>
            <img class="previewer-demo-img" v-for="(list,index) in posts[0].lists" :key="index" :src="list.src" height="80" width="80" @click="show(index)" >
            <div v-transfer-dom>
              <previewer :list="posts[0].lists" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
            </div>
          </div>
          <div class="post-time-ico">
            <div class="post-time">2小时前</div>
            <popover placement="left" :gutter=10 >
              <div slot="content" class="popover-demo-content">
                <div class="like"  @click="like">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                  {{good}}
                </div>
                <div class="like">
                  <i class="fa fa-comment-o" aria-hidden="true"></i>
                  评论
                </div>
              </div>
              <i class="fa fa-flickr post-icon" ></i>
            </popover>
          </div>
        </div>
        <div class="post-content">
          <div style="border-bottom: 1px solid #D9D9D9;">
            <i class="fa fa-heart-o"> </i>
            <span v-for="post in posts" :key="post.id"> {{post.name}}, </span>
          </div>
          <div v-for="post in posts" :key="post.id"> 
            <span>{{post.runame}} :</span>
            <span>{{post.content}} </span>
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
import { XHeader, Actionsheet, TransferDom, Cell, Group, Popover, Previewer } from 'vux'
export default {
  name: 'quan', // 朋友圈
  directives: {
    TransferDom
  },
  components: { XHeader, Actionsheet, Cell, Group, Popover, Previewer }, // 注册组件
  data () { // 局内数据
    return {
      menus: {
        menu1: '拍照',
        menu2: '从相册选择'
      },
      showMenus: false,
      good: '赞',
      posts: [
        {
          id: 1,
          name: '施景程',
          content: '模板样式测试',
          runame: '施景程',
          lists:[
            {
              id: 1,
              src: require('../../assets/img/party/affair1.jpg')
            },
            {
              id: 2,
              src: require('../../assets/img/party/affair2.jpg')
            },
          ]
        },
        {
          id: 2,
          name: '王李沙',
          content:'模板样式测试',
          runame:'施景程 回复 王李沙'
        },
        {
          id: 3,
          name: '黄凤芝',
          content: '模板样式测试',
          runame: '施景程 回复 黄凤芝'
        }
      ],
      options: {
        getThumbBoundsFn (index) {
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index] // 查找缩略图元素
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop // 获取窗口滚动Y
          let rect = thumbnail.getBoundingClientRect() // 可选获取水平滚动，获取元素相对于视区的位置
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width } // w = width
        }
      }
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
    },
    show (index) { // 图片放大显示
      this.$refs.previewer.show(index)
    },
    logIndexChange (arg) {
      console.log(arg)
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
  margin: 3px 0px;
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
