<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="90px" body-padding-bottom="0">
      <div slot="header" class="vux-scroller-header">
          <x-header>今日党员</x-header>
          <search
            v-model="value"
            top="46px"
            @on-focus="onFocus"
            ref="search"></search>
      </div>
      <div style="padding: 10px 5px;">
      </div>
    </view-box>
    <div v-transfer-dom>
      <popup v-model="showwork" position="right" width="100%">
        <div style="height:100%;">
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage"></x-header>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="showtime"  width="100%">
          <inline-calendar
            ref="calendar"
            class="inline-calendar-demo"
            v-model="data"
            @on-select-single-date="selectdata"
            >
            </inline-calendar>
      </popup>
    </div>
  </div>
</template>
<script>
import { XHeader, ViewBox, Popup, TransferDom, Search, InlineCalendar } from 'vux'
export default {
  name: 'partyactivity', // 党员活动
  directives: {
    TransferDom
  },
  components: { XHeader, ViewBox, Popup, Search, InlineCalendar }, // 注册组件
  data () { // 局内数据
    return {
      showwork: false,
      showtime: false,
      value: '',
      data: 'TODAY'
    }
  },
  methods: { // 方法函数
    openguide (item) { // 显示弹窗
      this.showwork = true
    },
    backpage () { // 关闭弹窗
      this.showwork = false
    },
    onFocus () {
      this.$refs.search.setBlur()
      this.showtime = true
    },
    selectdata (vag) {
      this.value = vag
    },
    getpartywork () {
      this.$nextTick(() => { // 等待html渲染结束
        this.value = this.data
        this.showtime=false
      })
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数
    this.getpartywork()
  }
}
</script>
<style lang="less" scoped>

</style>
