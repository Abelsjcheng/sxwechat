<template>
  <div style="height:100%;">
    <x-header class="vux-scroller-header">项目公开</x-header>
    <scroller lock-x scrollbar-y use-pullup use-pulldown @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" ref="scroller" height="-46" v-model="status">
      
      <div class="box2">
        <p style="padding-top:500px">
          <popover placement="top" style="margin: 20px;" >
            <div slot="content" class="popover-demo-content">
              hello world
            </div>
          <button class="btn btn-default">111</button>
          </popover>
        </p>
        <p v-for="(i,index) in n" v-bind:key="index">placeholder {{i}}</p>

      </div>
      <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
        <span v-show="status.pullupStatus === 'loading'"><load-more tip="正在加载"></load-more></span>
      </div>
      <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
        <span v-show="status.pulldownStatus === 'loading'"><load-more ></load-more></span>
      </div>
    </scroller>
  </div>
</template>
<script>
import { Scroller, XHeader, LoadMore, Popover } from 'vux'
export default {
  name: 'project', // 项目公开
  components: { Scroller, XHeader, LoadMore, Popover }, // 注册组件
  data () { // 局内数据
    return {
      n: 10,
      status: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      }
    }
  },
  methods: { // 方法函数
    loadMore () {
      setTimeout(() => {
        this.n += 10
        setTimeout(() => {
          this.$refs.scroller.donePullup() // 设置上拉刷新操作完成，在数据加载后执行
        }, 10)
      }, 2000)
    },
    refresh () {
      setTimeout(() => {
        this.n = 10
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scroller.donePulldown() // 	设置下拉刷新操作完成，在数据加载后执行
          }, 10)
        })
      }, 2000)
    }
  },
  ready () {
    this.$nextTick(() => {
      this.$refs.scroller.reset()
    })
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
.quan-headbg{
  position:relative;
  width:100%;
  background-image: url("../../assets/img/pyqtt.jpg");
  background-size:cover;
  display:block;
  height: 260px;
}
.quan-headerpro{
  margin-top: 210px;
  margin-right: 20px;
  float: right;
  border-radius: 6px;
}
.quan-headername{
  color: #fff;
  margin-top: 230px;
  margin-right: 20px;
  float: right;
}
</style>
