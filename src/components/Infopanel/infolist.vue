<template>
  <div>
    <panel :list="list" type="4" @on-click-item="openpopup"></panel>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%" @on-show="popupshow">
        <div style="height:100%">
          <div class="comment-scroller-header">
            <x-header  :left-options="{preventGoBack: true}" @on-click-back="backpage">公告详情</x-header>
          </div>
          <infocontent :infocontent="content" :commentslist="commentlist" />
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import infocontent from '@/components/Infopanel/infocontent.vue'
import { XHeader, Panel, Popup, TransferDom } from 'vux'

export default {
  name: 'news', // 新闻
  directives: {
    TransferDom
  },
  components: { XHeader, Panel, Popup, infocontent }, // 注册组件
  data () { // 局内数据
    return {
      show: false,
      content: {},
      commentlist: []
    }
  },
  props: ['list'], // 定义父组件向子组件传递的对象
  methods: { // 方法函数
    openpopup (item) { // 显示弹窗
      this.show = true
      this.content = item.infocontent
    },
    backpage () { // 关闭弹窗
      this.show = false
    },
    popupshow () {
      this.axios.get('http://110.53.162.165:5050/api/comment/infoAll', { params: { proid: this.content.poinid, pageSize:5, pageIndex:1 } }).then((res) => {
        this.commentlist = res.data.data
      })
        .catch(function (error) {
          console.log(error)
        })
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

</style>
