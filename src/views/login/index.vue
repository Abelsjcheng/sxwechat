<template>
    <div style="height:100%;">
        <view-box ref="viewBox">
            <router-view></router-view>
            <tabbar class="vux-demo-tabbar" icon-class="vux-center"  slot="bottom">
                <tabbar-item selected @on-item-click="open('/home')">
                    <img slot="icon" src="../../assets/img/home.png">
                    <span slot="label">用户服务</span>
                </tabbar-item>
                <tabbar-item show-dot @on-item-click="open('/party')">
                    <img slot="icon" src="../../assets/img/party.png">
                    <span slot="label">党建</span>
                </tabbar-item>
                <tabbar-item  @on-item-click="open('/mine')">
                    <img slot="icon" src="../../assets/img/my.png">
                    <span slot="label">我的</span>
                </tabbar-item>
            </tabbar>
        </view-box>
    </div>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'index',
  components: {
    ViewBox, Tabbar, TabbarItem
  },
  data () {
    return {
    }
  },
  methods: {
    open (menupath) {
      this.$router.push(menupath)
    }
  }
}
</script>
<style lang="less">
.weui-tab__panel{
  background-color: #F7F7FA;
}
</style>
