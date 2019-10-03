<template>
  <div style="height:100%;">
    <!-- 党建新闻页面待开发 -->
    <view-box ref="viewBox">
      <div slot="header" style="position:absolute;width:100%;z-index:100;">
        <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;background:#ef0210;">党建新闻</x-header>
      </div>
      <pull-to :top-load-method="refresh" @infinite-scroll="loadmore" :top-config="{stayDistance:90}"  @scroll="onScroll" >
          <div style="padding-top:40px;">
          <panel :list="list" type="5" @on-click-item="openproject"></panel>
          <!-- <load-more tip="正在加载"></load-more> -->
        </div>
        <div class="loading-bar">
            <load-more tip="正在加载"></load-more>
          </div>
        </pull-to>
    </view-box>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage">党建新闻详情</x-header>
          <div id="desc" style="margin:10px;">
            <ul id="comments_list">
              <li class="comments">
                <div class="com_top">
                  <h3 class="title">{{popcontent.title}}</h3>
                  <span class="time">{{popcontent.date}}</span>
                </div><hr>
                <div class="com_content" v-html="popcontent.desc"></div><hr>
              </li>
            </ul>
            <div class="comment-footer">
              <div class="comment-inputcell"> <!--评论输入框 -->
                <input type="text" placeholder="说说你的看法" ref="inputcomment" class="comment-input">
                <aside style="padding: 0 .3rem 0 .5rem;">
                  <i slot="right" class="fa fa-comment-o comment-icon" @click="showemotion()" ></i>
                </aside>
                <aside style="padding: 0 .3rem 0 .5rem;">
                  <i slot="right" class="fa fa-star-o comment-icon" @click="showemotion()" ></i>
                </aside>
                <aside style="padding: 0 .3rem 0 .5rem;">
                  <i slot="right" class="fa fa-share-alt comment-icon" @click="showemotion()" ></i>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import PullTo from 'vue-pull-to'
import { Panel, LoadMore, ViewBox, XHeader, Popup, TransferDom } from 'vux'
export default {
  name: 'partynews', // 党建新闻
  directives: {
    TransferDom
  },
  components: { Panel, LoadMore, ViewBox, XHeader, Popup, PullTo }, // 注册组件1
  data () { // 局内数据
    return {
      title: '',
      show: false,
      list: [],
      popcontent: {}
    }
  },
  methods: { // 方法函数
    refresh (loaded) { // 下拉加载
      setTimeout(() => {
        loaded('done')
      }, 2000)
    },
    loadmore () { // 上拉
      setTimeout(() => {
      }, 1000)
    },
    onScroll (pos) { // 页面滚动触发函数
      if (this.openwindowshow.pop) {
        this.openwindowshow.pop = false
      } else if (this.openwindowshow.inputshow) {
        this.openwindowshow.inputshow = false
      }
    },
    openproject (item) { // 显示弹窗
      this.show = true
      this.popcontent = item // 传递值到poup
      console.log(item)
    },
    backpage () { // 关闭弹窗
      this.show = false
    },
    getprolist:function(){
       this.list = []
      this.axios.get('http://110.53.162.165:5050/api/party/listAll?',{params:{vtype:0,pageIndex:1,pageSize:20 } }).then((res) => {
        console.log(res.data)
        for (let i = 0, len = res.data.data.length; i < len; i++) {
          this.list.push({
            title: res.data.data[i].mtitle,
            src: res.data.data[i].mpic,
            desc: res.data.data[i].mcontent,
            date: res.data.data[i].pushdate,
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
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数
    this.getprolist()
  }
}
</script>
<style lang="less" scoped>
.weui-loadmore{
  margin: auto auto;
}
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
