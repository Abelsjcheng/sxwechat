<template>
    <div style="height:100%;">
        <view-box ref="viewBox">
            <router-view></router-view>
            <tabbar class="vux-demo-tabbar" icon-class="vux-center"  slot="bottom">
                <tabbar-item selected :link="{ path: '/home'}">
                    <img slot="icon" src="../../assets/img/home.png">
                    <span slot="label">用户服务</span>
                </tabbar-item>
                <tabbar-item show-dot :link="{ path: '/party'}">
                    <img slot="icon" src="../../assets/img/party.png">
                    <span slot="label">党建</span>
                </tabbar-item>
                <tabbar-item  :link="{ path: '/mine'}">
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
  }
}
</script>
<style lang="less">
.weui-tab__panel{
  background-color: #F7F7FA;
}
</style>
