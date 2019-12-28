<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-bottom="0">
      <x-header slot="header" class="vux-scroller-header">小村家事</x-header>
      <div>
        <panel :list="guidelists" type="4" @on-click-item="openguide"></panel>
      </div>
    </view-box>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage">指南详细</x-header>
          <group label-width="4em" label-margin-right="1.5em">
            <cell title="名称" value="<示例>政府投资项目建议书审批" value-align="left" ></cell>
            <cell title="类型" value="便民服务" value-align="left" ></cell>
            <cell title="发布时间" value="2018-11-01 18:58:21" value-align="left" ></cell>
            <cell-box>
              测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </cell-box>
          </group>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import { XHeader, ViewBox, Panel, Popup, TransferDom, Group, Cell, CellBox } from 'vux'
export default {
  name: 'workguide', // 小村家事
  directives: {
    TransferDom
  },
  components: { XHeader, ViewBox, Panel, Popup, Group, Cell, CellBox }, // 注册组件
  data () { // 局内数据
    return {
      show: false,
      popinfo: {},
      guidelists: [
        {
          guideinfo: {},
          title: '<示例>政府投资项目建议书审批',
          desc: '便民服务',
          meta: {
            source: '管理员',
            date: '2018-11-01 18:58:21'
          }
        },
        {
          guideinfo: {},
          title: '小村家事',
          desc: '小村家事',
          meta: {
            source: '管理员',
            date: '2018-10-27 18:58:21'
          }
        }
      ]
    }
  },
  methods: { // 方法函数
    openguide (item) { // 显示弹窗
      this.show = true
      this.popinfo = item.guideinfo
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
@cell-value-color:#000;
@cell-body-label-color:#999;
</style>
