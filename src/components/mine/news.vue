<template>
    <div style="height:100%;">
        <!-- 我的消息页面待完成 -->
        <view-box>
           <div slot="header">
                <x-header>我的消息</x-header>
            </div>
            <div>
                <panel :list="list" type="5" style="margin-top:0px;color:#200;background:rgba(255,245,205,0.5);"></panel>
            </div>
        </view-box>
    </div>
</template>
<script>
import { ViewBox, XHeader, Panel } from 'vux'
export default {
  name: 'news', // 我的消息
  components: { ViewBox, XHeader, Panel }, // 注册组件
  data() {
      return{

      }
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
