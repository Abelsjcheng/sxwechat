<template>
  <div id="desc" style="margin:10px;">
    <ul id="comments_list">
      <li class="comments">
        <div class="com_top">
          <h3 class="title">{{info.title}}</h3>
          <span class="time">{{info.reldate}}</span>
        </div><hr>
        <div class="com_content">{{info.content}}</div><hr>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'infocontent',
  components: {},
  props: ['infocontent'], // 定义父组件向子组件传递的对象
  data () {
    return {
      commentText: '',
      uname: '王李沙',
      info: this.infocontent
    }
  },
  methods: {
  },
  computed: {
    listeninfocontent () { 
      return this.infocontent; // 监听父组件点击其他信息 并更新父组件向子组件传递的值
    }
  },
  watch: {
    listeninfocontent (vag) {
      this.info = vag // 将更新的信息赋值给当前页面变量进行存储
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
