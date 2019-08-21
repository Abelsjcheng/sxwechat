<template>
    <div style="height:100%;">
        <!-- 我的评论页面待完成 -->
        <view-box>
           <div slot="header">
                <x-header>我的评论</x-header>
            </div>
            <div>
                <!-- <panel :list="list" type="5" style="margin-top:0px;"></panel> -->
            </div>
        </view-box>
    </div>
</template>
<script>
import { ViewBox, XHeader } from 'vux'
export default {
  name: 'comment', // 我的评论
  components: { ViewBox, XHeader }, // 注册组件
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
