<template>
  <div>
    <panel :list="list" type="4" @on-click-item="openproject"></panel>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage">公告详情</x-header>
          <div>
            <infocontent :infocontent="content" />
          </div>
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
      content: {}
    }
  },
  props: ['list'], // 定义父组件向子组件传递的对象
  methods: { // 方法函数
    openproject (item) { // 显示弹窗
      this.show = true
      this.content = item.infocontent
    },
    backpage () { // 关闭弹窗
      this.show = false
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
