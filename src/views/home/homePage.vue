<template>
<div>
  <div>
    <card>
      <div slot="content">
        <a class="weather-box">
          <div class="weather-box__bd">
            <h4 style="font-size:40px">{{temp}}°C</h4>
            <span>当前天气:晴</span>
            <p class="weather-box__desc">今日长沙县</p>
          </div>
          <div class="weather-box__ft">
            <img width="120px" src="../../assets/img/4.png">
          </div>
        </a>
      </div>
    </card>
    <grid :cols="3">
      <grid-item v-for="menu in menus" :key="menu.id" :label="menu.label" :link="{ path: menu.path}">
        <img slot="icon" :src="menu.img">
      </grid-item>
    </grid>
    <!-- <group>
      <cell-box></cell-box>
    </group> -->
    <panel header="最新消息" :footer="footer" :list="list" type="5" @on-click-item="opendataAnalysis"></panel>
    <panel header="合作伙伴推送" :footer="footer" :list="partners" type="1"></panel>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage">消息详情</x-header>
          <div>
            <infocontent/>
          </div>
        </div>
      </popup>
    </div>
  </div>
    <modal :show="showModal" :title="'今天的值班党员'" ></modal>
  </div>
</template>
<script>
import modal from '@/components/Infopanel/modal.vue'
import infocontent from '@/components/Infopanel/infocontent.vue'
import { Card, Grid, GridItem, Panel, XHeader, Popup, TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Card, Grid, GridItem, Panel, XHeader, Popup, infocontent, modal
  },
  data () {
    return {
      temp: '',
      showModal: false,
      title: '弹窗标题',
      show: false,
      menus: [
        { label: '村务公开', img: require('../../assets/img/menus/info.png'), path: '/home_info' }, // 异步加载图片
        { label: '数据分析', img: require('../../assets/img/menus/dataAnalysis.png'), path: '/home_dataAnalysis' },
        { label: '暮云圈', img: require('../../assets/img/menus/quan.png'), path: '/home_quan' },
        { label: '小村家事', img: require('../../assets/img/menus/xiaocunEvents.png'), path: '/home_xiaocunEvents' },
        { label: '美丽乡村', img: require('../../assets/img/menus/village.png'), path: '/home_village' },
        { label: '农家乐', img: require('../../assets/img/menus/Tourism.png'), path: '/home_tourism' }
      ],
      list: [
        {
          src: '',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '',
            replace: false
          },
          meta: {
            source: '政策',
            other: '评论 20',
            date: '10分钟前'
          }
        },
        {
          src: '',
          title: '招聘城管协管员',
          desc: '招聘城管协管员。',
          url: {
            path: '',
            replace: false
          },
          meta: {
            source: '公告',
            other: '评论 20',
            date: '10分钟前'
          }
        }
      ],
      partners: [
        {
          src: require('../../assets/img/partners/zhrs.png'),
          title: '长沙社保信息',
          desc: '查询湖南省内五险一金（湖南社保）、查询社保信息；查询社保卡（社会保障卡）办理进度、激活社保卡（社会保障卡）等',
          url: 'http://www.e91job.com/apptest/pages/person/main.jsp?apptype=zhrs&ToolBar=0&checkcode=c031acf8a3354e1892912d0de06dadfc&intype=0&openid=ocP_VskMN-l3bOeacYRzt0-meav8&secondTakeOpenid=secondTakeOpenid'
        },
        {
          src: require('../../assets/img/partners/csgjj.png'),
          title: '长沙公积金查询',
          desc: '本服务由长沙住房公积金管理中心提供',
          url: 'https://wx.csgjj.com.cn/dsbcs/weixin/login.jsp'
        },
        {
          src: require('../../assets/img/partners/csgajj.png'),
          title: '长沙交通违法查询',
          desc: '本服务由长沙交警提供',
          url: 'http://csjj.daxiangw.com/reception/personalcenter/tube'
        }
      ],
      footer: {
        title: '更多',
        url: '/home_partners'
      }
    }
  },
  methods: { // 方法函数
    hideModal() {
      //关闭弹窗
      this.showModal = false
    },
    showWindow() {
      this.showModal = false
    },
    changeRoute() {
      this.$router.push('/views/home/homgpage');
    },
    opendataAnalysis (item) { // 显示弹窗
      this.show = true
      console.log(item)
    },
    backpage () { // 关闭弹窗
      this.show = false
    },
    gettemp:function () {
      this.temp = ''
      this.axios.get('http://110.53.162.165:5050/api/rivervis/commentCount').then((res) =>{
        console.log(res.data)
        this.temp = res.data.data[0].temp
      })
    }
  },
  mounted () {
    this.gettemp()
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';

.weather-box{
  padding: 15px;
  display: flex;
  align-items: center;
}
.weather-box__bd{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  min-width: 0;
}
.weather-box__desc{
  color: #999;
  font-size: 13px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
