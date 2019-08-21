<template>
    <!-- 旅游、休闲、农家乐页面待开发 -->
    <div style="height:100%;">
      <view-box ref="viewBox">
        <div slot="header" class="vux-scroller-header">
          <x-header style="background-color:rgba(250,250,250,0.3);color:#212121;">
            <div style="color:#212121;font-family:'华文行楷'">长沙县欢迎您！</div>
            </x-header>
          </div>
          <div id="acd" style="width:100%;background-color:#adedea;">
            <div style="position: relative; width: 100%;height:30%">
              <a href="https://baike.so.com/doc/6735485-6949864.html">
                <img src="https://c.cncnimg.cn/037/727/cb14_m.jpg" width="100%" alt="加载失败...">
                <span>长沙橘子洲
                  <span>又称橘洲、水陆洲，它位于长沙市区对面的湘江中流，是湘江下游众多冲积沙洲之一,介名山城市间，浮袅袅凌波上。</span>
                </span>
              </a>
            </div>
            <div style="position: relative; width: 100%;">
              <a href="https://changsha.cncn.com/jingdian/yuelushan/">
                <img src="https://c.cncnimg.cn/037/709/25d4_m.jpg" width="100%" alt="加载失败...">
                <span>岳麓山
                  <span>位于古城长沙的湘江两岸，总面积 36平方公里，由麓山、天马山、桃花岭、石佳岭四个景区及新民学会旧址、南津城士城头二景点组成。</span>
                </span>
              </a>
            </div>
            <div style="position: relative; width: 100%;">
              <a href="https://changsha.cncn.com/jingdian/dufujiangge/">
                <img src="https://c.cncnimg.cn/044/092/5bc9_m.jpg" width="100%" alt="加载失败...">
                <span>杜甫江阁
                  <span>江阁登临，可近观橘洲风景，远眺麓山烟云，饱览长沙山水洲城的美丽姿容,江阁漫步，可在绿荫葱茏中品读诗圣佳作，观赏名家书法。</span>
                </span>
              </a>
            </div>
            <div style="position: relative; width: 100%;">
              <a href="https://changsha.cncn.com/jingdian/hunandajuyuan/">
                <img src="https://c.cncnimg.cn/044/717/8873_m.jpg" width="100%" alt="加载失败..." @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error">
                <span>湖南大剧院
                  <span>湖南大剧院隶属湖南省文化厅，是目前湖南文艺行业里一家高档次 、大规模的综合性多功能大型文艺演出场所之一。</span>
                </span>
              </a>
            </div>
            <div style="position: relative; width: 100%;">
              <a href="https://changsha.cncn.com/jingdian/guanshan/">
                <img src="https://c.cncnimg.cn/041/098/f879_m.jpg" width="100%" alt="加载失败...">
                <span>关山古镇
                  <span>走进关山古镇，就像走进了一段朴实的诗歌。整齐的仿古的古民居在绿色的田野上铺展开来。</span>
                </span>
              </a>
            </div>
            <div style="position: relative; width: 100%;">
              <a href="https://changsha.cncn.com/jingdian/mawangduihanmuyizhi/">
                <img src="https://p1.cncnimg.cn/jdpic/17/16015_m.jpg" width="100%" alt="加载失败...">
                <span>马王堆汉墓遗址
                  <span>马王堆汉墓遗址中，出土了著名的马王堆女尸，遗址在长沙市东郊马王堆医院内，三座墓坑中，一、二号墓坑已填塞，对外开放的只是三号墓坑和墓坑上的展览室。</span>
                </span>
              </a>
            </div>
          </div>
          <router-view></router-view>
      </view-box>
    </div>
</template>
<script>
import { XHeader, ViewBox } from 'vux'
export default {
  name: 'tourism', // 旅游、休闲、农家乐
  components: { XHeader, ViewBox }, // 注册组件
  data () { // 局内数据
    return {
      list: [ ]
    }
  },
  methods: { // 方法函数
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数

  }
}
</script>u
<style lang="less" scoped>
 .ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
#acd a span{
  text-decoration: none;
  font-size:18px;
  color:#addfff;
  position: absolute;
  display:block;
  position: absolute;
  font-weight: bold;
  width:100%;
  top:30%;
  transform:translateX(38%);
  font-family:'华文仿宋';
}
#acd a span span{
  display:block;
  font-size:12px;
  color:#fefefe;
  font-weight: 100;
  font-family:'华文行楷';
  top:40px;
  left:-58%;
  width:80%;
}
#acd a:hover{
  color:#CC3300;
  text-decoration:underline;
}
</style>
