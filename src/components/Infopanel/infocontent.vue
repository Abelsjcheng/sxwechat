<template>
    <div>
          <div id="desc" style="margin:10px;">
            <ul id="comments_list" v-for="(article,index) in article" :key="index">
                <li class="comments">
                <div class="com_top">
                    <h3 class="title">{{article.title}}</h3>
                    <span class="time">{{article.time}}</span>
                </div>
                <hr>
                <div class="com_content">{{article.text}}</div>
                <hr>
                <div class="com_bottom">
                  <x-button class="useful" mini action-type="button" @click.native="praise">
                      <span class="like_num" >{{article.praisenumber}}</span>点赞
                  </x-button>
                </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { XButton } from 'vux'
export default {
  name: 'infocontent',
  components: { XButton },
  data () {
    // 点赞
    // $("#comments_list li.comments .useful").click(function(){
    //     var $likeNum = $(this).find('.like_num');
    //     var num = +$likeNum.text()
    //     if(!$(this).hasClass('usefulClick')){
    //       $(this).addClass('usefulClick');
    //       $likeNum.text(++num);
    //     }else{
    //       console.log("tag has usefulClick");
    //     }
    // });
    return {
      commentText: '',
      uname: '王李沙',
      article: [
        {
          title: '测试标题',
          time: '2019-8-23 20:38:35',
          text: '正文测试:假如我们一路有默契，那时光再长又有什么关系。我喜欢有感觉的文字。写的现实而温暖。带上你的耳机闭上眼睛来静静聆听这篇《就让我们，晚点在一起。然后一辈子。》',
          praisenumber: '2',
          cuname: '王李沙', // 评论人
          runame: '施景程', // 回复人
          ccontent: '评论测试',
          rccontent: '回复评论测试'
        }
      ]
    }
  },
  props: ['show'],
  methods: {
    backpage () { // 关闭弹窗
      this.showpop = false
    },
    addComment: function () {
      this.$emit('submit', this.commentText)
      this.commentText = ''
    },
    canelComment: function () {
      this.$emit('canel')
      this.commentText = ''
    }
    // praise () {
    //   this.praisenumber = praisenumber + 1
    // }
  },
  computed: {
    listenshow () {
      return this.show
    }
  },
  watch: {
    listenshow (vag) {
      this.showpop = vag
    }
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
</style>
