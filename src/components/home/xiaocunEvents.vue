<template>
<!-- 小村家事 可上传图片-->
  <div style="height:100%;">
    <ViewBox ref="viewBox" body-padding-bottom="0">
       <x-header>小村家事
         <x-icon slot="right" type="plus" size="35" style="fill:#fff;position:relative;top:-8px;"  @click="openwindowshow.showMenus = true"></x-icon>
       </x-header>
       <pull-to :top-load-method="refresh" @infinite-scroll="loadmore" :top-config="{stayDistance:90}"  @scroll="onScroll" >
        <group>
          <cell align-items="flex-start"  value-align="left" v-for="(pcircle,index) in pcircles" :key="index" :id="'pid'+index">
            <img slot="title" :src="pcircle.headimg" width="45" height="45" style="margin-right:1em;border-radius: 6px;"> <!--发表说说的用户头像 -->
            <div>
              <span class="post-name">{{pcircle.name}} </span> <!--发表说说的用户昵称 -->
              <div class="post-time-ico">
                <div class="post-time">{{pcircle.adddate}}</div> <!--发表说说的时间 -->
              </div>
              <div v-show="pcircle.imgurl && pcircle.imgurl.length>0"> <!-- 判断是否有图片-->
                <img :class="'previewer-demo-img'+index" v-for="(list,imgindex) in pcircle.imgurl" :key="imgindex" :src="list.src" width="100" :style="{width: imgWidth, height: imgWidth}" @click="show(pcircle.imgurl,imgindex,index)" >
              </div>
              <div class="post-text" v-html="pcircle.pcontent"> </div> <!--说说的内容 -->
            </div>
          </cell>
        </group>
        <div class="loading-bar">
          <load-more tip="正在加载"></load-more>
        </div>
      </pull-to>
    </ViewBox>
       <div v-transfer-dom>
        <actionsheet :menus="menus" v-model="openwindowshow.showMenus" @on-click-menu="click" show-cancel></actionsheet>
      </div>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
            <Group>
               <flexbox>
                 <flexbox-item>
                  <x-button style="margin-left:5px;" @click.native="backpage"  type="warn">取消</x-button>
                </flexbox-item>
                <flexbox-item style="margin-right:5px;">
                  <x-button @click.native="pushevents" type="primary">发表</x-button>
                </flexbox-item>
              </flexbox>
              <x-input v-model="eventsTitle" placeholder="标题"></x-input>
              <x-textarea :max="300" name="description" :height="160" :rows="8" :cols="30" v-model="eventsText" placeholder="开始输入您的小村家事吧！"></x-textarea>
              <div>
                <!-- 图片上传 -->
              <addimg /> 
              </div>
            </Group>
            <toast v-model="showtoast" type="text" :time="800" width="100%" is-show-mask :text="showEventstoasttext" position="top"></toast>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import addimg from '../../components/Infopanel/addimg.vue'
import PullTo from 'vue-pull-to'
import { XHeader, ViewBox, XButton, Flexbox, FlexboxItem, XTextarea, XInput, Toast, Panel , Actionsheet, Popup, TransferDom, Group, Cell, CellBox } from 'vux'
export default {
  name: 'xiaocunEvents', // 小村家事
  directives: {
    TransferDom
  },
  components: { XHeader, ViewBox, XButton, Flexbox, FlexboxItem, XTextarea, XInput, Toast, Panel, addimg, Actionsheet, Popup, Group, Cell, CellBox, PullTo }, // 注册组件
  data () { // 局内数据
    return {
      show: false,
      compText: '',
      showComtoasttext: '请输入内容',
       menus: { // 发表说说菜单
        menu1: '发表我的小村家事',
      },
      openwindowshow: {
        showMenus: false, // 菜单显示判断
        pop: false, // 点赞评论功能弹窗显示判断
        inputshow: false, // 输入框弹窗显示判断
        emotionshow: false, // 表情框显示判断
        IsKeyorEmo: true // true:表情 false：键盘
      },
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
      ]
    }
  },
  methods: { // 方法函数
    backpage () { // 关闭弹窗
      this.show = false
    },
    click (key) { // 点击菜单
      console.log(key)
      this.show = true
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
@cell-value-color:#000;
@cell-body-label-color:#999;
</style>
