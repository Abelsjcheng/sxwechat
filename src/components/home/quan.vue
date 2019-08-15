<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <x-header slot="header" :left-options="{backText: ''}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">朋友圈
        <x-icon slot="right" type="camera" size="35" style="fill:#fff;position:relative;top:-8px;"  @click="showMenus = true"></x-icon>
      </x-header>
      <div>
        <div class="quan-headbg">
          <div>
            <img class="quan-headerpro" src="../../assets/img/my_head.png" width="66" height="66">
            <span class="quan-headername">施景程</span>
          </div>
        </div>
        <group>
          <cell align-items="flex-start"  value-align="left" v-for="(pcircle,index) in pcircles" :key="index" :id="'pid'+index">
            <img slot="title" :src="pcircle.headimg" width="45" height="45" style="margin-right:1em;border-radius: 6px;">
            <div>
              <span class="post-name">{{pcircle.name}} </span>
              <div class="post-text">{{pcircle.pcontent}} </div>
              <div v-show="pcircle.imgurl && pcircle.imgurl.length>0"> <!-- 判断是否有图片-->
                <img :class="'previewer-demo-img'+index" v-for="(list,imgindex) in pcircle.imgurl" :key="imgindex" :src="list.src" width="100" :style="{width: imgWidth, height: imgWidth}" @click="show(pcircle.imgurl,imgindex,index)" >
              </div>
              <div class="post-time-ico">
                <div class="post-time">{{pcircle.adddate}}</div>
                <popover placement="left" :gutter=10 >
                  <div slot="content" class="popover-demo-content">
                    <div class="like"  @click="isgood(index)">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                      {{ pcircle.ispr?'取消': '赞' }}
                    </div>
                    <div class="like" @click="openinput(index)">
                      <i class="fa fa-comment-o" aria-hidden="true"></i>
                      评论
                    </div>
                  </div>
                  <i class="fa fa-flickr post-icon" ></i>
                </popover>
              </div>
            </div>
            <div class="post-content" v-show="pcircle.TbPcpraise.length>0 || pcircle.TbPccomment.length>0">
              <div style="border-bottom: 1px solid #D9D9D9;" v-show="pcircle.TbPcpraise && pcircle.TbPcpraise.length>0">
                <i class="fa fa-heart-o"> </i>
                <span v-for="(like,index) in pcircle.TbPcpraise" :key="index"> {{like.uname}}, </span>
              </div>
              <div v-show="pcircle.TbPccomment && pcircle.TbPccomment.length>0" v-for="(rcomment,index) in pcircle.TbPccomment" :key="index">
                <span>{{rcomment.runame}} :</span>
                <span style="color:#000">{{rcomment.ccontent}} </span>
              </div>
            </div>
          </cell>
        </group>
        <div v-transfer-dom>
          <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="click" show-cancel></actionsheet>
        </div>
        <div v-transfer-dom> <!--图片查看器 -->
          <previewer :list="imglist" ref="previewer" :options="options()" @on-index-change="logIndexChange"></previewer>
        </div>
        <div v-show="IsInputshow" :style="Inputposition">
          <x-input placeholder="评论" :show-clear="false" style="padding: 5px 15px;" ref="inputcomment" @on-focus="onFocus" @on-blur="closeInput">
            <i slot="right" class="fa fa-smile-o" style="font-size:32px;padding-left:5px;"></i>
          </x-input>
        </div>
      </div>
    </view-box>
  </div>
  
