<template>
  <div>
    <view-box ref="viewBox">
      <div slot="header" style="position:absolute;width:100%;z-index:100;">
        <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;">美丽乡村</x-header>
      </div>
      <div style="margin-top:46px;">
        <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange">
        </swiper>
        <div>
          <ul>
            <villagepanel v-for="i in 5" :key="i"></villagepanel>
            <!-- <div class="link-top"></div>
            <li class="style">
              <h3><a href="#" target="_blank">颠覆你传统印象的农村</a></h3>
              <i><div class="clear"></div></i>
              <p>计划到2018年各市全面完成县域乡村建设规划编制，到2019年全市实现村庄规划全覆盖，全面推行乡村建设规划许可管理</p>
              <span class="left">2019-08-09</span>
            </li>
            <div class="link-top"></div>
            <li class="style">
              <h3><a href="#" target="_blank">巧做赏花经济</a></h3>
              <i><div class="clear"></div></i>
              <p>4月21日，位于东港区南湖镇樵业子村的紫驭康源油用牡丹基地内，500亩油用牡丹进入盛花期，吸引着骑行爱好者前来观赏</p>
              <span class="left">2019-08-07</span>
            </li>
            <div class="link-top"></div>090-
            <li class="style">
              <h3><a href="#" target="_blank">村规民约成就美丽乡村</a></h3>
              <i><div class="clear"></div></i>
              <p>“爱护环境讲卫生，生活垃圾不乱扔；柴草杂物不乱放，村容整洁心情爽……”</p>
              <span class="left">2019-08-17</span>
            </li>
            <div class="link-top"></div>
            <li class="style">
              <h3><a href="#" target="_blank">优秀代表村民</a></h3>
              <i><div class="clear"></div></i>
              <p>先后被评为“山东省农业旅游示范点”、“济南市十大都市农业园区”，该村支部书记、村主任王臣也被授予“山东省劳动模范”称号。</p>
              <span class="left">2019-08-09</span>
            </li> -->
          </ul>
        </div>
      </div>
    </view-box>
  </div>
</template>

<script>
import villagepanel from '@/components/Infopanel/villagepanel.vue'
import { Swiper, XHeader, ViewBox, } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: require('../../assets/img/village/one.jpg'),
  title: '茶坑'
}, {
  url: 'javascript:',
  img: require('../../assets/img/village/two.jpg'),
  title: '梁启超故居'
}, {
  url: 'javascript:',
  img: require('../../assets/img/village/three.jpg'),
  title: '梁启超纪念馆',
  fallbackImg: '../../assets/img/village/one.jpg'
}]
const urlList = baseList.map((item, index) => ({
  url: '/home_tourism',
  // 转向农家乐旅游信息
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `${item.title}`
}))

export default {
  components: {
    Swiper, villagepanel, XHeader, ViewBox
  },
  ready () {

  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo06_onIndexChange (index) {
      this.demo06_index = index
    }
  },
  data () {
    return {
      demo06_list: urlList,
      demo06_index: 0,
      swiperItemIndex: 1
    }
  }
}
</script>
<style scoped>
     a:hover{
            color:#900;
            text-decoration: underline;
          }
.link-top {
            width: 50%;
            height: 5px;
            /* border-top: solid #cccccc 1px; */
        }
.left {
  font-size: 12px;
  color: #bbbbbb;
  text-align: center;
}
a{
   color:rgb(37, 35, 35);
}
div {
    display: block;
}
p{
    display: block;
    -webkit-margin-before: 2px;
    -webkit-margin-after: 2px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-size: 13px;
}
.style {
    background:#fff;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
