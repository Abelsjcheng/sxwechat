<template>
  <div  style="padding-top:46px">
    <ul id="comments_list">
      <li class="comments">
        <div class="com_top">
          <h3 class="title">{{infocontent.title}}</h3>
          <span class="time">{{infocontent.reldate}}</span>
        </div><hr>
        <div class="com_content">{{infocontent.content}}</div>
        <div style="margin-right:10%;color:#999;font-size:13px;">阅读量:15</div><hr>
      </li>
    </ul>
    <group style="padding-bottom:36px">
      <cell>
        <span slot="title" class="cell-comment-title">评论</span>
      </cell>
      <cell align-items="flex-start"  value-align="left" v-for="(comment,index) in commentslist" :key="index" >
        <img slot="title" :src="comment.headimg" width="25" height="25" style="margin-right:1em;border-radius: 6px;margin-top: 0.5em;">
        <div>
          <div class="comment-box-header">
            <div>
              <span class="comment-name">{{comment.uname}} </span> <!--发表说说的用户昵称 -->
              <p class="comment-time">{{comment.cdate}} </p>
            </div>
            <div>
              <!-- 点赞 -->
            <i class="fa fa-heart-o fa-5x animated swing" style="font-size:15px;" @click="colour" v-if="show" >{{addgood(comment.good)}}</i>
             <i class="fa fa-heart fa-5x animated swing" :class="fontclass" style="font-size:15px;" @click="colour" v-if="!show" >{{comment.good}}</i>
            <!-- 评论别人的评论 -->
            <i class="fa fa-comment-o" style="font-size:15px;color: #999999;margin-left:5px" @click="onFocus()" ></i>
            </div>
          </div>
          <div class="comment-content" v-html="ccontentemoji(comment.ccontent)"> </div> <!--说说的内容 -->
          <div class="recomment-content" v-if="comment.recomment !=null && comment.recomment.length >0 " ><!--评论回复 -->
              <div v-for="(recomment,index) in comment.recomment" :key="index">
                <span >{{recomment.uname}}等人 </span> 
                <span style="color: #094dcc" >共{{comment.recomment.length}}条回复 </span>
                <!-- <span class="right-arrow">
                  <span class="arrow"> </span>
                </span> --><br>
                <span style="color: #094dcc">{{recomment.uname}}:
                  <span style="color:#212121;">回复测试</span>
                </span>
              </div>
            </div>
        </div>
      </cell>
      <cell style="width: 100%;" link="/panel_comment">
        <p slot="title" style="text-align: center;color:#008af5;font-size:15px">全部评论</p>
      </cell>
    </group>
    <div class="comment-footer">
      <div class="comment-inputcell"> <!--评论输入框 -->
        <p class="comment-input" @click="onFocus()" > 说说你的看法 <p>
        <aside style="padding: 0 .3rem 0 .5rem;">
          <i slot="right" class="fa fa-comment-o comment-icon" @click="showemotion()" ></i>
        </aside>
        <!-- 收藏图标 -->
        <aside style="padding: 0 .3rem 0 .5rem;">
          <i slot="right" :class="Ifcolstar?'fa fa-star comment-icon':'fa fa-star-o comment-icon'"  @click="showtoastcol()"></i>
        </aside>
        <aside style="padding: 0 .3rem 0 .5rem;">
          <i slot="right" class="fa fa-share-alt comment-icon" @click="showemotion()" ></i>
        </aside>
      </div>
    </div>
    <toast v-model="showcoltoast" type="text" :time="800" width="80%" is-show-mask :text="showcoltoasttext" position="middle"></toast>
    <div v-transfer-dom>
      <popup v-model="commentshow" position="right" width="100%" :popup-style="{zIndex: 502}">
        <div style="height:100%">
          <header class="comment-header"  >
            <button class="comment-cancel" v-on:click="backpage">取消 </button>
            <button class="comment-push" v-on:click="pushcomment">发布</button>
          </header>
          <Group>
            <x-textarea :max="200" name="detail" :height="150" :rows="8" :cols="30" v-model="commentText" placeholder="说说你的看法" :show-counter="false"></x-textarea>
            <i class="fa fa-smile-o" style="font-size:34px;margin-left:5px;color: #999999;" @click="showemotion()" ></i>
            <x-icon type="ios-close-outline" style="fill:#999999;float: right;margin-right:5px" size="34" @click="commentText = ''"></x-icon>
            <swiper dots-position="center" height="175px" v-show="emotionshow"> <!--表情包 -->
              <swiper-item class="black" v-for="(i,index) in 5" v-bind:key="index" >
                <section class="wechatEmotion-container" >
                <ul class="emotion-list">
                  <li v-for="(item,index) in list.slice(23*(i-1),23*i)" v-bind:key="index"  class="vux-center-h emotion-list-item" @click="addEmotion(item)">
                    <emotion is-gif>{{item}}</emotion>
                  </li>
                </ul>
                </section>
              </swiper-item>
            </swiper>
          </Group>
          <toast v-model="showtoast" type="text" :time="800" width="100%" is-show-mask :text="showComtoasttext" position="top"></toast>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import { XHeader, Popup, TransferDom, XTextarea, Cell, Group, WechatEmotion as Emotion, Swiper, SwiperItem, Toast  } from 'vux'