</template>
<script>
import { XHeader, Actionsheet, TransferDom, Cell, Group, Popover, Previewer, XInput, ViewBox } from 'vux'
export default {
  name: 'quan', // 朋友圈
  directives: {
    TransferDom
  },
  components: { XHeader, Actionsheet, Cell, Group, Popover, Previewer, XInput, ViewBox }, // 注册组件
  data () { // 局内数据
    return {
      imgWidth: '375px',
      menus: {
        menu1: '拍照',
        menu2: '从相册选择'
      },
      showMenus: false,
      good: '赞',
      imglist: [],
      pcircles: [
        {
          pcid: 1, // 朋友圈编号
          uid: 1, // 发布动态人id
          name: '施景程', // 发布动态人姓名
          pcontent: '值班地点: 暮云镇居委会二楼办公室联系方式: 18874083707 ', // 发布内容
          headimg: require('../../assets/img/my_head.png'), // 头像地址
          imgurl: [
            {
              id: 1,
              src: require('../../assets/img/party/affair1.jpg'),
              w: 800,
              h: 400
            }
          ],
          adddate: '2019-8-13', // 发布动态时间
          prototal: 2, // 点赞总人数
          TbPccomment: [ // 评论
            {
              coid: 1, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0, // 回复某评论的coid
              uid: 1, // 评论人id
              uname: '施景程', // 评论人姓名
              ccontent: '评论测试', // 评论内容
              cdate: '2018-11-11 17:57:53', // 评论日期
              isusercom: 1, // 当前用户是否使这条评论的主人
              runame: '施景程', // 重置回复人姓名 两种格式1.评论人姓名 2.评论人姓名 回复 被评论人姓名
              aid: 430121101001, // 用户所属地区村社区 aid
              to_uid: 0, // 被评论用户id
              to_uname: null // 被评论用户姓名
            },
            {
              coid: 2, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0,
              uid: 1,
              uname: '王李沙',
              ccontent: '评论回复测试',
              issensitive: 0,
              cdate: '2018-11-11 17:57:53',
              isusercom: 1,
              runame: '王李沙 回复 施景程',
              aid: 430121101001,
              to_uid: 0,
              to_uname: null
            }
          ],
          TbPcpraise: [
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '施景程', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            },
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '王李沙', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            }
          ],
          ismycircle: 1, // 是否是当前用户发的动态 1.是 0.不是
          ispr: 1, // 当前用户是否已点赞 1.点了 0.没有点
          prnum: 0, // 点赞用户的序列号（显示时排在第几位）
          iscom: null, // 是否已评论
          comnum: null, // 评论用户的序列号（显示时排在第几位）
          aid: 430121101001 // 动态所属地区
        },
        {
          pcid: 1, // 朋友圈编号
          uid: 1, // 发布动态人id
          name: '施景程', // 发布动态人姓名
          pcontent: '值班地点: 暮云镇居委会二楼办公室联系方式: 18874083707 ', // 发布内容
          headimg: require('../../assets/img/my_head.png'), // 头像地址
          imgurl: [
            {
              id: 1,
              src: require('../../assets/img/party/affair2.jpg'),
              w: 800,
              h: 400
            }
          ],
          adddate: '2019-8-13', // 发布动态时间
          prototal: 2, // 点赞总人数
          TbPccomment: [ // 评论
            {
              coid: 1, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0, // 回复某评论的coid
              uid: 1, // 评论人id
              uname: '施景程', // 评论人姓名
              ccontent: '评论测试', // 评论内容
              cdate: '2018-11-11 17:57:53', // 评论日期
              isusercom: 1, // 当前用户是否使这条评论的主人
              runame: '施景程', // 重置回复人姓名 两种格式1.评论人姓名 2.评论人姓名 回复 被评论人姓名
              aid: 430121101001, // 用户所属地区村社区 aid
              to_uid: 0, // 被评论用户id
              to_uname: null // 被评论用户姓名
            },
            {
              coid: 2, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0,
              uid: 1,
              uname: '王李沙',
              ccontent: '评论回复测试',
              issensitive: 0,
              cdate: '2018-11-11 17:57:53',
              isusercom: 1,
              runame: '王李沙 回复 施景程',
              aid: 430121101001,
              to_uid: 0,
              to_uname: null
            }
          ],
          TbPcpraise: [
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '施景程', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            },
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '王李沙', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            }
          ],
          ismycircle: 1, // 是否是当前用户发的动态 1.是 0.不是
          ispr: 1, // 当前用户是否已点赞 1.点了 0.没有点
          prnum: 0, // 点赞用户的序列号（显示时排在第几位）
          iscom: null, // 是否已评论
          comnum: null, // 评论用户的序列号（显示时排在第几位）
          aid: 430121101001 // 动态所属地区
        },
        {
          pcid: 1, // 朋友圈编号
          uid: 1, // 发布动态人id
          name: '施景程', // 发布动态人姓名
          pcontent: '值班地点: 暮云镇居委会二楼办公室联系方式: 18874083707 ', // 发布内容
          headimg: require('../../assets/img/my_head.png'), // 头像地址
          imgurl: [
            {
              id: 1,
              src: require('../../assets/img/party/affair2.jpg'),
              w: 800,
              h: 400
            }
          ],
          adddate: '2019-8-13', // 发布动态时间
          prototal: 2, // 点赞总人数
          TbPccomment: [ // 评论
            {
              coid: 1, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0, // 回复某评论的coid
              uid: 1, // 评论人id
              uname: '施景程', // 评论人姓名
              ccontent: '评论测试', // 评论内容
              cdate: '2018-11-11 17:57:53', // 评论日期
              isusercom: 1, // 当前用户是否使这条评论的主人
              runame: '施景程', // 重置回复人姓名 两种格式1.评论人姓名 2.评论人姓名 回复 被评论人姓名
              aid: 430121101001, // 用户所属地区村社区 aid
              to_uid: 0, // 被评论用户id
              to_uname: null // 被评论用户姓名
            },
            {
              coid: 2, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0,
              uid: 1,
              uname: '王李沙',
              ccontent: '评论回复测试',
              issensitive: 0,
              cdate: '2018-11-11 17:57:53',
              isusercom: 1,
              runame: '王李沙 回复 施景程',
              aid: 430121101001,
              to_uid: 0,
              to_uname: null
            }
          ],
          TbPcpraise: [
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '施景程', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            },
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '王李沙', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            }
          ],
          ismycircle: 1, // 是否是当前用户发的动态 1.是 0.不是
          ispr: 1, // 当前用户是否已点赞 1.点了 0.没有点
          prnum: 0, // 点赞用户的序列号（显示时排在第几位）
          iscom: null, // 是否已评论
          comnum: null, // 评论用户的序列号（显示时排在第几位）
          aid: 430121101001 // 动态所属地区
        },
        {
          pcid: 1, // 朋友圈编号
          uid: 1, // 发布动态人id
          name: '施景程', // 发布动态人姓名
          pcontent: '值班地点: 暮云镇居委会二楼办公室联系方式: 18874083707 ', // 发布内容
          headimg: require('../../assets/img/my_head.png'), // 头像地址
          imgurl: [
            {
              id: 1,
              src: require('../../assets/img/party/affair2.jpg'),
              w: 800,
              h: 400
            }
          ],
          adddate: '2019-8-13', // 发布动态时间
          prototal: 2, // 点赞总人数
          TbPccomment: [ // 评论
            {
              coid: 1, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0, // 回复某评论的coid
              uid: 1, // 评论人id
              uname: '施景程', // 评论人姓名
              ccontent: '评论测试', // 评论内容
              cdate: '2018-11-11 17:57:53', // 评论日期
              isusercom: 1, // 当前用户是否使这条评论的主人
              runame: '施景程', // 重置回复人姓名 两种格式1.评论人姓名 2.评论人姓名 回复 被评论人姓名
              aid: 430121101001, // 用户所属地区村社区 aid
              to_uid: 0, // 被评论用户id
              to_uname: null // 被评论用户姓名
            },
            {
              coid: 2, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0,
              uid: 1,
              uname: '王李沙',
              ccontent: '评论回复测试',
              issensitive: 0,
              cdate: '2018-11-11 17:57:53',
              isusercom: 1,
              runame: '王李沙 回复 施景程',
              aid: 430121101001,
              to_uid: 0,
              to_uname: null
            }
          ],
          TbPcpraise: [
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '施景程', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            },
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '王李沙', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            }
          ],
          ismycircle: 1, // 是否是当前用户发的动态 1.是 0.不是
          ispr: 1, // 当前用户是否已点赞 1.点了 0.没有点
          prnum: 0, // 点赞用户的序列号（显示时排在第几位）
          iscom: null, // 是否已评论
          comnum: null, // 评论用户的序列号（显示时排在第几位）
          aid: 430121101001 // 动态所属地区
        },
        {
          pcid: 1, // 朋友圈编号
          uid: 1, // 发布动态人id
          name: '施景程', // 发布动态人姓名
          pcontent: '值班地点: 暮云镇居委会二楼办公室联系方式: 18874083707 ', // 发布内容
          headimg: require('../../assets/img/my_head.png'), // 头像地址
          imgurl: [
            {
              id: 1,
              src: require('../../assets/img/party/affair2.jpg'),
              w: 800,
              h: 400
            }
          ],
          adddate: '2019-8-13', // 发布动态时间
          prototal: 2, // 点赞总人数
          TbPccomment: [ // 评论
            {
              coid: 1, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0, // 回复某评论的coid
              uid: 1, // 评论人id
              uname: '施景程', // 评论人姓名
              ccontent: '评论测试', // 评论内容
              cdate: '2018-11-11 17:57:53', // 评论日期
              isusercom: 1, // 当前用户是否使这条评论的主人
              runame: '施景程', // 重置回复人姓名 两种格式1.评论人姓名 2.评论人姓名 回复 被评论人姓名
              aid: 430121101001, // 用户所属地区村社区 aid
              to_uid: 0, // 被评论用户id
              to_uname: null // 被评论用户姓名
            },
            {
              coid: 2, // 评论id
              pcid: 1, // 所属动态的id
              replyid: 0,
              uid: 1,
              uname: '王李沙',
              ccontent: '评论回复测试',
              issensitive: 0,
              cdate: '2018-11-11 17:57:53',
              isusercom: 1,
              runame: '王李沙 回复 施景程',
              aid: 430121101001,
              to_uid: 0,
              to_uname: null
            }
          ],
          TbPcpraise: [
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '施景程', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            },
            {
              prid: null, // 点赞编号
              pcid: 2, // 对应动态编号
              uname: '王李沙', // 点赞人姓名
              uid: 1, // 点赞人uid
              aid: null
            }
          ],
          ismycircle: 1, // 是否是当前用户发的动态 1.是 0.不是
          ispr: 1, // 当前用户是否已点赞 1.点了 0.没有点
          prnum: 0, // 点赞用户的序列号（显示时排在第几位）
          iscom: null, // 是否已评论
          comnum: null, // 评论用户的序列号（显示时排在第几位）
          aid: 430121101001 // 动态所属地区
        }
      ],
      IsInputshow: false, // 输入框显示判断
      Inputposition: {
        position: 'fixed',
        width: '100%',
        bottom: '0px',
        'background-color': '#fbf9fe'
      },
      pid: 0
    }
  },
  methods: { // 方法函数
    click (key) {
      console.log(key)
    },
    isgood (index) { // 判断更改点赞图标
      if (this.pcircles[index].ispr) {
        this.pcircles[index].ispr = 0
      } else {
        this.pcircles[index].ispr = 1
      }
    },
    show (imglist,imgindex,index) { // 图片放大显示
      this.pid=index
      this.imglist=imglist
      this.$nextTick(() => {
        this.$refs.previewer.show(imgindex)
      })
      
    },
    logIndexChange (arg) {
      console.log(arg)
    },
    openinput (index) { // 显示评论输入框
      this.IsInputshow = true
      this.$nextTick(() => {
        this.$refs.inputcomment.focus()
        document.querySelector('#pid'+index).scrollIntoView();
      })
      
      
    },
    onFocus (val, $event) {
      console.log('on focus', val, $event)
      var mo=function(e){e.preventDefault();};
      document.body.style.overflow='hidden';
      document.addEventListener("touchmove",mo,false);//禁止页面滑动

    },
    closeInput (val) { // 关闭输入框
      this.IsInputshow = false
      //解决苹果不回弹页面
      setTimeout(()=>{
        if(document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA'){
          return
        }
        let result = 'pc';
          if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
              result = 'ios'
          }else if(/(Android)/i.test(navigator.userAgent)) {  //判断Android
              result = 'android'
          }
        if( result = 'ios' ){
          document.activeElement.scrollIntoViewIfNeeded(true);
        }
      },100)
    },
    options () { // previewer配置
      let that=this
      return {
        getThumbBoundsFn (index) {
          let thumbnail = document.querySelectorAll('.previewer-demo-img'+that.pid)[index] // 查找缩略图元素
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop // 获取窗口滚动Y
          let rect = thumbnail.getBoundingClientRect() // 可选获取水平滚动，获取元素相对于视区的位置
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width } // w = width
        }
      }   
    },
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
  font-size: 13px;
  color: #094dcc;
  padding: 5px;
}
.previewer-demo-img{
  margin-right: 5px;
}
.weui-cell /deep/ .weui-input{
  background-color: #fff;
  height: 2.5em;
  line-height: 2.5em
}

</style>
