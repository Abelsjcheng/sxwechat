<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-bottom="0">
      <x-header slot="header" class="vux-scroller-header">党员活动</x-header>
      <div style="padding: 10px 5px;">
        <card v-for="list in listactivity" :key="list">
          
          <div slot="header" style="padding: 10px 10px;" @click="openguide(list)">
            <img :src="list.mpic" style="width:100%;display:block;">
            <span>{{list.title}} </span>
          </div>
          <div slot="content" class="card-padding">
            <div class="hd-form-item" >
              <label class="hd-form-item-label">活动类型 </label>
              <span class="hd-form-item-value"> {{list.type}}</span>
            </div>
            <div class="hd-form-item" >
              <label class="hd-form-item-label">活动地点 </label>
              <span class="hd-form-item-value"> {{list.place}}</span>
            </div>
            <div class="hd-form-item" >
              <label class="hd-form-item-label">活动人数 </label>
              <span class="hd-form-item-value"> {{list.number}}</span>
            </div>
            <div class="hd-form-item" >
              <label class="hd-form-item-label">活动时间 </label>
              <span class="hd-form-item-value"> {{list.date}}</span>
            </div>
          </div>
        </card>
      </div>
    </view-box>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div style="height:100%;">
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage"></x-header>
          <h2>{{popcontent.title}} </h2>
          <img :src="popcontent.mpic" style="width:100%;display:block;">
          <group label-width="5em" label-margin-right="1.5em"  >
            <cell title="活动类型" :value="popcontent.type"  ></cell>
            <cell title="活动地点" :value="popcontent.place"  ></cell>
            <cell title="活动人数" :value="popcontent.number"  ></cell>
            <cell title="活动开始时间" :value="popcontent.date"  ></cell>
            <cell title="活动结束时间" :value="popcontent.etime"  ></cell>
            <cell title="活动发起时间" :value="popcontent.pushtime"  ></cell>
            <cell title="活动发起人" :value="popcontent.uname"  ></cell>
            <cell title="活动简介"  ></cell>
            <cell-box v-html="popcontent.sum" style="font-family:'华文楷体';text-indent:2em;">

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
      show: false,
      listactivity: [],
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
      this.listactivity=[]
      this.axios.get('http://110.53.162.165:5050/api/party/listAll?',{params:{vtype:1,pageIndex:1,pageSize:20}}).then((res) =>{
        console.log(res.data)
        for (let i = 0,len=res.data.data.length; i < len; i++){
          this.listactivity.push({
            title: res.data.data[i].hdtitle,
            type: res.data.data[i].hdtype,
            mpic: res.data.data[i].hdpic,
            place: res.data.data[i].hdloc,
            number: res.data.data[i].hdnum,
            etime: res.data.data[i].hdetime,
            date: res.data.data[i].hdbtime,
            pushtime: res.data.data[i].hdadddate,
            uname: res.data.data[i].uname,
            sum:res.data.data[i].hdsum
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
    this.getactlist() // 初始化函数
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
