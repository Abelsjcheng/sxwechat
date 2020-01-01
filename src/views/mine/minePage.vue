<template>
  <div>
    <card>
      <div slot="header" style="margin-top: 10px;" @on-click-item ="showinfo">
        <cell title="施景程"  @click.native="show = true" is-link>
            <img slot="icon" src="../../assets/img/my.png" style="border-radius: 50%;width: 3rem;">
        </cell>
      </div>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>20</span>
          <br/>
          动态
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
          评论
        </div>
        <div>
          <span>5</span>
          <br/>
          获赞
        </div>
      </div>
    </card>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item v-for="menu in menus" :key="menu.id" :label="menu.label" :link="{ path: menu.path}">
        <i slot="icon" :class="menu.icon" :style="menu.style"></i>
      </grid-item>
    </grid>
    <group>
      <div @on-item-click ="shownews">
        <cell title="我的消息" @click.native="show1 = true" is-link>
          <i slot="icon" class="fa fa-commenting menu-cell-icon"></i>
        </cell>
      </div>
      <div @on-citem-click ="showComp">
        <cell title="投诉" @click.native="show2 = true" is-link>
          <i slot="icon" class="fa fa-pencil fa-fw"></i>
        </cell>
      </div>
      <div>
        <cell title="账号换绑"  @click.native="showAlert = true" is-link>
          <i slot="icon" class="fa fa-phone-square menu-cell-icon"></i>
        </cell>
      </div>
    </group>
    <group>
      <cell title="退出" is-link>
        <i slot="icon" class="fa fa-power-off menu-cell-icon"></i>
      </cell>
    </group>
    <myinfo :show="show" v-on:closepop="show =$event"/>
    <mynews :show1="show1" v-on:closepop1="show1 =$event"/>
    <complaint :show2="show2" :title="'投诉建议'" v-on:closepop2="show2 =$event"/>
    <!-- 解绑确认 -->
    <actionsheet v-model="showAlert" :menus="menus3" @on-click-menu="onDelete" show-cancel></actionsheet>
    <!-- 解绑成功后的提示 -->
    <toast v-model="showSuccess">{{'解绑成功'}}</toast>

  </div>
</template>
<script>
import myinfo from '../../components/mine/myinfo.vue'
import mynews from '../../components/mine/mynews.vue'
import complaint from '../../components/mine/complaint.vue'
import alert from '../../components/mine/panel/alert.vue'
import { Card, Cell, Grid, GridItem, Group, Actionsheet, Toast } from 'vux'
export default {
  components: { Card, Cell, Grid, GridItem, Group, myinfo, mynews, complaint, Actionsheet, Toast, alert },
  data () {
    return {
      menus: [
        { label: '我的动态', icon: 'fa fa-bandcamp', style: 'font-size: 24px;color: #09bb07;', path: '/mine_dynamic' }, // 异步加载图片
        { label: '我的收藏', icon: 'fa fa-star', style: 'font-size: 24px;color: rgb(215, 185, 68);', path: '/mine_collect' },
        { label: '我的评论', icon: 'fa fa-comment', style: 'font-size: 24px;color: #828afc;', path: '/mine_comment' },
        { label: '我的点赞', icon: 'fa fa-thumbs-up', style: 'font-size: 24px;color: #f74c31;', path: '/mine_dianzan' }
      ],
      show: false,
      show1: false,
      show2: false,
      showAlert: false,
      showSuccess: false,
      menus3: [
        '确定解绑吗?<br/><span style="color:#919191;font-size:12px;">解绑后后无法正常使用系统了</span>','<span style="color:red;">确认解绑</span>'
      ]
    }
  },
  methods: {
    onDelete () {
      this.showSuccess = true
    },
    showinfo (item) {
      this.show = true
      console.log(item)
    },
    shownews (item) {
      this.show1 = true
      console.log(item)
    },
    showComp (item) {
      this.show2 = true
      console.log(item)
    }
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.weui-grids {
  margin-top: 10px;
  background-color: #fff;
}
.weui-grid{
  padding: 10px 10px;
}
.weui-grid /deep/ .weui-grid__icon{
    width:24px;
    height:24px;
  }
.weui-grid /deep/ .weui-grid__label{
    font-size: 12px;
  }
.menu-cell-icon{
  display:block;
  margin-right:5px;
  font-size:23px;
  color: #6d82ec;
  width:20px;
}
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
</style>
