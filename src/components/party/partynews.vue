<template>
  <div>
    <!-- 党建新闻页面待开发 -->
    <view-box ref="viewBox">
      <x-header slot="header">党建新闻</x-header>
      <panel :list="list" type="4"></panel>
      <load-more tip="正在加载"></load-more>
      <router-view></router-view>
    </view-box>
  </div>
</template>
<script>
import { Panel, LoadMore, ViewBox, XHeader } from 'vux'
export default {
  name: 'partynews', // 党建新闻
  components: { Panel, LoadMore, ViewBox, XHeader }, // 注册组件
  data () { // 局内数据
    return {
    }
  },
  methods: { // 方法函数
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