import { timingSafeEqual } from 'crypto'
export default {
  name: 'infocontent',
  directives: {
    TransferDom
  },
  components: { XHeader, Popup, XTextarea, Cell, Group, Emotion, Swiper, SwiperItem, Toast },
  props: ['infocontent','commentslist'], // 定义父组件向子组件传递的对象
  data () {
    return {
      title: '',
      commentText: '',
      uname: '王李沙',
      commentshow: false, // pop弹窗
      emotionshow: false, // 表情框显示
      showtoast: false, // 评论输入提示
      showcoltoast: false, // 收藏提示
      Ifcolstar: false, // 收藏图标切换
      showcoltoasttext: '您已收藏',
      show: true,
      fontclass: "",
      showComtoasttext: '请输入评论内容',
      good: 0,
      list: ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
    }
  },
  methods: {

    colour () {//点赞功能
      if (this.show) {
        this.show = false;
        this.fontclass = "hover";
        return function() {
          this.good = good++;
        }
      }
      else if (!this.show) {
        this.show = true;
        this.fontclass = "";
        return function() {
          this.good = good--;
        }
      }
    },
    addgood (good) {

    },
    onFocus () { 
      console.log(1)
      this.commentshow = true
    },
    backpage () { // 关闭弹窗
      this.commentshow = false
      this.emotionshow = false;
    },
    addEmotion (emotion) { // input中添加表情
      this.commentText = this.commentText + '[' + emotion + ']'
    },
    // praise () { //点赞功能
    //   var good=2;
    //   return function(){
    //     this.good=good++;
    //   }
    // },
    showemotion () { // 点击表情/keybroad图标
      this.emotionshow = !this.emotionshow;
    },
    pushcomment () {
      let that = this
      if (this.commentText === '') {
        this.showComtoasttext = '请输入评论内容'
        this.showtoast = true
      }
      else{
        let comment = { 
          pcid: this.infocontent.poinid, 
          uid: 105, 
          uname: '施景程',
          ccontent: this.commentText,
          headimg: require('../../assets/img/my_head.png'),
          cdate: '刚刚',
          good: 0
        }
        // post需加入qs将json格式直接转化为data所需的格式（?pcid=11&ccontent=测试）
        this.axios.post('http://110.53.162.165:5050/api/comment/insertInfoCM',this.qs.stringify(comment) ).then((res) => {
          this.showComtoasttext = '发布成功'
          this.showtoast = true
          this.commentText = ''
          this.commentshow = false
          this.emotionshow = false
          this.commentslist.push(comment)
        })
          .catch(function (error) {
            console.log(error)
          })
      } 
    },
    showtoastcol () { //点击收藏
      if(this.Ifcolstar){
        this.showcoltoasttext = '取消收藏'
        this.showcoltoast = true
        this.Ifcolstar = false
      }else{
        this.showcoltoast = true
        this.showcoltoasttext = '您已收藏'
        this.Ifcolstar = true
      }
    },
    ccontentemoji (vag) { // 表情解析
      let that = this
      return vag.replace(/\[[\u4E00-\u9FA5]{1,3}\]/gi, function (word) { // 转表情图片
              let newWord = word.replace(/\[|\]/gi, '')
              let index = that.list.indexOf(newWord)
              return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" width="20px" align="top">`
            })
    }
  },
  computed: { // 计算属性
  },
  watch: {
  }
}
</script>
<style lang="less" scoped>
.time{
    margin-left:52px;
    font-weight:lighter;
    margin-top:3px;
    color:#808080;
    font-size:17px;
}
.com_content{
    margin:3px;
    text-indent:2em;
    font-size:14px;
}
.com_bottom{
    margin-top:5px;
}
.com_bottom .useful{
    float: right;
    font-size: 10px;
    padding: 0 12px;
    text-align: center;
    line-height: 20px;
    border-radius: 10px;
    color: #999999;
    border: 1px solid #999999;
}
.com_bottom .useful.usefulClick {
    color: #F32D27;
    border: 1px solid #F32D27;
}
.hover {
  color: #ee3f4d;
}
</style>
