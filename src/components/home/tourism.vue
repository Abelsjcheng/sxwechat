<template>
  <div style="height:100%;">
    <!-- 扶贫工作页面待写 -->
    <view-box ref="viewBox" body-padding-bottom="0">
      <div slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
          <x-header>
            <div style="color:#fff;font-family:'华文行楷'">长沙县欢迎您！</div>
          </x-header>
        </div>
      <div style="padding: 10px 5px;margin-top:35px">
        <card v-for="list in listtourism" :key="list">
          <div slot="header" style="padding: 10px 10px;" @click="openguide(list)">
            <img :src="list.mpic" style="width:32%;display:block;float:left">
            <span style="display:block;float:left;margin-left:10px">{{list.title}} </span>
            <br><br>
            <p style="text-indent:2em" v-html="list.content"></p>
          </div>
        </card>
      </div>
    </view-box>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div style="height:100%;">
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage"></x-header>
          <h2 style="text-align:center">{{popcontent.title}} </h2>
          <img :src="popcontent.mpic" style="margin:10px;width:95%;display:block;">
          <group label-width="5em" label-margin-right="1.5em"  >
            <cell title="负责人" :value="popcontent.uname"  ></cell>
            <cell title="建立日期" :value="popcontent.pushdate"  ></cell>
            <cell title="联系方式" value="15875629854"></cell>
            <cell title="总阅读数" :value="popcontent.number"></cell>
            <cell title="备注" :value="popcontent.note"  ></cell>
            <cell title="简介"></cell>
            <cell-box style="font-family:'华文楷体';text-indent:2em;" v-html="popcontent.content">
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
  name: 'tourism', // 旅游资讯 农家乐
   directives: {
    TransferDom
  },
  components: { XHeader, ViewBox, Popup, Card, Cell, Group, CellBox }, // 注册组件
  data () { // 局内数据
    return {
      show: false,
      listtourism: [],
      popcontent:{}
    }
  },
  methods: { // 方法函数
 openguide (item) { // 显示弹窗
    this.popcontent=item;
      this.show = true
    },
    backpage () { // 关闭弹窗
      this.show = false
    },
    getactlist:function () {
      this.listtourism=[]
      this.axios.get('http://110.53.162.165:5050/api/beaCountry/ListBeaCountry?',{params:{vtype:3,pageIndex:1,pageSize:20}}).then((res) =>{
        console.log(res.data)
        for (let i = 0,len=res.data.data.length; i < len; i++){
          this.listtourism.push({
            title: res.data.data[i].mtitle,
            content: res.data.data[i].mcontent,
            mpic: res.data.data[i].mpic,
            number: res.data.data[i].greadtotal,
            note: res.data.data[i].note,
            pushdate: res.data.data[i].pushdate,
            uname: res.data.data[i].uname,
            // tel: res.data.data[i].tel
          })
        } // 请求成功函数    
        }, function () { 
          console.log('请求失败处理'); // 请求失败函数
      })
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数
    this.getactlist()
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
