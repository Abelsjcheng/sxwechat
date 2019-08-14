<template>
  <div>
    <!-- 扶贫工作页面待写 -->
    <div id="header" style="margin:2px;border-bottom:2px solid #ff0220 !important;background:rgba(255,192,255,0.3)">
        <div id="logo">
          <img style="margin:5px;width:20%;height:44px;" src="../../assets/img/menus/helppoor.png" alt="">
          <span style="display:block;float:right;margin-right:7%;font-family:'华文行楷';color:#212121;font-size:25px;letter-spacing:5px">扶贫工作
            <span style="display:block;float:right;font-size:13px;margin-top:30px;margin-left:-10px;font-family:'楷体'">--长沙县</span>
          </span>
        </div>
    </div>
    <div>
      <div id="content" style="margin:8px;">
            <dl>
                <div>
                    <dt>扶贫政策<a href="#" style="display:block;float:right">更多...</a></dt>
                    <dd><a href="#">教育扶贫</a></dd>
                    <dd><a href="#">医疗救助</a></dd>
                    <dd><a href="#">危房改造</a></dd>
                    <dd><a href="#">兜底保障</a></dd>
                </div>
                <div>
                    <dt>扶贫优秀案例<a href="#" style="display:block;float:right">更多...</a></dt>
                    <dd><a href="http://www.stdaily.com/kwtwpai/ktp/2016-11/15/content_328860.shtml">长沙县积极实施教育扶贫 不让一个学生因贫失学</a></dd>
                    <dd><a href="#">长沙县积极实施教育扶贫 不让一个学生因贫失学</a></dd>
                    <dd><a href="#">长沙县积极实施教育扶贫 不让一个学生因贫失学</a></dd>
                </div>
                <div>
                    <dt>扶贫新闻<a href="#" style="display:block;float:right">更多...</a></dt>
                    <dd><a href="#">关于2019年第二批特色种养业到户</a></dd>
                    <dd><a href="#">湖南省长沙市扶贫办一行来临交流学习脱贫攻坚工作</a></dd>
                    <dd><a href="#">关于组织申报2019年省级重点产业扶贫项目的通知</a></dd>
                </div>
                <div>
                    <dt>扶贫项目<a href="#" style="display:block;float:right">更多...</a></dt>
                    <dd><a href="#">关于拨付2019年第二季度扶贫小额信贷财政贴息和雨露计划（补充）资金的公示</a></dd>
                    <dd><a href="http://www.csx.gov.cn/csx/zwgk/xxgkml/bmxxgkml/xnlj/fpzjap56/2543641/index.html">长沙县2018年农村饮水安全巩固提升工程第一批省级投资计划分解公示</a></dd>
                    <dd><a href="http://www.csx.gov.cn/csx/zwgk/xxgkml/bmxxgkml/xnlj/fpzjap56/2541601/index.html">2017年县级产业精准扶贫项目立项公示</a></dd>
                </div>
                <div>
                    <dt>扶贫需求<a href="#" style="display:block;float:right">更多...</a></dt>
                    <dd><a href="#">某某村农产品堆积滞销</a></dd>
                    <dd><a href="#">某某村农产品堆积滞销</a></dd>
                    <dd><a href="#">某某村农产品堆积滞销</a></dd>
                </div>
            </dl>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'helppoor', // 扶贫工作
  components: {}, // 注册组件
  data () { // 局内数据
    return {
    }
  },
  methods: { // 方法函数
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
dt{
  font-family:'华文楷体';
  font-weight: bold;
  color:#212121;
  background:linear-gradient(to bottom, #ff0000, #ff9999);
  border-color: #ff0220 !important;
  border-bottom:1px solid #1e5b6b;
  border-left:5px solid transparent;
  padding-left:8px;
}
dd{
  border-left:1px solid #ff5555;
  border-bottom:1px dashed #ff3333
}
a{
  text-decoration: none;
  color:#212121;
}
a:hover{
  text-decoration: underline
}
</style>
