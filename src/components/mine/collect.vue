<template>
    <div>
        <!-- 我的收藏页面待完成 -->
        <view-box>
           <div slot="header">
                <x-header :left-options="{backText: ''}" style="background-color:rgba(200,250,250,0.2);">
                    <div style="color:#212121;font-family:'华文行楷'">我的收藏</div>
                </x-header>
            </div>
            <!--上拉刷新和下拉加载-->
            <scroller lock-x scrollbar-y use-pullup use-pulldown @on-pullup-loading="loadMore" @on-pulldown-loading="refresh" @on-scroll="onscroll" ref="scrller" height="-46" v-model="status">
                <div>
                    <panel :list="list" type="5" style="margin-top:0px;"></panel>
                </div>
                <!--上拉刷新-->
                <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
                    <span v-show="status.pullupStatus === 'loading'"><load-more tip="正在加载"></load-more></span>
                </div>
                <!--下拉加载-->
                <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pullup-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
                    <span v-show="status.pulldownStatus === 'loading'"><load-more tip="正在加载"></load-more></span>
                </div>
            </scroller>
        </view-box>
    </div>
</template>
<script>
import { ViewBox, XHeader, Panel, Scroller, LoadMore } from 'vux'
export default {
  name: 'collect', // 我的收藏
  components: { ViewBox, XHeader, Panel, Scroller, LoadMore }, // 注册组件
  data() {
      return {
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
      }
    }
  },
  methods: {
      click (key) {
          console.log(key)
      },
      loadMore () { // 上拉刷新
          settimeout(() => {
              this.$nextTick(() => {
                  settimeout(() => {
                      this.$refs.scroller.donePullup() // 设置上拉刷新操作完成，在数据加载后执行
                  },10)
              })
          },2000)
      },
      refresh () { // 下拉加载
          settimeout(() => {
              this.$nextTick(() => {
                  settimeout(() => {
                      this.refs.scroller.donePulldown() // 设置下拉加载操作完成后，在数据加载后执行
                  },10)
              })
          },2000)
      },
      onscroll (pos) { // 页面滚动触发函数
          if (this.openwindowshow.pop){
              console.log(1)
              this.openwindowshow.pop=false
          }else if(thisopenwindowshow.inputshow){
              this.inputcomment.blur()
          }
      }
  },
  computed: {
  },
  mounted() { // 初始化函数
  // 根据手机手机屏幕，获取图片高宽
    this.imgWidth = parseInt ((Number(window.screen.width) - 140 ) / 3) + 'px'
  },
  watch: {

  }
}
</script>
<style lang="less" scoped>
.weui-loadmore{
    margin: auto auto;
}
</style>
