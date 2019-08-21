<template>
  <div class="dynamic" style="height:100%;">
    <x-header :left-options="{backText: ''}" style="background-color:rgba(200,250,250,0.2);">
        <div style="color:#212121;font-family:'华文行楷'">我的动态</div>
      <!-- <x-icon slot="right" type="edit" size="35" style="fill:#fff;position:relative;top:-8px;"  @click="showMenus = true"></x-icon> -->
    </x-header>
    <scroller lock-x scrollbar-y use-pullup use-pulldown @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" @on-scroll="onScroll" ref="scroller" height="-46" v-model="status">
      <div>
        <div class="dynamic-headbg">
          <img class="dynamic-headerpro" src="../../assets/img/my_head.png" width="66" height="66">
          <span class="dynamic-headername">施景程</span>
        </div>
        <group>
          <cell align-items="flex-start" value-align="left" v-for="(pcircle,index) in pcircles" :key="index" :id="'pid'+index">
            <img slot="title" :src="pcircle.headimg" width="45" height="45" style="margin-right: 1em; border-radius: 6px;">
            <div>
              <span class="post-name">{{pcricle.name}}</span>
              <div class="post-text" v-html="pcricle.pcontent"></div>
              <div v-show="pcricle.imgurl && pcricle.imgurl.length > 0"> <!--判断是否有图片-->
                <img :class="'previewer-img'+index" v-for="(list,imgindex) in pcricle.imgurl" :key="imgindex" :src="list.src" width="100" :style="{width:imgWidth,height:imgWidth}" @click="show(pcricle.imgurl,imgindex,index)">
              </div>
              <div class="post-time-ico">
                <div class="post-time">{{pcricle.adddate}}</div>
                <popover placement="left" @on-show="openpop()" @on-hiden="closepop()" :gutter=10>
                  <div slot="content"  class="popover-content" v-show="openwindowshow.pop">
                    <div class="like" @click="isgood(index)">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                      {{prcicle.ispr?'取消':'赞'}}
                    </div>
                    <div class="like" @click="openinput(index)">
                      <i class="fa fa-comment-o" aria-hidden="true"></i>
                      评论
                    </div>
                  </div>
                </popover>
              </div>
            </div>
          </cell>
        </group>
      </div>
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
        <span v-show="status.pullupStatus === 'loading'"><load-more tip="正在加载"></load-more></span>
      </div>
      <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
        <span v-show="status.pulldownStatus === 'loading'"><load-more tip="正在加载"></load-more></span>
      </div>
    </scroller>
  </div>
</template>
<script>
import { XHeader, Previewer, Scroller, LoadMore, Group, Cell, Popover } from 'vux'
export default {
  name: 'dynamic', // 我的动态
  components: { XHeader, Previewer, Scroller, LoadMore, Group, Cell, Popover }, // 注册组件
  data () {
    return {
      status: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      },
      pcricle: [
        {
          pcid: 1, // 朋友圈编号
          uid: 1, // 发布动态人编号
          name: '施景程', // 发布人姓名
          pcontent: '值班地点: 暮云镇居委会二楼办公室联系方式: 18874083707 ', // 发布的内容
          headimg: require('../../assets/img/my_head.png'), // 头像地址
          imgurl: [
            {
              id: 1,
              src: require('../../assets/img/party/affair1.jpg'),
              w:800,
              h:400
            }
          ],
          adddate: '2019-8-13', // 发布时间
        }
      ]
    }
  },
  methods: { // 方法函数
  click (key) {
      console.log(key)
    },
    loadMore () { // 上拉刷新
      // get
      setTimeout(() => {
        setTimeout(() => {
          this.$refs.scroller.donePullup() // 设置上拉刷新操作完成，在数据加载后执行
        }, 10)
      }, 2000)
    },
    refresh () { // 下拉刷新
      // get 
      setTimeout(() => {
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scroller.donePulldown() // 	设置下拉刷新操作完成，在数据加载后执行
          }, 10)
        })
      }, 2000)
    },
    onScroll (pos) { // 页面滚动触发函数
      if(this.openwindowshow.pop){
        console.log(1)
        this.openwindowshow.pop=false
      }else if(this.openwindowshow.inputshow){
        this.$refs.inputcomment.blur()
      }
    },
    isgood(index) { // 判断更爱点赞图标
      if (this.pcricles[index].ispr) {
        this.pcricles[index].ispr = 0
      }else {
        this.pcricles[index].ispr = 1
      }
    },
    show (imglist,imgindex,index) { // 图片放大显示
      this.pid = index
      this.imglist = imglist
      this.$nextTick(() => {
        this.$refs.previewer.show(imgindex)
      })
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数
  // 根据实际手机屏幕 获取图片宽高
    this.imgWidth = parseInt((Number(window.screen.width) - 140) / 3) + 'px'
  }
}
</script>
<style lang="less" scoped>
.weui-panel{
  margin-top: 0px
}
.weui-tab /deep/ .weui-tab__panel{
  padding-bottom: 0px; 
}
.dynamic-headbg{
  position:relative;
  width:100%;
  background-image: url("../../assets/img/pyqtt.jpg");
  background-size:cover;
  display:block;
  height: 260px;
}
.dynamic-headerpro{
  margin-top: 210px;
  margin-right: 20px;
  float: right;
  border-radius: 6px;
}
.dynamic-headername{
  color: #fff;
  margin-top: 230px;
  margin-right: 20px;
  float: right;
}
.weui-loadmore{
  margin: auto auto;
}
</style>
