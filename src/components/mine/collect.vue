<template>
    <div>
        <!-- 我的收藏页面待完成 -->
        <view-box>
           <div slot="header">
                <x-header :left-options="{backText: ''}">我的收藏</x-header>
            </div>
            <div>
                <panel :list="list" type="5" style="margin-top:0px;"></panel>
            </div>
        </view-box>
    </div>
</template>
<script>
import { ViewBox, XHeader, Panel } from 'vux'
export default {
  name: 'collect', // 我的收藏
  components: { ViewBox, XHeader, Panel }, // 注册组件
  data() {
      return {}
  },
  methods: {

  },
  computed: {

  },
  mounted() {

  },
  watch: {

  }
}
</script>
<style lang="less" scoped>

</style>
