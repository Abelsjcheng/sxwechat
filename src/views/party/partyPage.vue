<template>
  <div>
    <swiper loop auto :list="swiperlist" :index="listindex" @on-index-change="swiper_onIndexChange">
    </swiper>
    <span class="swiper-title">推送 </span>
    <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false" style="background-color: #fff;">
      <swiper-item><p>义务劳动</p></swiper-item>
      <swiper-item><p>认真学习贯彻习近平南湖重要讲话精神 争当贯彻落实党的十九大精神</p></swiper-item>
      <swiper-item><p>党员值班：某某某</p></swiper-item>
    </swiper>
    <grid :show-lr-borders="false" :show-vertical-dividers="false" style="width:100%"> <!--ios系统不知为什么此处grid宽度会缩短 -->
      <grid-item v-for="menu in menus" :key="menu.id" :label="menu.label" :link="{ path: menu.path}">
        <img slot="icon" :src="menu.img">
      </grid-item>
    </grid>
    <panel header="推荐" :list="list" type="5" @on-click-item="openproject"></panel>
    <card>
      <cell slot="header" link="/party_work">
        <span slot="title" class="cell-pwork-title">党员值班</span>
      </cell>
      <p slot="content" class="card-padding">
        <cell align-items="flex-start" value-align="left">
          <img slot="title" src="../../assets/img/my_head.png" width="90" height="80" style="margin-right: 2em;">
          <div>
            <p>值班党员: 周竖庚 </p>
            <p>党员组名: 新港</p>
            <p>值班地点: 暮云镇居委会二楼办公室</p>
            <p>联系方式: 18874083707 </p>
            <p>值班日期: 2018-07-25</p>
          </div>
        </cell>
      </p>
    </card>
    <div v-transfer-dom>
      <popup v-model="show" position="right" width="100%">
        <div>
          <x-header class="vux-scroller-header" :left-options="{preventGoBack: true}" @on-click-back="backpage">推荐详情</x-header>
          <div>
            <infocontent/>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import infocontent from '@/components/Infopanel/infocontent.vue'
import { Swiper, SwiperItem, Grid, GridItem, Panel, Card, Cell, XHeader, Popup, TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: { Swiper, SwiperItem, Grid, GridItem, Panel, Card, Cell, XHeader, Popup, infocontent },
  data () {
    return {
      show: false,
      listindex: 0,
      swiperlist: [
        { url: '/', img: require('../../assets/img/party/affair1.jpg'), title: '党员开会' },
        { url: '/', img: require('../../assets/img/party/affair2.jpg'), title: '党员开会' },
        { url: '/', img: require('../../assets/img/party/affair3.jpg'), title: '党员开会' }
      ],
      menus: [
        { label: '党建新闻', img: require('../../assets/img/menus/partynews.png'), path: '/party_partynews' }, // 异步加载图片
        { label: '时事政治', img: require('../../assets/img/menus/shishizhenshi.png'), path: '/party_shishizhenshi' },
        { label: '党员活动', img: require('../../assets/img/menus/partyactivity.png'), path: '/party_partyactivity' },
        { label: '扶贫工作', img: require('../../assets/img/menus/helppoor.png'), path: '/party_helppoor' }
      ],
      list: [
        {
          src: '',
          title: '党务公开',
          desc: '第一条　为了贯彻落实党的十九大精神，推动全面从严治党向纵深发展，加强和规范党务公开工作，发展党内民主，强化党内监督，使广大党员更好了解和参与党内事务，动员组织人民群众贯彻落实好党的理论和路线方针政策，提高党的执政能力和领导水平，根据《中国共产党章程》，制定本条例。 　　第二条　本条例所称党务公开，是指党的组织将其实施党的领导活动、加强党的建设工作的有关事务，按规定在党内或者向党外公开',
          url: {
            path: '',
            replace: false
          },
          meta: {
            source: '党建新闻',
            date: '10分钟前',
            other: '置顶'
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
            source: '时事政治',
            date: '10分钟前',
            other: '置顶'
          }
        },
        {
          src: '',
          title: '宁乡“新农村”试验田建设大会',
          desc: '全国人民代表大会（简称为人大、人代会），《中华人民共和国宪法》规定，全国人民代表大会是中华人民共和国最高权力机关。它的常设机关是全国人民代表大会常务委员会。人民代表大会制度是中国的根本政治制度，是中国人民民主专政政权的组织形式，是中国的政体，是社会主义上层建筑的重要组成部分。',
          url: {
            path: '',
            replace: false
          },
          meta: {
            source: '党员活动',
            date: '10分钟前',
            other: '热门'
          }
        }
      ]
    }
  },
  methods: {
    swiper_onIndexChange (index) {
      this.listindex = index
    },
    openproject (item) { // 显示弹窗
      this.show = true
      console.log(item)
    },
    backpage () { // 关闭弹窗
      this.show = false
    }
  }
}
</script>
<style lang="less" scoped>
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;//单行溢出设置
}
.swiper-title{
  float: left;
  height: 30px;
  width:40px;
  line-height:30px;
  text-align:center;
  background-color: #fff;
  color: red;
  font-style:oblique;
  font-weight: bold;
}

.weui-grid{
  padding: 10px 10px;
}
.cell-pwork-title{
  color:red;
  font-weight:bold;
  border-left: 4px solid #ff0707;
  padding-left: 0.3em;
}
.weui-panel /deep/ .weui-media-box__info__meta_extra{
    margin-left: 1em;
    padding-left: 0.4em;
    padding-right: 0.4em;
    color: rgba(2248, 89, 89, 0.95);
    border: 0.5px solid rgba(248, 89, 89, 0.95);
}

</style>
