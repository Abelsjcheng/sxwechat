<template>
    <!-- 旅游、休闲、农家乐页面待开发 -->
    <div style="height:100%;background:rgba(002,121,181,0.3);">
      <view-box ref="viewBox">
        <div slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
          <x-header style="background-color:rgba(250,250,250,0.2);color:#212121;">
            <div style="color:#212121;font-family:'华文行楷'">长沙县欢迎您！</div>
          </x-header>
        </div>
        <div id="content" style="margin:8px;margin-top:40px;">
        <!-- 农家乐部分 -->
        <div>
          <div id="subtitle">
            <span>农家乐
              <a href="http://www.360doc.com/content/16/1002/23/34253878_595400606.shtml" style="display:block;float:right">了解更多...</a>
            </span>
          </div>
          <div style="float:left;width:46%;margin:5px;">
            <a href="http://www.cschenwu.cn/#page1">
              <img src="http://www.0731xsxx.com/UploadFile//QQ%E6%88%AA%E5%9B%BE20140812083146.jpg" style="width:100%;" alt="">
              <span>
                辰午山庄
              </span>
            </a>
          </div>
          <div style="float:left;width:46%;margin:5px;">
            <a href="https://baike.so.com/doc/3455498-3636051.html">
              <img src="http://tc.sinaimg.cn/maxwidth.800/tc.service.weibo.com/mmbiz_qpic_cn/921ba06b4b0d830cc878098a71013cc4.jpg" style="width:100%;" alt="">
              <span>
                金太阳现代休闲农庄
              </span>
            </a>
          </div>
          <div style="float:left;width:46%;margin:5px;">
            <a href="https://baike.so.com/doc/3057227-3222654.html">
              <img src="https://p1.ssl.qhimg.com/dr/220__/t0127660e496a617375.jpg" style="width:100%;" alt="">
              <span>
                大明山庄
              </span>
            </a>
          </div>
          <div style="float:left;width:46%;margin:5px;">
            <a href="https://baike.so.com/doc/6357602-6571236.html">
              <img src="https://p1.ssl.qhimg.com/dr/270_500_/t01d7f8c1c34b6b36bc.jpg" style="width:100%;" alt="">
              <span>
                千龙湖生态旅游度假村
              </span>
            </a>
          </div>
        </div>
        <!-- 旅游部分 -->
        <div>
          <div id="subtitle">
           <span>旅游
             <a href="http://www.bytravel.cn/view/index2356.html">了解更多...</a>
            </span>
          </div>
          <div style="float:left;width:46%;margin:5px;">
            <a href="https://baike.so.com/doc/6735485-6949864.html">
              <img src="https://c.cncnimg.cn/037/727/cb14_m.jpg" style="width:100%;" alt="">
              <span>
                橘子洲
              </span>
            </a>
          </div>
          <div style="float:left;width:46%;margin:5px;">
            <a href="https://baike.so.com/doc/4753705-4969111.html">
              <img src="https://c.cncnimg.cn/037/709/25d4_m.jpg" style="width:100%;" alt="">
              <span>
                岳麓山
              </span>
            </a>
          </div>
           <div style="float:left;width:46%;margin:5px;">
            <a href="https://baike.so.com/doc/5833974-6046801.html">
              <img src="https://c.cncnimg.cn/044/092/5bc9_m.jpg" style="width:100%;" alt="">
              <span>
                杜甫江阁
              </span>
            </a>
          </div>
          <div style="float:left;width:46%;margin:5px;">
            <a href="https://baike.so.com/doc/24636342-25522946.html">
              <img src="https://c.cncnimg.cn/041/098/f879_m.jpg" style="width:100%;" alt="">
              <span>
                关山古镇
              </span>
            </a>
          </div>
        </div>
          <!-- <dl>
                <div>
                    <dt>农家乐<a href="#" style="display:block;float:right">更多...</a></dt>
                    <dd><a href="#">辰午山庄</a></dd>
                    <dd><a href="#">金太阳现代休闲农庄</a></dd>
                    <dd><a href="#">大明山庄</a></dd>
                    <dd><a href="#">千龙湖生态旅游度假村</a></dd>
                    <dd><a href="#">百果园农庄</a></dd>
                    <dd><a href="#">龙头井农庄</a></dd>
                    <dd><a href="#">和道源山庄</a></dd>
                    <dd><a href="#">新江生态休闲园</a></dd>
                    <dd><a href="#">长沙锦绣生态农庄</a></dd>
                </div>
                 -->
        </div>
        <router-view></router-view>
      <div slot="bottom">
        <a href="http://www.changsha.com.cn/" style="width:100%;background:linear-gradient(to right, #bbf990, #fffff9);font-family:'华文楷体';display:block;float:right;">
          <span style="border-left:3px solid #ff9;display:block;float:right;">去了解更多的旅游资讯......</span>
        </a>
      </div>
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
      show1: false,
      lists: []
    }
  },
  methods: {
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
#content #subtitle span{
  font-family:'华文行楷';
  display:block;
  float:left;
  width:285px;
  background:linear-gradient(to right, #bbf990, #fffff9);
  border-color: #ff0 !important;
  border-bottom:1px solid #feff89;
  border-left:5px solid transparent;
  padding-left:8px;
}
#content #subtitle span a{
  font-family:'华文行楷';
  display:block;
  float:right;
  margin-right:10px;
}
img{
  border-radius:5%;
  height:100px;
}
a{
  text-decoration: none;
  color:#212121;
}
a span{
  font-family:"华文楷体";
  font-size:13px;
}
a:hover{
  color:#CC3300;
  text-decoration:underline;
}
.popup1 {
  width:100%;
  height:100%;
}
</style>
