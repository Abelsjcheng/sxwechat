<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-bottom="0">
      <x-header slot="header" class="vux-scroller-header">党员活动</x-header>
      <div style="padding: 10px 5px;">
        <card >
          <div slot="header" style="padding: 10px 10px;" @click="openguide('a')">
            <img src="../../assets/img/party/affair1.jpg" style="width:100%;display:block;">
            <span>长沙高校计算机学术研讨会 </span>
          </div>
          <div slot="content" class="card-padding">
            <div class="hd-form-item" >
              <label class="hd-form-item-label">活动类型 </label>
              <span class="hd-form-item-value"> 会议</span>
            </div>
            <div class="hd-form-item" >
              <label class="hd-form-item-label">活动地点 </label>
              <span class="hd-form-item-value"> 长沙市政府</span>
            </div>
            <div class="hd-form-item" >
              <label class="hd-form-item-label">活动人数 </label>
              <span class="hd-form-item-value"> 14</span>
            </div>
            <div class="hd-form-item" >
              <label class="hd-form-item-label">活动时间 </label>
              <span class="hd-form-item-value"> 2017-05-20</span>
            </div>
          </div>
        </card>
      </div>
    </view-box>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div style="height:100%;">
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage"></x-header>
          <h2>长沙高校计算机学术研讨会 </h2>
          <img src="../../assets/img/party/affair1.jpg" style="width:100%;display:block;">
          <group label-width="5em" label-margin-right="1.5em">
            <cell title="活动类型" value="会议"  ></cell>
            <cell title="活动地点" value="长沙市市政府"  ></cell>
            <cell title="活动人数" value="14"  ></cell>
            <cell title="活动开始时间" value="2018-11-01 18:58:21"  ></cell>
            <cell title="活动结束时间" value="2018-11-01 18:58:21"  ></cell>
            <cell title="活动发起时间" value="2018-11-01 18:58:21"  ></cell>
            <cell title="活动发起人" value="管理员"  ></cell>
            <cell title="活动简介"  ></cell>
            <cell-box>
              全国人民代表大会（简称为人大、人代会），《中华人民共和国宪法》规定，全国人民代表大会是中华人民共和国最高权力机关。它的常设机关是全国人民代表大会常务委员会。人民代表大会制度是中国的根本政治制度，是中国人民民主专政政权的组织形式，是中国的政体，是社会主义上层建筑的重要组成部分。
            </cell-box>
          </group>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import { XHeader, ViewBox, Popup, TransferDom, Card, Cell, Group, CellBox } from 'vux'
export default {
  name: 'partyactivity', // 党员活动
  directives: {
    TransferDom
  },
  components: { XHeader, ViewBox, Popup, Card, Cell, Group, CellBox }, // 注册组件
  data () { // 局内数据
    return {
      show: false
    }
  },
  methods: { // 方法函数
    openguide (item) { // 显示弹窗
      this.show = true
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
.card-padding{
  padding: 10px 15px;
  font-size: .9em;
  text-align: right;
  color: #999;
  line-height: 2;
}
.hd-form-item{
  overflow: hidden;
  .hd-form-item-label{
    float: left;
    margin-right: 1em;
    min-width: 4em;
    color: #999;
    text-align: justify;
    text-align-last: justify;
  }
  .hd-form-item-value{
    display: block;
    overflow: hidden;
    word-break: normal;
    word-wrap: break-word;
  }
}
</style>
