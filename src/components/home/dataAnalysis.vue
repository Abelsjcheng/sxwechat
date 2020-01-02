<template>
<!-- 数据分析 -->
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0" >
      <div slot="header" class="vux-scroller-header">
        <x-header>数据分析</x-header>
      </div>
        <div class="card">
          <div class="card one" style="background:#299;" @click="showHideOnBlur1 = true">
            <span>性别比例</span>
         </div>
          <div class="card one" style="background:#688;" @click="showHideOnBlur2 = true">
            <span>低保户</span>
          </div>
          <div class="card tow" style="background:#299;" @click="showHideOnBlur3 = true">
            <span>新增人口</span>
          </div>
          <div class="card tow" style="background:#688;" @click="showHideOnBlur4 = true">
            <span>年龄段</span>
          </div>
          <div class="card bottom" style="background:#299;" @click="showHideOnBlur5 = true">
            <span>复原军人的比例</span>
          </div>
      </div>
    </view-box>

    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur1" class="dialog-demo" hide-on-blur>
        <div>
          <Sexchart />
        </div>
        <div @click="showHideOnBlur1=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur2" class="dialog-demo" hide-on-blur>
        <div>
          <dibaochart />
        </div>
        <div @click="showHideOnBlur2=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur3" class="dialog-demo" hide-on-blur>
        <div>
          <newAddchart />
        </div>
        <div @click="showHideOnBlur3=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur4" class="dialog-demo" hide-on-blur>
        <div>
          <Agechart />
        </div>
        <div @click="showHideOnBlur4=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur5" class="dialog-demo" hide-on-blur>
        <div>
          <RecovSoliderchart />
        </div>
        <div @click="showHideOnBlur5=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<script>

import Sexchart from '../../components/home/datachart/Sexchart.vue' // 性别
import dibaochart from '../../components/home/datachart/dibaochart.vue' // 低保
import newAddchart from '../../components/home/datachart/newAddchart.vue' // 饼图
import Agechart from '../../components/home/datachart/Agechart.vue' // 饼图
import RecovSoliderchart from '../../components/home/datachart/RecovSoliderchart.vue' // 
import { XHeader, ViewBox, Popup, XDialog, Cell, VChart, VPie, VBar, VLine, VArea, VTooltip, VLegend, VScale, TransferDom } from 'vux'
export default {
  name: 'dataAnalysis', // 数据分析
  directives: {
    TransferDom
  },
  components: { XHeader, ViewBox, Popup, XDialog, Cell, Sexchart, dibaochart, newAddchart, Agechart, RecovSoliderchart, VChart, VPie, VBar, VLine, VArea, VTooltip, VLegend, VScale }, // 注册组件
  data () { // 局内数据
    return {
      // dataAnalysis
      lists: [],
      show: false,
      showModal: false,
      showHideOnBlur1: false,
      showHideOnBlur2: false,
      showHideOnBlur3: false,
      showHideOnBlur4: false,
      showHideOnBlur5: false,
    }
  },
  methods: { // 方法函数
    backpage () { // 关闭弹窗
      this.show = false
    },
    hideModal() {
      //关闭弹窗
      this.showModal = false
    },
    showWindow() {
      this.showModal = false
    },
    changeRoute() {
      this.$router.push('/welcom/page2');
    },
    showdata() {
      this.showModal = true
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数
    // this.getinfo() // 取项目信息
    // this.dataAnalysis
    lists = this.UnBuiltLists
    this.getdataSex()
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/close';
.card{
  height: 85px;
  width: 97%;
  float:left;
  margin: 3px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 8px;
  span{
    text-align: center;
    line-height: 100px;
    height: 100px;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    display: block;
    position: relative;
    top:50%;
    transform:translateY(-50%);
  }
}
div{
  text-align: center;
  vertical-align: middle;
}

.dialog-demo {
  .weui-dialog{
    border-radius: 10px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}

</style>
